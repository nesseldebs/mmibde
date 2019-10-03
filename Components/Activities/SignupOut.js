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

       import {TextInput} from 'react-native-paper'

// TODO: continuer la fonction changeText qui modifie les state en fonction d'un entier
export default class SignUp extends React.Component {



  passToNext = () => {

      this.props.navigation.navigate("Adresse")
  }

  //FonctionAppeller à chaque changement de text --->

  constructor (props) {
    super (props )

    this.nom = null;
    this.prenom = null;
  }

  render () {

    return  (
      <ImageBackground source={require('../../assets/fondecran.png')} style={{width: '100%', height: '100%'}}>

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
              callBackFunction = { (text) => { console.log('coucou'); } }
              mode="outlined"
              selectionColor="white"
              theme={{ colors: { placeholder: 'white', text: 'white', primary: 'purple'}}}
          />
          <TextInput
              label = 'Prénom'
              mode="outlined"
              selectionColor="white"
              theme={{ colors: { placeholder: 'white', text: 'white', primary: 'purple'}}}
          />

            <TouchableOpacity style = { signStyle.boutonStyle } onPress = { () => this.passToNext () }>
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
