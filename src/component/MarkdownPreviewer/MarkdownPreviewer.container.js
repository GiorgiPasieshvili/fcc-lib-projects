import { PureComponent } from 'react';
import MarkdownPreviewer from './MarkdownPreviewer.component';

/** @namespace Component/MarkdownPreviewer/Container */
export class MarkdownPreviewerContainer extends PureComponent {

    state = {
    };

    containerFunctions = {
    };

    containerProps() {

    };

    render() {
        return (
            <MarkdownPreviewer 
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    }
}

export default MarkdownPreviewerContainer;
