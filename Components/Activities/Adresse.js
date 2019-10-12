import React from 'react'
import {
         View ,
         Text ,
         StyleSheet ,
         Image  ,
         TouchableOpacity,
         ScrollView,
         ImageBackground

       } from 'react-native'

import { TextInput } from 'react-native-paper'

import firebase from '../../Data/FireBase.js'

//<div>Icons made by <a href="https://www.flaticon.com/authors/picol" title="Picol">Picol</a> from <a href="https://www.flaticon.com/"
//<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

export default class Adresse extends React.Component {


  sendToDatabase = () => {

    var ref = firebase.database().ref('user');

    let data = {
      nom :this.state.nom,
      prenom:this.state.prenom,
      email:this.state.adresse,
      mdp:this.state.mdp,
    }

    ref.push(data);

    this.props.navigation.navigate("BottomNavigation")
  }

  sentToUserManager = (email,password) => {

   firebase.auth().createUserWithEmailAndPassword(email, password) // On envoie les informations vers le gestionnaires des utilisateurs
   console.log('Sending data to manager ....');
   this.sendToDatabase();
  }

  verificationMotDepasse () {
   // Vérifie que les deux mots de passes sont identiques
   if (this.state.mdp === this.state.confirmation) {
       console.log('returning true ...');
     return true;
   }

   console.log('returning false ...');
   return false;
 }

  connect = () => {

    // On vérifie que les mots de passe coincide
    let conf = this.verificationMotDepasse();

    if (conf === true ) {
      // S'ils coincident On envoie les données vers la base de données
      // On envoie mtn dans le manager
      this.sentToUserManager(this.state.adresse.toString() , this.state.mdp.toString ());
    }else{
      // Afficher un lessage d'erreur
    }
  }

  componentDidMount () {

    // On recupère le nom et le prénom de la navigation
    this.setState({
      nom : this.props.navigation.state.params.nom,
      prenom : this.props.navigation.state.params.prenom,
    })

  }

  constructor (props) {
    super (props)

    this.state = {

      nom : "" ,
      prenom : "" ,
      adresse : "" ,
      mdp :"" ,
      confirmation : "" ,
    }
  }

  render () {
    return (
      <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%'}}>

      <ScrollView contentContainerStyle = { signStyle.mainContainer }>

            <View >
              <TextInput label='Adresse mail'
                         mode="flat"
                         placeholder = "Ecrire l'adresse email ..."
                         value = { this.state.adresse }
                         onChangeText = { (text) => { this.setState ({
                           adresse : text
                         })} }
                         theme={{ colors: { placeholder: 'grey', text: 'black', primary: '#8f0114'}}}
                         style={{marginBottom:10}}


                />
                <TextInput label='Mot de passe'
                           mode="flat"
                           secureTextEntry={true}
                           placeholder = "Rentrer votre mot de passe ..."
                           value = { this.state.mdp }
                           onChangeText = { (text) => { this.setState ({
                             mdp : text,
                           })}}
                           theme={{ colors: { placeholder: 'grey', text: 'black', primary: '#8f0114'}}}
                           style={{marginBottom:10}}

                  />
                  <TextInput label='Confirmation'
                              mode="flat"
                              secureTextEntry={true}
                              placeholder = "Confirmation du mot de passe ..."
                              value = { this.state.confirmation }
                              onChangeText = { (text) => { this.setState ({
                                confirmation  : text,
                              }
                            )}}
                            theme={{ colors: { placeholder: 'grey', text: 'black', primary: '#8f0114'}}}
                            style={{marginBottom:10}}
                    />

                <TouchableOpacity style = { signStyle.boutonStyle } onPress = { () => this.connect() }>
                  <Text style = { signStyle.boutonTextStyle }>Next</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

const signStyle = StyleSheet.create ({
  mainContainer : {
  flex:1  ,
  padding:10,
  justifyContent : 'center'
  },
  boutonStyle : {
    backgroundColor : '#8b2938',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop:10,
    borderRadius:7
  },
  boutonTextStyle : {
    fontSize : 22,
    fontWeight : 'bold',
    color : 'white',

  }
});
