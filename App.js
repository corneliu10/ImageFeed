import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Constants } from 'expo';

import Feed from './screens/Feed';

const items = [
  { id: 0, author: 'Bob Norris' },
  { id: 1, author: 'Chuck Norris'}
]

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Feed style={styles.feed} />
      </View >
    );
  }
}

const platformVersion = 
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0,
  }
});
