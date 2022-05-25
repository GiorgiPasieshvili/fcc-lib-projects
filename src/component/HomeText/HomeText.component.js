import { PureComponent } from 'react';

import './HomeText.style.scss';

/** @namespace Component/HomeText/Component */
export class HomeText extends PureComponent {

    render() {
        return (
            <h1 className='HomeText'>
                free
                <span>Code</span>
                Camp Projects
                <span>...</span>
            </h1>
        );
    }
}

export default HomeText;
