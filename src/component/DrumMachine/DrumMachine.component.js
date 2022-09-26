import { PureComponent } from "react";
import PropTypes from "prop-types";

import DrumMachineData from "./DrumMachine.data.json";
import "./DrumMachine.style.scss";

/** @namespace Component/DrumMachine/Component */
export class DrumMachine extends PureComponent {
  static propTypes = {
    onButtonClick: PropTypes.func.isRequired,
    output: PropTypes.string.isRequired,
  };

  renderRectButtons() {
    return (
      <div className="drum-machine__rect-buttons">
        <button className="drum-machine__rect-button"></button>
        <button className="drum-machine__rect-button"></button>
        <button className="drum-machine__rect-button"></button>
        <button className="drum-machine__rect-button"></button>
      </div>
    );
  }

  renderSmallTuners() {
    return (
      <div className="drum-machine__small-tuners">
        <button className="drum-machine__small-tuner"></button>
        <button className="drum-machine__small-tuner"></button>
        <button className="drum-machine__small-tuner"></button>
        <button className="drum-machine__small-tuner"></button>
      </div>
    );
  }

  renderBigTuner() {
    return (
      <button className="drum-machine__big-tuner"></button>
    );
  }

  renderOutput() {
    const { output } = this.props;

    return <div className="drum-machine__output">{output}</div>;
  }

  renderVolumizer() {
    return (
      <div className="drum-machine__volumizers">
        <div className="drum-machine__volumizer">
          <input type="range" />
          <img src="assets/drum-levels.png" alt="levels" />
        </div>
        <div className="drum-machine__volumizer">
          <input type="range" />
          <img src="assets/drum-levels.png" alt="levels" />
        </div>
      </div>
    );
  }

  renderPads() {
    const { onButtonClick } = this.props;

    const drumMachinePads = DrumMachineData.map((button) => (
      <button
        className="drum-machine__pad"
        key={button.key}
        onClick={(e) => onButtonClick(e, button)}
      >
        <audio className="clip" src={button.audio}></audio>
        {button.key}
      </button>
    ));

    return <div className="drum-machine__pads">{drumMachinePads}</div>;
  }

  render() {
    return (
      <div className="drum-machine">
        {this.renderRectButtons()}
        {this.renderBigTuner()}
        {this.renderSmallTuners()}
        {this.renderOutput()}
        {this.renderVolumizer()}
        {this.renderPads()}
      </div>
    );
  }
}

export default DrumMachine;
