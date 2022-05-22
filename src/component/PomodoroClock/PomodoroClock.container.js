import { PureComponent } from 'react';
import PomodoroClock from './PomodoroClock.component';

/** @namespace Component/PomodoroClock/Container */
export class PomodoroClockContainer extends PureComponent {

    state = {
        breakLength: 5,
        sessionLength: 25,
        sessionLabel: 'Session',
        sessionTime: '25:00',
        isBreak: false,
        timeInSeconds: 1500,
        intervalId: 0,
        audio: new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav')
    };

    containerFunctions = {
        onBreakSelect: this.onBreakSelect.bind(this),
        onSessionSelect: this.onSessionSelect.bind(this),
        onPlay: this.onPlay.bind(this),
        onReset: this.onReset.bind(this)
    };

    containerProps() {
        const { breakLength, sessionLength, sessionTime, sessionLabel } = this.state;

        return {
            breakLength, sessionLength, sessionTime, sessionLabel
        };
    }

    onBreakSelect(e) {
        const numberLength = Number(e.target.value);
        this.setState({
            BreakTime: this._getFormattedTime(numberLength * 60),
            breakLength: numberLength,
            timeInSeconds: numberLength * 60
        });
    }

    onSessionSelect(e) {
        const numberLength = Number(e.target.value);
        this.setState({
            sessionTime: this._getFormattedTime(numberLength * 60),
            sessionLength: numberLength,
            timeInSeconds: numberLength * 60
        });
    }

    onPlay() {
        const { intervalId } = this.state;

        if (intervalId) {
            clearInterval(intervalId);
            this.setState({ intervalId: 0 });
            return;
        }
      
        const newIntervalId = setInterval(() => this._timerCountDown(), 1000);
        this.setState({ intervalId: newIntervalId });
    }

    onReset() {
        const { intervalId, audio } = this.state;
        clearInterval(intervalId);
        this.setState({ intervalId: 0 });

        this.setState({
            sessionLength: 25,
            breakLength: 5,
            sessionTime: '25:00',
            timeInSeconds: 1500,
            isBreak: false
        });

        audio.pause();
        audio.currentTime = 0;
    }

    _timerCountDown() {
        const { timeInSeconds, isBreak, breakLength, sessionLength, audio } = this.state;

        this.setState({
            sessionTime: this._getFormattedTime(timeInSeconds - 1),
            timeInSeconds: timeInSeconds - 1
        });

        if (timeInSeconds < 1 && !isBreak) {
            this.setState({
                isBreak: true,
                sessionLabel: 'Break',
                timeInSeconds: breakLength * 60,
                sessionTime: this._getFormattedTime(breakLength * 60),
            });

            audio.play();
        } else if (timeInSeconds < 1 && isBreak) {
            this.setState({
                isBreak: false,
                sessionLabel: 'Session',
                timeInSeconds: sessionLength * 60,
                sessionTime: this._getFormattedTime(sessionLength * 60),
            });

            audio.play();
        }
    }

    _getFormattedTime(timeInSeconds) {
        let formattedLeftMinutes = Math.floor(timeInSeconds / 60) < 10 ? '0' + Math.floor(timeInSeconds / 60) : Math.floor(timeInSeconds / 60);
        let formattedLeftSeconds = timeInSeconds % 60 < 10 ? '0' + timeInSeconds % 60 : timeInSeconds % 60;
        return `${formattedLeftMinutes}:${formattedLeftSeconds}`;
    }

    render() {
        return (
            <PomodoroClock 
                { ...this.containerFunctions }
                { ...this.containerProps() }
            />
        );
    }
}

export default PomodoroClockContainer;
