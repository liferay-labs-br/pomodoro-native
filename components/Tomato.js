import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default class Tomato extends React.Component {
  componentWillReceiveProps(){

  }

  render() {
    return (
        <SvgUri
            width="200"
            height="200"
            source={{uri:'https://image.flaticon.com/icons/svg/135/135702.svg'}}
        />
    );
  }
}
