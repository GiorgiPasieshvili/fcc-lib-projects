import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './PomodoroClock.style.scss';

/** @namespace Component/PomodoroClock/Component */
export class PomodoroClock extends PureComponent {
    static propTypes = {
        onBreakIncrement: PropTypes.func.isRequired,
        onBreakDecrement: PropTypes.func.isRequired,
        onSessionIncrement: PropTypes.func.isRequired,
        onSessionDecrement: PropTypes.func.isRequired,
        onPlay: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired,
        breakLength: PropTypes.number,
        sessionLength: PropTypes.number,
        sessionTime: PropTypes.string
      }

    static defaultProps = {
        breakLength: 5,
        sessionLength: 25,
        sessionTime: '25:00'
    }

    // Render Break And Session Controls
    renderControls() {
        const {
            onBreakIncrement,
            onBreakDecrement,
            onSessionIncrement,
            onSessionDecrement,
            breakLength,
            sessionLength,
        } = this.props;

        return (
            <div className='PomodoroClock-LengthControls'>

                {/* Break Controls */}
                <div>
                    <h3>Break Length</h3>
                    <div className='PomodoroClock-Controls'>
                        <button onClick={ () => onBreakDecrement() }>
                            <i className="fas fa-arrow-down"></i>
                        </button>
                        <span>{ breakLength }</span>
                        <button onClick={ () => onBreakIncrement() }>
                            <i className="fas fa-arrow-up"></i>
                        </button>
                    </div>
                </div>

                {/* Session Controls */}
                <div>
					<h3>Session Length</h3>
					<div className='PomodoroClock-Controls'>
						<button onClick={ () => onSessionDecrement() }>
                            <i className="fas fa-arrow-down"></i>
                        </button>
						<span>{ sessionLength }</span>
						<button onClick={ () => onSessionIncrement() }>
                            <i className="fas fa-arrow-up"></i>
                        </button>
					</div>
				</div>
            </div>
        );
    }

    renderTimerControls() {
        const { onPlay, onReset } = this.props;

        return (
            <div className='PomodoroClock-Controls'>
                <button onClick={ () => onPlay() }>
                    <i className="fas fa-play"></i>
                </button>
                <button onClick={ () => onReset() }>
                    <i className="fas fa-sync-alt"></i>
                </button>
            </div>
        );
    }

    render() {
        const { sessionTime } = this.props;

        return (
            <div className='PomodoroClock'>
                {/* Component Title */}
                <h2>25 + 5 Clock</h2>

                {/* Break And Session Controls */}
                { this.renderControls() }

                <h3>Session</h3>
                <span>{ sessionTime }</span>
                <audio src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />

                { this.renderTimerControls() }
            </div>
        );
    }
}

export default PomodoroClock;
