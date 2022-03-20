import { PureComponent } from 'react';
import QuoteMachine from './QuoteMachine.component';

/** @namespace Component/QuoteMachine/Container */
export class QuoteMachineContainer extends PureComponent {

    state = {
    };

    containerFunctions = {
    };

    containerProps() {

    };

    render() {
        return (
            <QuoteMachine 
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    }
}

export default QuoteMachineContainer;
