import React from 'react'
import {
         View ,
         Text ,
         StyleSheet ,
         Image  ,
         TouchableOpacity,
         ScrollView

       } from 'react-native'

import {TextInput} from 'react-native-paper'
//<div>Icons made by <a href="https://www.flaticon.com/authors/picol" title="Picol">Picol</a> from <a href="https://www.flaticon.com/"
//<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

export default class Adresse extends React.Component {


  connect = () => {

    this.props.navigation.navigate("BottomNavigation")
  }

  constructor (props) {
    super (props)

    this.state = {

      nom : null,
      prenom : null,
      adresse : null,
      motDePasse : null,
      confirmation : null,
    }
  }

  render () {
    return (
      <ScrollView contentContainerStyle = { signStyle.mainContainer }>

            <View >
              <TextInput label='Adresse mail' mode="outlined"
                />
                <TextInput label='Mot de passe' mode="outlined"
                  />
                  <TextInput label='Confirmation'
                              mode="outlined"
                              value = { this.state.confirmation }

                              onChangeText = { (text) => { this.setState ({
                                confirmation  : text,
                              }
                            )}}
                    />

                <TouchableOpacity style = { signStyle.boutonStyle } onPress = { () => this.connect() }>
                  <Text style = { signStyle.boutonTextStyle }>Next</Text>
                </TouchableOpacity>
            </View>
      </ScrollView>
    );
  }
}

const signStyle = StyleSheet.create ({
  mainContainer : {
  flex:1  ,
  padding:10,

  },
  boutonStyle : {
    backgroundColor : '#8b2938',
    height : 50,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop:10,
    borderRadius:20
  },
  boutonTextStyle : {
    fontSize : 22,
    fontWeight : 'bold',
    color : 'white',

  }
});
