import { PureComponent } from 'react';
import Calculator from './Calculator.component';

/** @namespace Component/Calculator/Container */
export class CalculatorContainer extends PureComponent {

    state = {
        currentOperation: '0',
        wholeOperation: '',
        operators: /([*/+-])/g
    };

    containerFunctions = {
        onButtonClick: this.onButtonClick.bind(this)
    };

    containerProps() {
        const { currentOperation, wholeOperation } = this.state;

        return {
            currentOperation,
            wholeOperation
        };
    };

    onNumberButtonClick(value) {     
      const { currentOperation, wholeOperation, operators } = this.state;
      let currentInstance = currentOperation;
      let wholeInstance = wholeOperation;

      if(currentInstance.match(operators) || currentInstance === '0') {
        currentInstance = '';
      }

      if(wholeInstance.match('=')) {
        currentInstance = '';
        wholeInstance = '';
      }

      this.setState({
        currentOperation: currentInstance + value,
        wholeOperation: wholeInstance + value
      });
    }

    onOperatorButtonClick(value) {
      const { currentOperation, wholeOperation, operators } = this.state;
      let currentInstance = currentOperation;
      let wholeInstance = wholeOperation;

      if(currentInstance.match(operators)) {
        wholeInstance = wholeInstance.slice(0, wholeInstance.length - 1);
      }

      if(wholeInstance.match('=')) {
        wholeInstance = currentInstance;
      }

      this.setState({
        currentOperation: value,
        wholeOperation: wholeInstance + value
      });
    }

    onClearButtonClick() {
      this.setState({
        currentOperation: '0',
        wholeOperation: ''
      })
    }
    
    onPointButtonClick() {
      const { currentOperation, wholeOperation } = this.state;
      let currentInstance = currentOperation;
      let wholeInstance = wholeOperation;
      
      if(currentInstance.indexOf(".") < 0){
        this.setState({
          currentOperation: currentInstance + '.',
          wholeOperation: wholeInstance + '.'
        });
      }
    }

    onMatchButtonClick() {
      const { currentOperation, wholeOperation, operators } = this.state;
      let currentInstance = currentOperation;
      let wholeInstance = wholeOperation;

      if(currentInstance.match(operators)){
        wholeInstance = wholeInstance.slice(0, wholeInstance.length - 1);
      }

      this.setState({
        currentOperation: JSON.stringify(eval(wholeInstance)),
        wholeOperation: wholeInstance + '=' + eval(wholeInstance)
      });
    }

    onButtonClick(button) {
        const { type, value } = button;

        if(type === 'number') {
          this.onNumberButtonClick(value);
        } else if (type === 'operator') {
          this.onOperatorButtonClick(value);
        } else if (type === 'clear') {
          this.onClearButtonClick();
        } else if (type === 'point') {
          this.onPointButtonClick();
        } else if (type === 'match') {
          this.onMatchButtonClick();
        } else {
          console.log('This button type is not exist')
        }
    }

    render() {
        return (
            <Calculator 
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    }
}

export default CalculatorContainer;