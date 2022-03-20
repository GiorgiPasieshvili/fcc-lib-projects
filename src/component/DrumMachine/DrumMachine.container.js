import { PureComponent } from 'react';
import DrumMachine from './DrumMachine.component';

/** @namespace Component/Calculator/Container */
export class DrumMachineContainer extends PureComponent {

    state = {
    };

    containerFunctions = {
    };

    containerProps() {

    };

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
