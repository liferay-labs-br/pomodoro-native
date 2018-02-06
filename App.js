import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Tomato from './components/Tomato';
import Timer from './components/Timer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.primaryText}>Pomodoro App</Text>
        <Timer>
          <Tomato />
        </Timer>
      </View>
    );
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
