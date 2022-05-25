import { PureComponent } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import './MarkdownPreviewer.style.scss';

/** @namespace Component/MarkdownPreviewer/Component */
export class MarkdownPreviewer extends PureComponent {
    state = {
        content: ""
    }

    componentDidMount() {
        fetch("assist/markdown.md")
        .then((res) => res.text())
        .then((text) => this.setState({ content: text }));
    }

    onChange(e) {
        this.setState({
            content: e.target.value,
        });
    }

    renderEditor() {
        const { content } = this.state;

        return (
            <textarea
              className='MarkdownPreviewer-Editor'
              onChange={ (e) => this.onChange(e) } 
              value={ content } 
              cols="80" 
              rows="10"
            >
            </textarea>
        );
    }

    renderOutput() {
        const { content } = this.state;

        return (
            <div className='MarkdownPreviewer-Output' > 
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    { content }
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
