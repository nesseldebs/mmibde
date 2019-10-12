import React from 'react';
import { Text, View , StatusBar , StyleSheet , Alert,SafeAreaView} from 'react-native';

import Nav from './Components/Navigation/Navigation.js'

export default class App extends React.Component {


  render () {

    return (
      <SafeAreaView style = { appStyle.textMilieu }>
        <StatusBar hidden />
        <Nav />
      </SafeAreaView>
    );
  }
}
const appStyle = StyleSheet.create ({
  textMilieu :{
    flex : 1,
  },
});
