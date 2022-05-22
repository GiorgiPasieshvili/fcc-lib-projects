import { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './PomodoroClock.style.scss';

/** @namespace Component/PomodoroClock/Component */
export class PomodoroClock extends PureComponent {
    static propTypes = {
        onPlay: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired,
        onBreakSelect: PropTypes.func.isRequired,
        onSessionSelect: PropTypes.func.isRequired,
        breakLength: PropTypes.number,
        sessionLength: PropTypes.number,
        sessionTime: PropTypes.string,
        sessionLabel: PropTypes.string
    }

    static defaultProps = {
        breakLength: 5,
        sessionLength: 25,
        sessionTime: '25:00',
        sessionLabel: 'Session'
    }

    // Render Component Heading
    renderTop() {
        return (
            <h2 className='PomodoroClock-Top'>
                25 + <span>5</span> Clock
            </h2>
        );
    }

    // Render Break And Session Controls
    renderMiddle() {
        const {
            onBreakSelect,
            onSessionSelect,
            sessionLength,
            breakLength
        } = this.props;

        return (
            <div className='PomodoroClock-Middle'>
                {/* Break Parameters */}
                <h4> <span> Break </span> Length: { breakLength } </h4>
                <input
                    type="range"
                    min="1"
                    max="60"
                    value={ breakLength }
                    onChange={ (e) => onBreakSelect(e) }>
                </input>

                {/* Session Parameters */}
                <h4> <span> Session </span> Length: { sessionLength } </h4>
                <input
                    type="range"
                    min="1"
                    max="60"
                    value={ sessionLength }
                    onChange={ (e) => onSessionSelect(e) }>
                </input>
            </div>
        );
    }

    renderBottom() {
        const {
            onPlay,
            onReset,
            sessionTime,
            sessionLabel
        } = this.props;

        return (
            <div className='PomodoroClock-Bottom'>
                <h3> { sessionLabel } <span> { sessionTime } </span> </h3>

                <div>
                    <button onClick={ () => onPlay() }>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 0C11.1938 0 0 11.1938 0 25C0 38.8063 11.1938 50 25 50C38.8063 50 50 38.8063 50 25C50 11.1938 38.8063 0 25 0ZM25 5.79833C35.6041 5.79833 44.2017 14.3959 44.2017 25C44.2017 35.6041 35.6041 44.2017 25 44.2017C14.3959 44.2017 5.79833 35.6041 5.79833 25C5.79833 14.3959 14.3959 5.79833 25 5.79833ZM18.75 12.5183V37.4817L37.5 25L18.75 12.5183Z" fill="#84DCC6"/>
                        </svg>
                    </button>
                    <button onClick={ () => onReset() }>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 50C11.1925 50 0 38.8075 0 25C0 11.1925 11.1925 0 25 0C38.8075 0 50 11.1925 50 25C50 38.8075 38.8075 50 25 50ZM37.05 37.69C40.0678 34.8297 41.9685 30.9883 42.4117 26.854C42.8549 22.7197 41.8115 18.5628 39.4686 15.1278C37.1256 11.6928 33.6362 9.20424 29.6254 8.10797C25.6146 7.0117 21.3444 7.37933 17.58 9.145L20.0175 13.5325C21.9198 12.7057 23.998 12.3653 26.0647 12.542C28.1313 12.7186 30.1216 13.4068 31.856 14.5445C33.5903 15.6821 35.0144 17.2335 35.9997 19.0588C36.985 20.884 37.5006 22.9258 37.5 25H30L37.05 37.69ZM32.42 40.855L29.9825 36.4675C28.0802 37.2943 26.002 37.6347 23.9353 37.458C21.8687 37.2814 19.8784 36.5932 18.144 35.4555C16.4097 34.3179 14.9856 32.7665 14.0003 30.9412C13.015 29.116 12.4994 27.0742 12.5 25H20L12.95 12.31C9.93222 15.1703 8.03149 19.0117 7.58831 23.146C7.14513 27.2803 8.18847 31.4372 10.5314 34.8722C12.8744 38.3072 16.3638 40.7958 20.3746 41.892C24.3854 42.9883 28.6556 42.6207 32.42 40.855V40.855Z" fill="#F5F5F5"/>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className='PomodoroClock'>
                {/* Render Component Heading */}
                { this.renderTop() }

                {/* Render Break And Session Parameters */}
                { this.renderMiddle() }

                {/* Render Session Label, Time, and Controls */}
                { this.renderBottom() }
            </div>
        );
    }
}

export default PomodoroClock;
