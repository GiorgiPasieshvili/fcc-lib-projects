import { PureComponent } from "react";
import PropTypes from "prop-types";

import "./PomodoroClock.style.scss";

/** @namespace Component/PomodoroClock/Component */
export class PomodoroClock extends PureComponent {
  static propTypes = {
    onPlay: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onBreakSelect: PropTypes.func.isRequired,
    onSessionSelect: PropTypes.func.isRequired,
    breakLength: PropTypes.number,
    sessionLength: PropTypes.number,
    sessionTime: PropTypes.string,
    sessionLabel: PropTypes.string,
  };

  static defaultProps = {
    breakLength: 5,
    sessionLength: 25,
    sessionTime: "25:00",
    sessionLabel: "Session",
  };

  // Render Component Heading
  renderTop() {
    return (
      <h2 className="pomodoro-clock__top-area">
        25 + <span>5</span> Clock
      </h2>
    );
  }

  // Render Break And Session Controls
  renderMiddle() {
    const { onBreakSelect, onSessionSelect, sessionLength, breakLength } =
      this.props;

    return (
      <div className="pomodoro-clock__middle-area">
        {/* Break Parameters */}
        <h4>
          {" "}
          <span> Break </span> Length: {breakLength}{" "}
        </h4>
        <input
          type="range"
          min="1"
          max="60"
          value={breakLength}
          onChange={(e) => onBreakSelect(e)}
        ></input>

        {/* Session Parameters */}
        <h4>
          {" "}
          <span> Session </span> Length: {sessionLength}{" "}
        </h4>
        <input
          type="range"
          min="1"
          max="60"
          value={sessionLength}
          onChange={(e) => onSessionSelect(e)}
        ></input>
      </div>
    );
  }

  // Render Session Label, Time, and Controls
  renderBottom() {
    const { onPlay, onReset, sessionTime, sessionLabel } = this.props;

    return (
      <div className="pomodoro-clock__bottom-area">
        <h3>
          {" "}
          {sessionLabel} <span> {sessionTime} </span>{" "}
        </h3>

        <div>
          <button onClick={() => onPlay()}>
            <img src="assets/play-icon.png" alt="play icon" />
          </button>
          <button onClick={() => onReset()}>
            <img src="assets/refresh-icon.png" alt="refresh icon" />
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="pomodoro-clock">
        {this.renderTop()}
        {this.renderMiddle()}
        {this.renderBottom()}
      </div>
    );
  }
}

export default PomodoroClock;
