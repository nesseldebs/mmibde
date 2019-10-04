import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native'
import {Card,Paragraph, Avatar,Title,Caption} from "react-native-paper"


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
    //  topicResolu:this.data.topicResolu,
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
    //  topicResolu: false,
      exposition : true,
    });
  }


  render () {

    console.log("Rendering Card Topics with item : "+ this.props.item);

    if (this.state.exposition == false) {// on genère un cardTopic touchable;

      return (

        <Card style={topicStyle.mainContainerVue} onPress = { () => this.navigateToAnwser (this.state.idToLoad) }>
          <Card.Title title ={this.state.topicTitle} titleStyle={topicStyle.title} />
          <Paragraph style={topicStyle.question}>{this.state.topicQuestion}</Paragraph>
          <Card.Content style={{marginLeft:3}}>
            <Caption style={{ marginTop:5}}>{this.state.name}</Caption>
            <Caption style={{ marginTop:-8}}>{this.state.topicMembre}</Caption>
            <Caption style={{ marginTop:-8}}>{this.state.topicDate}</Caption>
          </Card.Content>
          <Paragraph style={{textAlign:'right',marginTop:-25}}>Nombre de réponses: {this.state.nombreReponse}</Paragraph>

        </Card>

    )}

    else {//on genère un cardTopic qui n'est pas touchable

      return (
        <Card style={topicStyle.mainContainerVue}>
          <Card.Title title ={this.state.topicTitle} titleStyle={topicStyle.title} />
          <Paragraph style={topicStyle.question}>{this.state.topicQuestion}</Paragraph>
          <Card.Content style={{marginLeft:3}}>
            <Caption style={{ marginTop:5}}>{this.state.name}</Caption>
            <Caption style={{ marginTop:-8}}>{this.state.topicMembre}</Caption>
            <Caption style={{ marginTop:-8}}>{this.state.topicDate}</Caption>
          </Card.Content>
          <Paragraph style={{textAlign:'right',marginTop:-25}}>Nombre de réponses: {this.state.nombreReponse}</Paragraph>
        </Card>

      );
    }
   }
}

const topicStyle= StyleSheet.create  ( {

  mainContainerVue:{
    margin: 8,
    elevation:3,
  },
  title:{
    fontWeight: "bold",
    color: "#8f0114",
    fontSize: 23,
    flexWrap : 'wrap',
    justifyContent:'flex-start'
  },
  question:{
    fontWeight: "bold",
    fontSize: 18,
    marginLeft:15,
    marginTop:-8
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
