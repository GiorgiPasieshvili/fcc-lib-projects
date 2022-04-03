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

    renderOutput() {
        const { output } = this.props;

        return (
            <h5 className="DrumMachine-Output">
                { output }
            </h5>
        );
    }

    render() {
        return (
            <div className="DrumMachine">
                { this.renderOutput() }
                { this.renderButtons() }
            </div>
        );
    }
}

export default DrumMachine;
