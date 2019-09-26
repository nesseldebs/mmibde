import React from 'react';
import { Text, View , StatusBar , StyleSheet , Alert,SafeAreaView} from 'react-native';

import Nav from './Components/Navigation/Navigation.js'

export default class App extends React.Component {


  render () {

    return (
      <View style = { appStyle.textMilieu }>
        <StatusBar hidden />
        <Nav />
      </View>
    );
  }
}
const appStyle = StyleSheet.create ({
  textMilieu :{
    flex : 1,
  },
});
