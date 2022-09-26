import { PureComponent } from "react";
import PropTypes from "prop-types";

import "./QuoteMachine.style.scss";

/** @namespace Component/QuoteMachine/Component */
export class QuoteMachine extends PureComponent {
  static propTypes = {
    randomQuote: PropTypes.object.isRequired,
    onNewQuoteClick: PropTypes.func.isRequired,
  };

  renderButtons() {
    const { onNewQuoteClick } = this.props;

    return (
      <div className="quote-machine__buttons">
        <a id="tweet" href="http://twitter.com/intent/tweet" target="blank">
          Tweet
        </a>
        <button id="new-quote" onClick={() => onNewQuoteClick()}>
          New Quote
        </button>
      </div>
    );
  }

  renderOutputs() {
    const { randomQuote } = this.props;

    return (
      <>
        <span className="quote-machine__quote">{randomQuote.quote}</span>
        <span className="quote-machine__author">{randomQuote.author}</span>
      </>
    );
  }

  render() {
    const { randomQuote } = this.props;

    if (Object.keys(randomQuote).length == 0) return null;

    return (
      <div className="quote-machine">
        {this.renderOutputs()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default QuoteMachine;
