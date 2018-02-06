import React from 'react';
import TimerMixin from 'react-timer-mixin';
import Button from 'react-native-button';
import { StyleSheet, View, Text } from 'react-native';

let timeLeft;
let startTime;
let minutes;
let seconds;
let timeRemaining;

let timerDuration = 25 * 60;

let initialTime = '25:00';

export default class Timer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: initialTime,
            isStarted: false
        }
    }

    handleClick() {
        if (this.state.isStarted){
            this.activateClock();
        } else {
            this.deactivateClock();
        }
    }

    activateClock() {
        startTime = Date.now();
        this.timer();
        timerInterval = this.setInterval(this.timer, 1000);
        this.setState({
            isStarted: true
        });
    }

    deactivateClock() {
        this.clearInterval(timerInterval);
        this.setState({
            timeRemaining: initialTime,
            isStarted: false
        });
    }

    timer() {
        timeLeft = timerDuration - (((Date.now() - startTime)/1000) | 0 );

        minutes = (timeLeft / 60) | 0;
        seconds = (timeLeft % 60) | 0;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        if ( timeLeft > -1 ) {
            this.setState({
                timeRemaining: minutes + ':' + seconds
            });
        } else {
            this.stopCountdown();
        }
    }

    render() {
        return (
            <Button onPress={this.handleClick}>
                { this.state.isStarted? 'PARAR' : 'INICIO' }
                <Text style={styles.timer}>{this.state.timeRemaining}</Text>
                { this.props.children }
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryText: {
      fontSize: 19,
      fontWeight: 'bold',
    }
});