import { PureComponent } from 'react';

import './PomodoroClock.style.scss';

/** @namespace Component/PomodoroClock/Component */
export class PomodoroClock extends PureComponent {

    // Render Break And Session Controls
    renderControls() {

        return (
            <div className='PomodoroClock-Controls'>

                {/* Break Controls */}
                <div>
                    <h3>Break Length</h3>
                    <div>
                        <button onClick="breakDecrement()"><i className="fas fa-arrow-down"></i></button>
                        <span>5</span>
                        <button onClick="breakIncrement()"><i className="fas fa-arrow-up"></i></button>
                    </div>
                </div>

                {/* Session Controls */}
                <div>
					<h3>Session Length</h3>
					<div>
						<button onClick="sessionDecrement()"><i className="fas fa-arrow-down"></i></button>
						<span>25</span>
						<button onClick="sessionIncrement()"><i className="fas fa-arrow-up"></i></button>
					</div>
				</div>
            </div>

        );
    }

    renderTimerDisplay() {
        
        return (
            <div>
                <h3>Session</h3>
                <span>25:00</span>
                <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
            </div>
        );
    }

    renderTimerControls() {
        return (
            <div>
                <button onClick="playSession()"><i className="fas fa-play"></i></button>
                <button onClick="resetValue()"><i className="fas fa-sync-alt"></i></button>
            </div>
        );
    }

    render() {

        return (
            <div className='PomodoroClock'>
                {/* Component Title */}
                <h2>25 + 5 Clock</h2>

                {/* Break And Session Controls */}
                { this.renderControls() }

                { this.renderTimerDisplay() }
                { this.renderTimerControls() }
            </div>
        );
    }
}

export default PomodoroClock;
