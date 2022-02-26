import { PureComponent } from 'react';

/** @namespace Component/App/Component */
export class Calculator extends PureComponent {

    onButtonClick() {
        return true
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>

                {/* Calculator Container */}
                <div className='Calculator'>

                    {/* Render Screen */}
                    <div className='Calculator-Screen'>
                        {/* Render Whole Operation */}
                        <div className='Calculator-Screen_Top'></div>

                        {/* Render Current Chosen Operator or Number */}
                        <div className='Calculator-Screen_Bottom'>0</div>
                    </div>

                    <div className='Calculator-Buttons'>
                        {/* Render Number Buttons */}
                        <button id="zero" onclick={this.onButtonClick}>0</button>
                        <button id="one" onclick={this.onButtonClick}>1</button>
                        <button id="two" onclick={this.onButtonClick}>2</button>
                        <button id="three" onclick={this.onButtonClick}>3</button>
                        <button id="four" onclick={this.onButtonClick}>4</button>
                        <button id="five" onclick={this.onButtonClick}>5</button>
                        <button id="six" onclick={this.onButtonClick}>6</button>
                        <button id="seven" onclick={this.onButtonClick}>7</button>
                        <button id="eight" onclick={this.onButtonClick}>8</button>
                        <button id="nine" onclick={this.onButtonClick}>9</button>

                        {/* Render Operator Buttons*/}
                        <button id="add" onclick={this.onButtonClick}>+</button>
                        <button id="subtract" onclick={this.onButtonClick}>-</button>
                        <button id="multiply" onclick={this.onButtonClick}>*</button>
                        <button id="divide" onclick={this.onButtonClick}>/</button>

                        {/* Render Other Buttons */}
                        <button id="equals" onclick={this.onButtonClick}>=</button>
                        <button id="decimal" onclick={this.onButtonClick}>.</button>
                        <button id="clear" onclick={this.onButtonClick}>AC</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;