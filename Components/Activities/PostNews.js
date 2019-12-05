import React from 'react'
import { View  , Text , StyleSheet , Image ,  TouchableOpacity} from 'react-native'
import {TextInput,Button} from 'react-native-paper'


import firebase from '../../Data/FireBase.js'
//import ImagePicker from 'react-native-image-picker'

export default class PosNews extends React.Component {

  /*
    <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
    ---> il faut rajouter la fonctionnalité d'aller chercher une image dans le téléphone
  */

  sentItem = async (uri) => {

    var stor = firebase.storage().ref().child('test')

    const response = await  fetch (uri);
    const blob = await response.blob();

    console.log(blob);

    //stor.put (blob);
  }

  /*openImagePicker = async () => {// Call when camera Icon is pressed

    ImagePicker.showImagePicker ( {} , (response) => {
      if (response.didCancel) {
        console.log("Cancel");
      }else if (response.error) {
        console.log("erreur");
      }else {
        console.log("Photo choisi");
        const source = { uri: response.uri };

        this.sentItem(source);
      }
    })

  }*/

  pushData = () => {// Call when sendnews button is pressed , send data to dataBase

    var ref = firebase.database().ref ('news');//Open database on reference 'news'

    var dataToPush = {

      description : this.description,
      titreNews : this.titre,
      idNews:this.generateId (),
      dateDeMiseEnLigne : this.generateDate(),
      avatarName : 'VP Communication',
      nombreLike : 0
    };

    ref.push(dataToPush)// send data to database

    //get back to previous activitie
    this.props.navigation.goBack();
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
  generateId () {// Generate an UNIQUE id for the news

    var id = (Math.floor(Math.random() * 1000000000));;// Variable in which we're gonna put our id

    return id;
  }

  constructor (props) {
    super (props)

    //Initialise les attributs et les valeurs
    this.description = null;
    this.titre = null;
    this.photo = null;
  }

  componentDidMount () {

    //Mettre à jour les valeurs
    // On setState pour le nom par exemple et pour la valeur de la clée id
  }

  render () {
    return (

      <View style = {sendStyle.container}>

        <View style = {sendStyle.titreView}>
          <Text style = {sendStyle.titreStyle}>News</Text>
        </View>

        <View style = {sendStyle.subView}>

          <View style = {{borderBottomWidth : 1 }}>
              <TextInput
                label ='Titre News ...'
                selectionColor='grey'
                style = {sendStyle.textInputStyle}
                onChangeText = { (text) => { this.titre = text } }
                theme={{ colors: { placeholder: 'grey', text: 'black', primary: '#8f0114'}}}
                mode="flat"
                placeholderTextColor="#ffffffDD"
              />

          </View>

          <View style = {{borderBottomWidth : 1 , marginBottom : 10}}>
            <TextInput
              label ='Description ...'
              selectionColor='grey'
              style = {sendStyle.textInputStyle}
              onChangeText = { (text) => {this.description = text}}
              theme={{ colors: { placeholder: 'grey', text: 'black', primary: '#8f0114'}}}
              mode="flat"
              placeholderTextColor="#ffffffDD"
            />
          </View>

          <TouchableOpacity
                style = { { width : '100%' , alignItems : 'flex-end' } }
              //  onPress = { () => this.openImagePicker() }
              >
            <Image
              source = { require ('../../assets/camera.png') }
              style = { { height : 34 , width : 34 , marginBottom : 10} }
            />
          </TouchableOpacity>

          <View style = { { marginBottom : 20 } }>
            <Button
              color='#8f0114'
              onPress = {() => {this.sendTopic ()}}
              mode="outlined"

            >Send News</Button>
          </View>

        </View>

      </View>

    )
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
    //  backgroundColor : '#dae8e6',
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : 3,
      elevation:3,
      marginBottom : 10,
      marginBottom : 10,
    },
    titreStyle : {
      color:'#8f0114',
      fontSize : 25,
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
    },
    multilineStyle : {
      height : 100
    }
});
