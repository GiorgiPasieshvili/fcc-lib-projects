import { PureComponent } from 'react';
import CalculatorCharacters from './CalculatorCharacters';
import './Calculator.style.scss';

/** @namespace Component/App/Component */
export class Calculator extends PureComponent {

    renderCharacters() {
        const { onButtonClick } = this.props;

        const calculatorButtons = CalculatorCharacters.map(character => (
                <button
                    id={ character.name }
                    key={ character.name }
                    onClick={ () => onButtonClick(character) }
                >
                    { character.value }
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