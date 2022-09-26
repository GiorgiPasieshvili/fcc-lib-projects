import { PureComponent } from 'react';
import { Link } from "react-router-dom";
import withRouter from 'util/withRouter'
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
                    <img src="assets/back-icon.png" alt="back icon" />
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
                            <img src="assets/calc-icon.png" alt="calculator" />
                        </Link>
                    </li>
                    <li>
                        <Link to="drum-machine">
                            <img src="assets/drum-icon.png" alt="drum machine" />
                        </Link>
                    </li>
                    <li>
                        <Link to="markdown-previewer">
                            <img src="assets/markdown-icon.png" alt="markdown previewer" />
                        </Link>
                    </li>
                    <li>
                        <Link to="pomodoro-clock">
                            <img src="assets/pomodoro-icon.png" alt="pomodoro clock" />
                        </Link>
                    </li>
                    <li>
                        <Link to="quote-machine">
                            <img src="assets/quote-icon.png" alt="quotes machine" />
                        </Link>
                    </li>
                    { this.renderBack() }
                </ul>
            </nav>
        );
    }
}

export default withRouter(Menu);
