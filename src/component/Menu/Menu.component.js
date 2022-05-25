import { PureComponent } from 'react';
import { Link } from "react-router-dom";
import withRouter from '../../util/withRouter'
import PropTypes from 'prop-types';

import './Menu.style.scss';

/** @namespace Component/Menu/Component */
export class Menu extends PureComponent {
    static propTypes = {
        router: PropTypes.object.isRequired,
    }

    renderBack() {
        const { router: { location: { pathname } } } = this.props;

        if( pathname === '/' ) return null;

        return (
            <li>
                <Link to="/">
                    <img src="assist/back-icon.png" alt="back icon" />
                </Link>
            </li>
        )
    }

    render() {
        return (
            <nav className='Menu'>
                 <ul>
                    <li>
                        <Link to="calculator">
                            <img src="assist/calc-icon.png" alt="calculator icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="drummachine">
                            <img src="assist/drum-icon.png" alt="drum machine icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="markdownpreviewer">
                            <img src="assist/markdown-icon.png" alt="markdown previewer icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="pomodoroclock">
                            <img src="assist/pomodoro-icon.png" alt="pomodoro clock icon" />
                        </Link>
                    </li>
                    <li>
                        <Link to="quotemachine">
                            <img src="assist/quote-icon.png" alt="quotes machine icon" />
                        </Link>
                    </li>
                    { this.renderBack() }
                </ul>
            </nav>
        );
    }
}

export default withRouter(Menu);
