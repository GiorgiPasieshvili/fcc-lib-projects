import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CalculatorButtonsJSON from './CalculatorButtons';
import './Calculator.style.scss';

/** @namespace Component/Calculator/Component */
export class Calculator extends PureComponent {
    static propTypes = {
        onButtonClick: PropTypes.func.isRequired,
        currentTask: PropTypes.string.isRequired,
        wholeTask: PropTypes.string.isRequired
      }

    renderButtons() {
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

    renderScreen() {
        const { currentTask, wholeTask } = this.props;

        return (
            <div className='Calculator-Screen'>
                {/* Render Whole Task */}
                <p className='Calculator-Screen_Whole'>
                    { wholeTask }
                </p>

                {/* Render Current Chosen Operator or Number */}
                <p className='Calculator-Screen_Current'>
                    { currentTask }
                </p>
            </div>
        );
    }

    render() {
        return (
            <div className='Calculator'>
                { this.renderScreen() }
                { this.renderButtons() }
            </div>
        );
    }
}

export default Calculator;
