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
        onBreakIncrement: this.onBreakIncrement.bind(this),
        onBreakDecrement: this.onBreakDecrement.bind(this),
        onSessionIncrement: this.onSessionIncrement.bind(this),
        onSessionDecrement: this.onSessionDecrement.bind(this),
        onPlay: this.onPlay.bind(this),
        onReset: this.onReset.bind(this)
    };

    containerProps() {
        const { breakLength, sessionLength, sessionTime, sessionLabel } = this.state;

        return {
            breakLength, sessionLength, sessionTime, sessionLabel
        };
    }

    onBreakIncrement() {
        const { breakLength } = this.state;

        if (breakLength < 10) {
            this.setState({ breakLength: breakLength + 1 });
        }
    }

    onBreakDecrement() {
        const { breakLength } = this.state;

        if (breakLength > 1) {
            this.setState({ breakLength: breakLength - 1 });
        }
    }

    onSessionIncrement() {
        const { sessionLength, timeInSeconds } = this.state;

        if (sessionLength < 60) {
            this.setState({
                sessionLength: sessionLength + 1,
                sessionTime: this.getFormattedTime(timeInSeconds + 60),
                timeInSeconds: timeInSeconds + 60
            });
        }
    }

    onSessionDecrement() {
        const { sessionLength, timeInSeconds } = this.state;

        if (sessionLength > 1) {
            this.setState({
                sessionLength: sessionLength - 1,
                sessionTime: this.getFormattedTime(timeInSeconds - 60),
                timeInSeconds: timeInSeconds - 60
            });
        }

    }

    timerCountDown() {
        const { timeInSeconds, isBreak, breakLength, sessionLength, audio } = this.state;

        console.log('countdown', timeInSeconds)

        this.setState({
            sessionTime: this.getFormattedTime(timeInSeconds - 1),
            timeInSeconds: timeInSeconds - 1
        });

        if (timeInSeconds < 1 && !isBreak) {
            this.setState({
                isBreak: true,
                sessionLabel: 'Break',
                timeInSeconds: breakLength * 60,
                sessionTime: this.getFormattedTime(breakLength * 60),
            });

            audio.play();
        } else if (timeInSeconds < 1 && isBreak) {
            this.setState({
                isBreak: false,
                sessionLabel: 'Session',
                timeInSeconds: sessionLength * 60,
                sessionTime: this.getFormattedTime(sessionLength * 60),
            });

            audio.play();
        }
    }

    getFormattedTime(timeInSeconds) {
        let formattedLeftMinutes = Math.floor(timeInSeconds / 60) < 10 ? '0' + Math.floor(timeInSeconds / 60) : Math.floor(timeInSeconds / 60);
        let formattedLeftSeconds = timeInSeconds % 60 < 10 ? '0' + timeInSeconds % 60 : timeInSeconds % 60;
        return `${formattedLeftMinutes}:${formattedLeftSeconds}`;
    }

    onPlay() {
        const { intervalId } = this.state;

        if (intervalId) {
            clearInterval(intervalId);
            this.setState({ intervalId: 0 });
            return;
        }
      
        const newIntervalId = setInterval(() => this.timerCountDown(), 1000);
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
