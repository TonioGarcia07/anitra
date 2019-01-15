/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {};
type State = {
  name: string,
}

export default class App extends Component<Props, State> {
  state  = { name: '' }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
          style={styles.welcome}
        />
        <Text style={styles.instructions}>{`Hello: ${this.state.name}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
