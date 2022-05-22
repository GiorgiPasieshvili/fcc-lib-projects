import { PureComponent } from 'react';
import QuoteMachine from './QuoteMachine.component';

/** @namespace Component/QuoteMachine/Container */
export class QuoteMachineContainer extends PureComponent {
    
    state = {
        colors: [
            '#8bf490',
            '#f78ab7',
            '#f9f4a4',
            '#a1e4ea',
            '#ffa3e4'
        ],
        quotes: [],
        randomQuote: {}
    };

    containerFunctions = {
        onNewQuoteClick: this.onNewQuoteClick.bind(this),
    };

    containerProps() {
        const { colors, quotes, randomQuote } = this.state;

        return {
            colors, quotes, randomQuote
        };
    }

    componentDidMount() {
        const { colors } = this.state;
        this.setColors(this.getRandom(colors));
        this.fetchQuotes();
    }

    componentWillUnmount() {
        const body = document.getElementsByTagName('body')[0];

        body.removeAttribute("style");
    }

    onNewQuoteClick() {
        const { quotes, colors } = this.state;

        this.setColors(this.getRandom(colors));
        this.setState({ randomQuote: this.getRandom(quotes)});
    }

    fetchQuotes() {
        const quotesUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        
        fetch(quotesUrl)
          .then((response) => response.json())
          .then(({ quotes }) => {
            this.setState({ quotes: quotes, randomQuote: this.getRandom(quotes) })
          })
          .catch((error) => {
            throw new Error(`HTTP error! Status: ${ error.status }`);
          });
    }

    setColors(color) {
        const body = document.getElementsByTagName('body')[0];
        // const tweetButton = document.getElementById('tweet');
        // const quoteButton = document.getElementById('new-quote');

        // body.style.color = color;
        body.style.backgroundColor = color;
        // tweetButton.style.color = color;
        // quoteButton.style.backgroundColor = color;
    }

    getRandom(array) {
        return array[Math.floor((Math.random()*array.length))];
    }

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
