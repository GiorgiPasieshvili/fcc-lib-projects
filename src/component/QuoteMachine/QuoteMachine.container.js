import { PureComponent } from "react";
import QuoteMachine from "./QuoteMachine.component";

/** @namespace Component/QuoteMachine/Container */
export class QuoteMachineContainer extends PureComponent {
  state = {
    quotes: [],
    randomQuote: {},
  };

  containerFunctions = {
    onNewQuoteClick: this.onNewQuoteClick.bind(this),
  };

  containerProps() {
    const { colors, quotes, randomQuote } = this.state;

    return {
      colors,
      quotes,
      randomQuote,
    };
  }

  componentDidMount() {
    const quotesUrl =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    fetch(quotesUrl)
      .then((response) => response.json())
      .then(({ quotes }) => {
        this.setState({ quotes: quotes, randomQuote: this._getRandom(quotes) });
      })
      .catch((error) => {
        throw new Error(`HTTP error! Status: ${error.status}`);
      });
  }

  onNewQuoteClick() {
    const { quotes } = this.state;

    this.setState({ randomQuote: this._getRandom(quotes) });
  }

  _getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  render() {
    return (
      <QuoteMachine {...this.containerFunctions} {...this.containerProps()} />
    );
  }
}

export default QuoteMachineContainer;
