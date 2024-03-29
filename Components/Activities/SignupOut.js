import React from 'react'
import {
         View ,
         Text ,
         StyleSheet ,
         Image  ,
         TouchableOpacity,
         ScrollView,

       } from 'react-native'

       import {TextInput} from 'react-native-paper'

// TODO: continuer la fonction changeText qui modifie les state en fonction d'un entier
export default class SignUp extends React.Component {


  verification = () => {// Verifie que les deux

   var prenomText = this.state.prenom.length;
   var nomText = this.state.nom.length;

   if ( nomText != 0 &&  prenomText != 0 ) {

     return true;
   }else {
     return false;
   }
 }

 passToNext = () => {

    let bool = this.verification();

    if (bool) {// Si les vérification sont faites :

      this.props.navigation.navigate("Adresse" , { nom : this.state.nom , prenom : this.state.prenom } )// il faut faire passer

    }else {//Sinon (nesrine sait quoi faire )
      // il faut mettre un warning ici
      // Message disant qu'il fau remplir tout les champs
    }
}


  //FonctionAppeller à chaque changement de text --->

  constructor (props) {
    super (props )

    this.state = {
      nom : "",
      prenom : "",
    }
  }

  render () {

    return  (
      <ScrollView contentContainerStyle = { signStyle.mainContainer }>

        <View style = { { flex : 1 , justifyContent : 'center' , alignItems : 'center' } }>
          <Image
            source = { require ('../../assets/logo_mibde.png') }
            style = { { width : 250 , height : 250 } }
          />
        </View>

        <View style = { { flex : 1} }>
          <TextInput
              label = 'Nom'
              onChangeText = { (text) => { this.setState ({
                nom : text,
              }) } }
              placeholder = "Ecrire votre nom ...."
              mode="flat"
              value = { this.state.nom }
          />
          <TextInput
              label = 'Prénom'
              onChangeText = { (text) =>  { this.setState ({
                prenom : text
              }) } }
              placeholder = "Ecrire votre prénom ..."
              mode="flat"
              value = { this.state.prenom }
          />

            <TouchableOpacity style = { signStyle.boutonStyle } onPress = { () => this.passToNext () }>
              <Text style = { signStyle.boutonTextStyle }>Next</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
  }
}

const signStyle = StyleSheet.create ({
  mainContainer : {
    flex : 1,
    padding : 10
  },
  boutonStyle : {
    backgroundColor : '#8b2938',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop:10,
    borderRadius:20,
  },
  boutonTextStyle : {
    fontSize : 22,
    fontWeight : 'bold',
    color : 'white',
  }
});
