import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CalculatorButtonsJSON from './CalculatorButtons';
import './Calculator.style.scss';

/** @namespace Component/Calculator/Component */
export class Calculator extends PureComponent {
    static propTypes = {
        onButtonClick: PropTypes.func.isRequired,
        currentOperation: PropTypes.string.isRequired,
        wholeOperation: PropTypes.string.isRequired
      }

    renderCharacters() {
        const { onButtonClick } = this.props;

        const calculatorButtons = CalculatorButtonsJSON.map(button => (
                <button
                    id={ button.name }
                    key={ button.name }
                    onClick={ () => onButtonClick(button) }
                >
                    { button.value }
                </button>
            )
        );

        return (
            <div className='Calculator-Buttons'>
                { calculatorButtons }
            </div>
        );
    }

    renderOutput() {
        const { currentOperation, wholeOperation } = this.props;

        return (
            <div className='Calculator-Output'>
                {/* Render Whole Operation */}
                <div className='Calculator-Output_Whole'>
                    { wholeOperation }
                </div>

                {/* Render Current Chosen Operator or Number */}
                <div className='Calculator-Output_Current'>
                    { currentOperation }
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='Calculator'>
                { this.renderOutput() }
                { this.renderCharacters() }
            </div>
        );
    }
}

export default Calculator;
