import { PureComponent } from "react";

import Calculator from "./Calculator.component";

/** @namespace Component/Calculator/Container */
export class CalculatorContainer extends PureComponent {
  state = {
    currentTask: "0",
    wholeTask: "",
    operators: /([*/+-])/g,
  };

  containerFunctions = {
    onButtonClick: this.onButtonClick.bind(this),
  };

  containerProps() {
    const { currentTask, wholeTask } = this.state;

    return {
      currentTask,
      wholeTask,
    };
  }

  onNumberButtonClick(symbol) {
    const { currentTask, wholeTask, operators } = this.state;
    let currentInstance = currentTask;
    let wholeInstance = wholeTask;

    if (currentInstance.match(operators) || currentInstance === "0") {
      currentInstance = "";
    }

    if (wholeInstance.match("=")) {
      currentInstance = "";
      wholeInstance = "";
    }

    this.setState({
      currentTask: currentInstance + symbol,
      wholeTask: wholeInstance + symbol,
    });
  }

  onOperatorButtonClick(symbol) {
    const { currentTask, wholeTask, operators } = this.state;
    let currentInstance = currentTask;
    let wholeInstance = wholeTask;

    if (currentInstance.match(operators)) {
      wholeInstance = wholeInstance.slice(0, wholeInstance.length - 1);
    }

    if (wholeInstance.match("=")) {
      wholeInstance = currentInstance;
    }

    this.setState({
      currentTask: symbol,
      wholeTask: wholeInstance + symbol,
    });
  }

  onClearButtonClick() {
    this.setState({
      currentTask: "0",
      wholeTask: "",
    });
  }

  onPointButtonClick() {
    const { currentTask, wholeTask } = this.state;
    let currentInstance = currentTask;
    let wholeInstance = wholeTask;

    if (currentInstance.indexOf(".") < 0) {
      this.setState({
        currentTask: currentInstance + ".",
        wholeTask: wholeInstance + ".",
      });
    }
  }

  onMatchButtonClick() {
    const { currentTask, wholeTask, operators } = this.state;
    let currentInstance = currentTask;
    let wholeInstance = wholeTask;

    if (currentInstance.match(operators)) {
      wholeInstance = wholeInstance.slice(0, wholeInstance.length - 1);
    }

    this.setState({
      currentTask: JSON.stringify(eval(wholeInstance)),
      wholeTask: wholeInstance + "=" + eval(wholeInstance),
    });
  }

  onButtonClick(button) {
    const { type, symbol } = button;

    if (type === "number") {
      this.onNumberButtonClick(symbol);
    } else if (type === "operator") {
      this.onOperatorButtonClick(symbol);
    } else if (type === "clear") {
      this.onClearButtonClick();
    } else if (type === "point") {
      this.onPointButtonClick();
    } else if (type === "match") {
      this.onMatchButtonClick();
    } else {
      console.log("This button type is not exist");
    }
  }

  render() {
    return (
      <Calculator {...this.containerFunctions} {...this.containerProps()} />
    );
  }
}

export default CalculatorContainer;
