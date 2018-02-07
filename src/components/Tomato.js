import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Button from 'react-native-button';

export default class Tomato extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressSVG(){

  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._onPressSVG}
      >
      <SvgUri
            width="200"
            height="200"
            source={{uri:'https://image.flaticon.com/icons/svg/135/135702.svg'}}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({});