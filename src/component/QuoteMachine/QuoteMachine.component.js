import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './QuoteMachine.style.scss';

/** @namespace Component/QuoteMachine/Component */
export class QuoteMachine extends PureComponent {
    static propTypes = {
        randomQuote: PropTypes.object.isRequired,
        onNewQuoteClick: PropTypes.func.isRequired
    }

    renderButtons() {
        const { onNewQuoteClick } = this.props;

        return (
			<div className='QuoteMachine-Buttons'>
				<a href='http://twitter.com/intent/tweet' target='blank' >
                    Tweet
                </a>
				<button onClick={ () => onNewQuoteClick() } >
                    New Quote
                </button>
			</div>
        );
    }

    renderOutputs() {
        const { randomQuote } = this.props;

        return (
            <>
                <span className='QuoteMachine-Quote'>
                    {randomQuote.quote}
                </span>
                <span className='QuoteMachine-Author'>
                    {randomQuote.author}
                </span>
            </>
        );
    }

    render() {
        return (
            <div className='QuoteMachine'>
                { this.renderOutputs() }
                { this.renderButtons() }
            </div>
        );
    }
}

export default QuoteMachine;
