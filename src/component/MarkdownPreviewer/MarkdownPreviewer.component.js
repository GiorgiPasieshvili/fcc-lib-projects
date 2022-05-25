import { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown'

import './MarkdownPreviewer.style.scss';

/** @namespace Component/MarkdownPreviewer/Component */
export class MarkdownPreviewer extends PureComponent {
    state = {
        markDownText: "# Markdown Prototype\n## Everything is converted and visualized better\n[More About Markdown](https://en.wikipedia.org/wiki/Markdown)\n\nYou can setlist\n- list item 1\n- list item 2\n- list item 3\n\n> Block Quotes!\n\n**Grab some code** - \n`<div></div>`\n```\nfunction addItems(x, y) {\n  return x + y\n}\n\n```\n![markdown logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/80px-Markdown-mark.svg.png)"
    }

    onChange(e) {
        this.setState({
            markDownText: e.target.value,
        });
    }

    renderEditor() {
        const { markDownText } = this.state;

        return (
            <textarea
              className='MarkdownPreviewer-Editor'
              onChange={ (e) => this.onChange(e) } 
              value={ markDownText } 
              cols="80" 
              rows="10"
            >
            </textarea>
        );
    }

    renderOutput() {
        const { markDownText } = this.state;

        return (
            <div className='MarkdownPreviewer-Output markdown' > 
                <ReactMarkdown>
                    { markDownText }
                </ReactMarkdown>
            </div>
        );
    }

    render() {
        return (
            <div className='MarkdownPreviewer'>
                { this.renderEditor() }
                { this.renderOutput() }
            </div>
        );
    }
}

export default MarkdownPreviewer;
