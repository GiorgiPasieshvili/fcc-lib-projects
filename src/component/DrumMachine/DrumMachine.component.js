import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import DrumMachineButtonsJSON from './DrumMachineButtons';
import './DrumMachine.style.scss';

/** @namespace Component/DrumMachine/Component */
export class DrumMachine extends PureComponent {
    static propTypes = {
        onButtonClick: PropTypes.func.isRequired,
        output: PropTypes.string.isRequired
      }

    renderRectButtons() {
        return (
            <div className="DrumMachine-RectButtons">
                <button>asd</button>
                <button>asd</button>
                <button>asd</button>
                <button>asd</button>
            </div>
        );
    }

    renderSmallTuners() {
        return (
            <div className="DrumMachine-Tuners DrumMachine-Tuners_type_small">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
    
    renderBigTuner() {
        return (
            <div className="DrumMachine-Tuners DrumMachine-Tuners_type_big">
                <span></span>
            </div>
        );
    }

    renderOutput() {
        const { output } = this.props;

        return (
            <div className="DrumMachine-Output">
                { output }
            </div>
        ); 
    }

    renderVolumizer() {
        return (
            <div className="DrumMachine-Volumizer">
                <div>
                    <input type="range" />
                    <img src="assist/levels.png" alt="levels" />
                </div>
                <div>
                    <input type="range" />
                    <img src="assist/levels.png" alt="levels" />
                </div>
            </div>
        );
    }

    renderButtons() {
        const { onButtonClick } = this.props;

        const drumMachineButtons = DrumMachineButtonsJSON.map(button => (
            <button
                className='drum-pad'
                key={ button.name }
                onClick={ (e) => onButtonClick(e, button) }
            >
                <audio 
                    className='clip'
                    src={ button.audio }
                >
                </audio>
                { button.name }
            </button>
        ));

        return (
            <div className='DrumMachine-Buttons'>
                { drumMachineButtons }
            </div>
        );
    }

    render() {
        return (
            <div className="DrumMachine">
                { this.renderRectButtons() }
                { this.renderBigTuner() }
                { this.renderSmallTuners() }
                { this.renderOutput() }
                { this.renderVolumizer() }
                { this.renderButtons() }
            </div>
        );
    }
}

export default DrumMachine;
