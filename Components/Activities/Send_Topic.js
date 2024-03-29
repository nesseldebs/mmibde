import React from 'react'
import { View ,  StyleSheet , Text , Button ,ImageBackground} from 'react-native'
import {Icon} from "react-native-elements"

import firebase from '../../Data/FireBase.js'
import {TextInput} from 'react-native-paper'
class SendTopic extends React.Component {


  generateDate () {

    var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        return (date + '/' + month + '/' + year + ' ' + hours + ':' + min);
  }

  // Il faut faire un  asyncStorgae pour recuperer les données personnelles de l'utilsateur

  constructor (props) {
    super (props)
    //Il faut faire un state ici

    console.log(this.props.navigation.state.id);

    this.titreTextVar = null;
    this.questionTextVar = null;
    this.idNumber = null
  }

  generateNumber () {

    // Retourne un nombre entre 0 et 1 000 000 00
    return (Math.floor(Math.random() * 1000000000));
  }

  sendTopic () {
    // Send the topic to the

    this.idNumber = this.generateNumber();

    console.log(this.idNumber);

    var ref = firebase.database().ref ('topics');
    var data = {
      name :'Elie El Debs',
      topicTitle : this.titreTextVar,
      topicQuestion : this.questionTextVar,
      topicMembre : 'Vp Comunication',
      topicDate : this.generateDate(),
      id : this.idNumber,
      nombreReponse : "0"
    }

    ref.push (data);

    this.props.navigation.goBack();
  }

  render () {
    return (
      //<ImageBackground source={require('../../assets/fondecran.png')} style={{width: '100%', height: '100%'}}>
      <View style = {sendStyle.container}>
        <View style = {sendStyle.titreView}>
          <Text style = {sendStyle.titreStyle}>Topic</Text>
        </View>

        <View style = {sendStyle.subView}>


        <View style = {{borderBottomWidth : 1 }}>
            <TextInput
              label ='Titre du Topic ...'
              selectionColor='white'
              style = {sendStyle.textInputStyle}
              onChangeText = { (text) => {this.titreTextVar = text}}
              theme={{ colors: { placeholder: 'white', text: 'white', primary: 'black'}}}
            />
        </View>



          <View style = {{borderBottomWidth : 1 , marginBottom : 10}}>
            <TextInput
              label ='Ecrivez la question du topic ...'
              selectionColor='red'
              style = {sendStyle.textInputStyle}
              onChangeText = { (text) => {this.questionTextVar = text}}
              theme={{ colors: { placeholder: 'red', text: 'black', primary: 'black'}}}
            />
          </View>
          <View>
          <View style = { { marginBottom : 20 } }>
            <Button
              color='white'
              title = 'Send Topics'
              onPress = {() => {this.sendTopic ()}}
            />
          </View>
        </View>
        </View>
      </View>
    //  </ImageBackground>
    );
  }
}

const sendStyle =StyleSheet.create ({

    container : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
    },
    subView : {

      width : '85%',
    //  backgroundColor : '#e6e8e8',
      flexDirection : 'column',
      justifyContent : 'center',
      borderRadius : 3,
      elevation : 3,
      paddingLeft : 20,
      paddingRight : 20,
      marginTop:15
    },
    titreView : {
      width : '50%',
      height : 35,
      //backgroundColor : '#e6e8e8',
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : 3,
      elevation:3,
      marginBottom : 10,
      marginBottom : 10,
    },
    titreStyle : {

      fontSize : 30,
      fontWeight : 'bold',
    },
    subTitleView : {

      justifyContent : "center",
      alignItems  : 'center',
    },
    textInputStyle : {
      paddingLeft : 3,
      color:'white',
      backgroundColor:'transparent'
    }
});

export default SendTopic ;
