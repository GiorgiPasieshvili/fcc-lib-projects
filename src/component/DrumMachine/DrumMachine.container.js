import { PureComponent } from 'react';

import DrumMachineButtonsJSON from './DrumMachineButtons';
import DrumMachine from './DrumMachine.component';

/** @namespace Component/Calculator/Container */
export class DrumMachineContainer extends PureComponent {

    state = {
        output: "Show me what you got"
    };

    containerFunctions = {
        onButtonClick: this.onButtonClick.bind(this)
    };

    containerProps() {
        const { output } = this.state;

        return {
            output
        };
    }

    componentDidMount() {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    _handleKeyDown(e) {
        const button = DrumMachineButtonsJSON.find(button => (e.key === button.name));
        if(button){
            const audio = new Audio(button.audio);
            audio.currentTime = 0;
            audio.play();
        }
    }

    onButtonClick(e, button) {
        const audio = e.target.firstElementChild;
        audio.currentTime = 0;
        audio.play();

        this.setState({ output: button.audio_name });
    }

    render() {
        return (
            <DrumMachine 
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    }
}

export default DrumMachineContainer;
