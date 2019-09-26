import React from 'react'
import { StyleSheet , View , Text , TextInput }  from 'react-native'


export default class TextinputLogin extends React.Component {

  constructor (props) {
    super (props)

    this.state = {
      textToShow : null,
      hiddenText : null,
      callBackFunction : null,
    }
  }

  componentDidMount () {

    // Fonction qui va re rendre le composent
    this.setState ({
      textToShow : this.props.text,
      hiddenText : this.props.hiddenText,
      callBackFunction : this.props.callBackFunction,
    });
  }

  render () {

    return(
      <View style = { styleTile.container }>
          <View >
            <Text style = { styleTile.textStyle }>{ this.state.textToShow }</Text>
          </View>

          <View style = { { borderWidth : 1,padding : 5 , marginBottom : 5 } }>
            <TextInput
              placeholder = { this.state.hiddenText }
              onchangeText = { (text) => this.state.callBackFunction (text) }
              style = { { fontSize : 20  } }
            />
          </View>
      </View>
    )
  }
}

const styleTile = StyleSheet.create ({

  container : {
    flexDirection : 'column',
    width : '100%'
  },
  textInputVue : {
    flexDirection : 'column',
  },
  textStyle : {
    fontSize : 30,
    fontWeight : 'bold',
    color : 'black'
  },
  textInputFont : {
    fontSize : 20,
  }
});
