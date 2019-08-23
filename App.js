import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/search'

export default class App extends React.Component {


  render(){
    return (
      <View style={styles.container}>
        <Search/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
});
