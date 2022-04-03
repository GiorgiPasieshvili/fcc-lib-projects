import { PureComponent } from 'react';
import PomodoroClock from './PomodoroClock.component';

/** @namespace Component/PomodoroClock/Container */
export class PomodoroClockContainer extends PureComponent {

    state = {
    };

    containerFunctions = {
    };

    containerProps() {

    }

    render() {
        return (
            <PomodoroClock 
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    }
}

export default PomodoroClockContainer;
