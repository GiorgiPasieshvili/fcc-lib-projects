import { render } from 'react-dom';
import { PureComponent } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from './component/Calculator';
import DrumMachine from './component/DrumMachine';
import MarkdownPreviewer from './component/MarkdownPreviewer';
import PomodoroClock from './component/PomodoroClock';
import QuoteMachine from './component/QuoteMachine';
import Menu from './component/Menu';
import './style/main.scss';

class AppRouter extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Menu />

                <Routes>
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/drummachine" element={<DrumMachine />} />
                    <Route path="/markdownpreviewer" element={<MarkdownPreviewer />} />
                    <Route path="/pomodoroclock" element={<PomodoroClock />} />
                    <Route path="/quotemachine" element={<QuoteMachine />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

render(<AppRouter />, document.getElementById('root'));
