import { PureComponent } from "react";
import PropTypes from "prop-types";

import CalculatorData from "./Calculator.data.json";
import "./Calculator.style.scss";

/** @namespace Component/Calculator/Component */
export class Calculator extends PureComponent {
  static propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    currentTask: PropTypes.string.isRequired,
    wholeTask: PropTypes.string.isRequired,
  };

  renderButtons() {
    const { onButtonClick } = this.props;

    const calculatorButtons = CalculatorData.map((button) => (
      <button
        id={button.name}
        key={button.name}
        onClick={() => onButtonClick(button)}
      >
        {button.symbol}
      </button>
    ));

    return <div className="calculator__buttons">{calculatorButtons}</div>;
  }

  renderScreen() {
    const { currentTask, wholeTask } = this.props;

    return (
      <div className="calculator__screen">
        {/* Render Whole Task */}
        <span>{wholeTask}</span>

        {/* Render Current Chosen Operator or Number */}
        <span>{currentTask}</span>
      </div>
    );
  }

  render() {
    return (
      <div className="calculator">
        {this.renderScreen()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default Calculator;
