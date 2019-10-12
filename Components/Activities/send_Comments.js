import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';

import firebase from '../../Data/FireBase.js'
import {TextInput,Button} from 'react-native-paper'

export default class SendComment extends React.Component {


  convertToArray (object) {//////////////////////////////////////////////////////////////////////////////////////////

    return Object.values (object);
  }

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

  generateNumber () {

    // Retourne un nombre entre 0 et 1 000 000 00
    return (Math.floor(Math.random() * 1000000000));
  }

  sendAnwer () {

    console.log("Sending reponse ...");

    var ref = firebase.database().ref('answers/'+this.idNumber);
    console.log(this.idNumber);
    var idComment = this.generateNumber ();// On lui donne un identifiant

    var data = {// On génère l'objet qui sera push vers la base de données.
      nom : 'Elie El Debs',
      date : this.generateDate(),
      reponse : this.textTosend,
      idComment : idComment,
    }

    // Il faut aussi qu'il y est une date avec les heures avec les heures et les minutes.
    // Il faut donc récupérer la date avant d'envoyer les données dans la base de données.

    console.log("Sending data ...");
    ref.push(data);

    this.props.navigation.goBack();
  }

  constructor (props){
    super(props)

    console.log(this.props.navigation.state.params);

    this.idNumber = this.props.navigation.state.params.idToAnswer;
    this.textTosend = null;
  }

  render () {
     return (
      // <ImageBackground source={require('../../assets/fondecran.png')} style={{width: '100%', height: '100%'}}>
      <View style = { sendCommentStyle.mainVue }>
       <View style = {sendCommentStyle.titreView}>
         <Text style = {sendCommentStyle.titreStyle}>Topic</Text>
       </View>

       <View style = {sendCommentStyle.subView}>

         <View style = {{borderBottomWidth : 1 , marginBottom : 10}}>
           <TextInput
             label ='Ecrivez votre réponse ici ...'
             style = {sendCommentStyle.textInputStyle}
             selectionColor='grey'
             onChangeText = { (text) => {this.textTosend = text}}
             theme={{ colors: { placeholder: 'grey', text: '#8f0114', primary: '#8f0114'}}}
             mode="flat"
           />
         </View>
         <View style = { { marginBottom : 20 } }>
           <Button
             onPress = {() => this.sendAnwer ()}
             color='#8f0114'
           >Envoyer</Button>
         </View>
       </View>
       </View>
    //   </ImageBackground>
     );
  }
}

const sendCommentStyle = StyleSheet.create({
  mainVue : {
    flex : 1,
    justifyContent : 'center',
    alignItems :  'center',
  },
  subView : {

    width : '85%',
  //  backgroundColor : '#e6e8e8',
    flexDirection : 'column',
    justifyContent : 'center',
    borderRadius : 3,
    paddingLeft : 20,
    paddingRight : 20,
    marginTop:15
  },
  titreView : {
    width : '50%',
    height : 35,
    //backgroundColor : '#dae8e6',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 3,
    elevation : 3,
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
