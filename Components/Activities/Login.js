import React from 'react'
import { View , StyleSheet , Text,  TouchableOpacity,  Image,ImageBackground} from 'react-native'
import {TextInput } from 'react-native-paper'

import firebase from '../../Data/FireBase.js'

export default class Login extends React.Component {

  verifyInUserManager = (email , password) => {

    console.log("on à appuyer");

    // Firebase va vérifier que l'email et le mot de passe coinside avec ce qu'il y a ecrit
    firebase.auth().signInWithEmailAndPassword(email, password).then( () => {

      this.setState ({
        isSearching : true,
      })

      // Quadn tout va bien

      console.log('Tout vas bien');

      this.nextNav ();// On va à l'autre activité.
    }).catch ( (error) => {
      // Quand il y a une erreur
      console.log(error);
      this.setState ({
        isSearching : false,
      })
      console.log('Tout vas pas bien');
    })
  }

  nextNav = () => {// On bind les datas

    this.props.navigation.navigate("BottomNavigation");
  }

  constructor (props) {
    super (props)

    this.state = {

      email : "",
      mdp : "",
      isSearching : false
    }
  }

  render () {

    return(
      <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%'}}>

      <View style = { loginStyle.container }>

        <View style = { { justifyContent : 'center' , alignItems : 'center' , marginBottom : 20 } }>
          <Image
            source = { require ('../../assets/logo_mibde.png') }
            style = { { width : 250 , height : 250 } }
          />
        </View>

        <View style = { loginStyle.dataVue }>

            <View style = { loginStyle.inputTextWithText }>
              <TextInput
                label='Pseudo'
                mode="flat"
                placeholder = "Ecrire votre email..."
                value = { this.state.mail }
                onChangeText = { (text) =>  this.setState ({
                  email : text,
                })}
              />
            </View>

            <View style = { loginStyle.inputTextWithText }>
              <TextInput
                label='Mot de passe'
                mode="flat"
                onChangeText = { (text) =>  this.setState ({
                  mdp : text,
                }) }
                placeholder = "Ecrire votre mdp ..."
                value = { this.state.mdp }
                secureTextEntry={true}
                autoCapitalize =  "none"
              />
            </View>

            <TouchableOpacity style = { loginStyle.logInStyle } onPress = {() => { this.verifyInUserManager(this.state.email , this.state.mdp)}}>
              <Text style = { loginStyle.inBoutonStyle }>Log in</Text>
            </TouchableOpacity>

        </View>
      </View>
      </ImageBackground>
    );
  }
}

const loginStyle = StyleSheet.create({

  container : {
    flex : 1,
    justifyContent : "center",
  },
  inputTextWithText : {

    flexDirection : 'column',
    marginBottom : 10,
  },
  logInStyle : {
    backgroundColor : '#c63631',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop:10,
    borderRadius:20
  },
  dataVue : {
    paddingLeft : 20,
    paddingRight : 20,
  },
  inBoutonStyle : {

    color : 'white',
    fontSize : 22,
    fontWeight : 'bold',
  },
  labelStyle : {
    fontSize : 23,
    fontWeight : 'bold'
  }
});
