import { PureComponent } from 'react';
import { Link } from "react-router-dom";

import './Menu.style.scss';

/** @namespace Component/Menu/Component */
export class Menu extends PureComponent {

    render() {
        return (
            <nav className='Menu'>
                 <ul>
                    <li>
                        <Link to="calculator">Calculator</Link>
                    </li>
                    <li>
                        <Link to="drummachine">DrumMachine</Link>
                    </li>
                    <li>
                        <Link to="markdownpreviewer">MarkdownPreviewer</Link>
                    </li>
                    <li>
                        <Link to="pomodoroclock">PomodoroClock</Link>
                    </li>
                    <li>
                        <Link to="quotemachine">QuoteMachine</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
