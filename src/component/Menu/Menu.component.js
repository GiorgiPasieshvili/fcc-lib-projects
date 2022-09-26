import { PureComponent } from "react";
import { Link } from "react-router-dom";
import withRouter from "util/withRouter";
import PropTypes from "prop-types";

import "./Menu.style.scss";

/** @namespace Component/Menu/Component */
export class Menu extends PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
  };

  renderBack() {
    const {
      router: {
        location: { pathname },
      },
    } = this.props;

    if (pathname === "/") return null;

    return (
      <li className="menu__item">
        <Link to="/">
          <img src="assets/back.png" alt="back" />
        </Link>
      </li>
    );
  }

  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="calculator">
              <img src="assets/calculator.png" alt="calculator" />
            </Link>
          </li>
          <li className="menu__item">
            <Link to="drum-machine">
              <img src="assets/drum.png" alt="drum machine" />
            </Link>
          </li>
          <li className="menu__item">
            <Link to="markdown-previewer">
              <img src="assets/markdown.png" alt="markdown previewer" />
            </Link>
          </li>
          <li className="menu__item">
            <Link to="pomodoro-clock">
              <img src="assets/pomodoro.png" alt="pomodoro clock" />
            </Link>
          </li>
          <li className="menu__item">
            <Link to="quote-machine">
              <img src="assets/quote.png" alt="quotes machine" />
            </Link>
          </li>
          {this.renderBack()}
        </ul>
      </nav>
    );
  }
}

export default withRouter(Menu);
