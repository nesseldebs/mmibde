import React from 'react';
import { StyleSheet, Text, View , ScrollView , Button , Alert , TextInput } from 'react-native';
import Modal from 'react-native-modal'

import  { createAppContainer , createStackNavigator } from 'react-navigation'

export default class Params extends React.Component {


  renderModal (boolean , godModeBoolean) {

    if (godModeBoolean == true ) {
      return (
        <Text>
          deja admin
        </Text>
      )
    } else {

    console.log('renderModal');

    if (boolean == true) {
       return (
         <View>
          <Modal
            isVisible = { boolean }
            hasBackdrop = { true }
            onBackdropPress = { () => { this.setState ({
              isModalVisible : false,
            })} }
            onBackButtonPress = { () => { this.setState ({
              isModalVisible : false,
            })} }
            animationOut = { 'slideOutDown' }
            style = { { paddingLeft : 10 , paddingRight : 10 } }
          >

            <View style = { {backgroundColor : 'white'} }>

            <View style = { { alignItems : 'center' , justifyContent : 'center' , marginBottom : 9 , width : '100%'} }>
              <Text style = { { fontSize : 28 } }>Rentrer le code de connexion</Text>
            </View>

            <View style = { { marginRight : 10 ,marginLeft : 10 ,marginBottom : 9 , borderColor : 'black' , borderWidth : 1} }>

              <TextInput
                style = { { paddingLeft : 10 } }
                placeholder = { 'Mot de Passe ...' }
                onChangeText = { (text) => {this.passwordText = text; } }
              />
            </View>


            <View style = { { paddingLeft : 10 , paddingRight : 10 , marginBottom : 7} }>
              <Button
                title = {"Continuer"}
                color = '#8f0114'
                onPress = { () => { this.setState ({
                  isModalVisible : false,
                }) } }
              />
            </View>

            </View>

          </Modal>
         </View>
       );
    }
  }
}

  constructor (props) {
    super(props)

    this.passwordText = null;

    this.state = {
      isModalVisible : false,
    }
  }

  render () {
    return (

    <ScrollView>

      { this.renderModal (this.state.isModalVisible , false) }

      <View style = { paramsStyle.mainView }>

      <View style = { paramsStyle.bublleView }>
        <Text style = { paramsStyle.titleStyle }>Admin</Text>
      </View>

      <View style = { paramsStyle.bubbleViewData }>
        <Text style = { paramsStyle.textStyle }> Les paramètres d'Admin ne sont disponibles que pour les VP du MIBDE.</Text>
        <Text style = { paramsStyle.textStyle }> L'Activation du "God Mode" permet d'apporter des modifications à des domaines qui ne pouvaieant pas être modifier</Text>

        <View style = { { marginTop : 10, marginBottom : 10 , width : '95%' } }>
          <Button
            title = 'God Mode'
            color = '#8f0114'
            onPress = { () => { this.setState ({
              isModalVisible : true,
            }) } }
          />
        </View>

      </View>

      </View>
    </ScrollView>
    );
  }
}

/*const paramsNav = createStackNavigator ({
  Params : {
    screen : Params
  },

});*/

const paramsStyle = StyleSheet.create ({

  mainView : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'column',
  },
  bublleView : {
    width : '75%',
    borderRadius : 12,
    backgroundColor : 'white',
    borderColor : '#8f0114',
    borderWidth:2,
    justifyContent : 'center',
    alignItems:'center',
    marginTop : 20,
    marginBottom : 20,
  },
  bubbleViewData : {
    width : '95%',
    borderRadius : 12,
    backgroundColor : 'white',
    borderColor : '#8f0114',
    borderWidth:1,
    justifyContent : 'center',
    alignItems:'center',
    marginBottom : 20,
  },
  titleStyle : {
    fontSize : 30,
  },
  textStyle : {
    fontSize : 20,
  }
});
