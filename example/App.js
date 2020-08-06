import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Library from 'react-native-library';

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--',
  };

  render() {
    return (
      <View style={styles.container}>
        <Library />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
