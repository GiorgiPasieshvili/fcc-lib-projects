import { PureComponent } from 'react';

import './QuoteMachine.style.scss';

/** @namespace Component/QuoteMachine/Component */
export class QuoteMachine extends PureComponent {

    getQuote() {

    }

    renderButtons() {
        return (
			<div className='QuoteMachine-Buttons'>
				<a
                    href='http://twitter.com/intent/tweet'
                    target='blank'
                >
                    Tweet
                </a>
				<button
                    onClick={ () => this.getQuote() }
                >
                    New Quote
                </button>
			</div>
        );
    }

    renderOutputs() {
        return (
            <>
                <span className='QuoteMachine-Quote'></span>
                <span className='QuoteMachine-Author'></span>
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
