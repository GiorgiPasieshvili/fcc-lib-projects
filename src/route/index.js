import { PureComponent } from 'react';
// import { Route } from 'react-router-dom';
import Calculator from '../component/Calculator';
import DrumMachine from '../component/DrumMachine';
import MarkdownPreviewer from '../component/MarkdownPreviewer';
import PomodoroClock from '../component/PomodoroClock';
import QuoteMachine from '../component/QuoteMachine';
import '../style/main.scss';

class AppRouter extends PureComponent {
    
    render() {
        return (
            <>
                {/* <Calculator /> */}
                {/* <DrumMachine /> */}
                {/* <MarkdownPreviewer /> */}
                <PomodoroClock />
                {/* <QuoteMachine /> */}
            </>
        )
    }
}

export default AppRouter;
