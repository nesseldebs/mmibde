import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native'
import {IconButton} from "react-native-paper"

class CardTopic extends React.Component {


  /*
    A partir du state faire un template qui mettra toutes les informations nécessaire visible à l'utilisateur.
    pour le topicResolu, le boolean sera représenter par une icone différentes celon le s'il est true ou false.
    -> le componentDidMount se fera pour setState le state initiale, on le fera quand le template sera finis.
  */

  componentDidMount(){
// On recupere les données qui seront inscrit dans la card

    if (this.data == null) {

    }else {

    this.setState({

      idToLoad : this.data.id,
      name:this.data.name,
      topicTitle:this.data.topicTitle,
      topicQuestion:this.data.topicQuestion,
      nombreReponse:this.data.nombreReponse,
      topicMembre:this.data.topicMembre,
      topicDate:this.data.topicDate,
      topicResolu:this.data.topicResolu,
      exposition : this.props.exposition
  })
}
}

  constructor (props) {
    super (props)

    this.navigateToAnwser = this.props.navigateToAnwser;// On récupère la fonction qui permet de passer au détail

    this.data = this.props.item;

    this.state = ({

      idToLoad :null,
      name:'Nesrine Skhiri',
      topicTitle:'Rattrapages',
      topicQuestion:'Quelles sont les dates des rattrapages ?',
      nombreReponse:0,
      topicMembre:'Trésorière',
      topicDate:'29/10/1999',
      topicResolu: false,
      exposition : true,
    });
  }


  render () {

    console.log("Rendering Card Topics with item : "+ this.props.item);

    if (this.state.exposition == false) {// on genère un cardTopic touchable;

      return (

        <TouchableOpacity style={topicStyle.mainContainerVue} onPress = { () => this.navigateToAnwser (this.state.idToLoad) }>
          <View style={topicStyle.content}>
            <Text style={topicStyle.title}>{this.state.topicTitle}</Text>
            <Text style={topicStyle.info}>{this.state.name}</Text>
            <IconButton  style ={topicStyle.icon} icon="camera" />
          </View>

          <View style={topicStyle.contentInfo}>
            <Text style={topicStyle.question}>{this.state.topicQuestion}</Text>
            <Text style={topicStyle.info}>{this.state.topicMembre}</Text>
            <Text style={topicStyle.info}>le {this.state.topicDate} </Text>
            <Text style= {topicStyle.reponse}>Nombre de réponses: {this.state.nombreReponse}</Text>
          </View>
        </TouchableOpacity>
      );
    }else {//on genère un cardTopic qui n'est pas touchable

      return (
        <View style={topicStyle.mainContainerVue} >
          <View style={topicStyle.content}>
            <Text style={topicStyle.title}>{this.state.topicTitle}</Text>
            <Text style={topicStyle.info}>{this.state.topicMembre}</Text>
            <IconButton  style ={topicStyle.icon} name="camera" />
          </View>

          <View style={topicStyle.contentInfo}>
            <Text style={topicStyle.question}>{this.state.topicQuestion}</Text>
            <Text style={topicStyle.info}>{this.state.name}</Text>
            <Text style={topicStyle.info}>le {this.state.topicDate} </Text>
            <Text style= {topicStyle.reponse}>Nombre de réponses: {this.state.nombreReponse}</Text>
          </View>
        </View>
      );
    }
   }
}

const topicStyle= StyleSheet.create  ( {

  mainContainerVue:{
    margin: 5,
    borderRadius:5,
    width:Dimensions.get('window').width-20,
    elevation:3,
    backgroundColor:'black'
  },
  content:{
    padding: 6,
    backgroundColor: "#fff",
    borderColor: "#8f0114",
    flex : 1,
  },
  icon:{
    color:'lightgrey',
    alignSelf:'flex-end',
    marginTop:-22
  },
  title:{
    fontWeight: "bold",
    color: "#8f0114",
    fontSize: 20,
    flexWrap : 'wrap',
    justifyContent:'flex-start'
  },
  question:{
    lineHeight: 15,
    fontWeight: "bold",
    fontSize: 16,
    flexWrap : 'wrap',
    marginBottom:5
  },
  contentInfo:{
    padding: 6,
    backgroundColor: "white",
  },
  info:{
    color: "#888",
  },
  reponse:{
    textAlign:'right',
     marginTop:-17
  }
}
);

export default CardTopic;
