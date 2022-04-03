import { PureComponent } from 'react';

import './PomodoroClock.style.scss';

/** @namespace Component/PomodoroClock/Component */
export class PomodoroClock extends PureComponent {

    render() {
        return (
            <div className='MarkdownPreviewer'>
                { this.renderEditor() }
                { this.renderOutput() }
            </div>
        )
    }
}

export default PomodoroClock;
