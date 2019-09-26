import React from 'react'
import { View , StyleSheet , Text,  TouchableOpacity,  Image,ImageBackground} from 'react-native'
import {TextInput } from 'react-native-paper'


export default class Login extends React.Component {

  nextNav = () => {// On bind les datas

    this.props.navigation.navigate("BottomNavigation");
  }

  componentDidMount () {

  }

  constructor (props) {
    super (props)

    this.state = {

    }
  }

  render () {

    return(
      <ImageBackground source={require('../../assets/fondecran.png')} style={{width: '100%', height: '100%'}}>

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
                mode="outlined"
                underlineColorAndroid='transparent'
                selectionColor="white"
                placeholderTextColor="#ffffffDD"
                theme={{ colors: { placeholder: 'white', text: 'white', primary: 'blue'}}}

              />
            </View>

            <View style = { loginStyle.inputTextWithText }>
              <TextInput
                label='Mot de passe'
                mode="outlined"
              />
            </View>

            <TouchableOpacity style = { loginStyle.logInStyle } onPress = {() => { this.nextNav()}}>
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
  },
  inputTextWithText : {

    flexDirection : 'column',
  },
  logInStyle : {
    backgroundColor : '#8b2938',
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
