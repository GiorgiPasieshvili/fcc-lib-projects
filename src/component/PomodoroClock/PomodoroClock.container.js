import { PureComponent } from 'react';
import PomodoroClock from './PomodoroClock.component';

/** @namespace Component/PomodoroClock/Container */
export class PomodoroClockContainer extends PureComponent {

    state = {
        breakLength: 5,
        sessionLength: 25,
        sessionTime: '25:00',
        isCounting: false,
        isBreak: false,
        timeInSeconds: 1500
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
        const { breakLength, sessionLength, sessionTime } = this.state;

        return {
            breakLength, sessionLength, sessionTime
        };
    }

    onBreakIncrement() {
        const { breakLength } = this.state;

        this.setState({ breakLength: breakLength + 1 });
    }

    onBreakDecrement() {
        const { breakLength } = this.state;

        this.setState({ breakLength: breakLength - 1 });
    }

    onSessionIncrement() {
        const { sessionLength } = this.state;

        this.setState({
            sessionLength: sessionLength + 1,
            sessionTime: sessionLength + 1 < 10 ? `0${sessionLength + 1}:00` : `${sessionLength + 1}:00`
        });
    }

    onSessionDecrement() {
        const { sessionLength } = this.state;

        this.setState({
            sessionLength: sessionLength - 1,
            sessionTime: sessionLength - 1 < 10 ? `0${sessionLength - 1}:00` : `${sessionLength - 1}:00`
        });
    }

    timerCountDown() {
        const { timeInSeconds } = this.state;

        let formattedLeftMinutes = Math.floor(timeInSeconds / 60) < 10 ? '0' + Math.floor(timeInSeconds / 60) : Math.floor(timeInSeconds / 60);
        let formattedLeftSeconds = timeInSeconds % 60 < 10 ? '0' + timeInSeconds % 60 : timeInSeconds % 60;

        this.setState({
            sessionTime: `${formattedLeftMinutes}:${formattedLeftSeconds}`,
            timeInSeconds: timeInSeconds - 1
        });
    }

    onPlay() {
        const { isCounting } = this.state;

        if(!isCounting) {
            setInterval(this.timerCountDown(), 500);
            this.setState({ isCounting: true });
        } else {
            // 
            this.setState({ isCounting: false });
        }
    }

    onReset() {

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
