import React from 'react';
import { StyleSheet, Text, View , WebView} from 'react-native';
import { Card,Paragraph, Title} from "react-native-paper"

class CardTopicsS extends React.Component {

  componentDidMount () {

    const item = this.props.item;

    this.setState ({
      topiDate : item.topicDate,
      topicTitle : item.topicTitle,
      topicQuestion : item.topicQuestion,
    });
  }

  constructor (props) {
    super (props)

    this.state = {

      topicTitle:'Rattrapages',
      topicQuestion:'Quelles sont les dates des rattrapages ?',
      topicDate:'29/10/1999',
    }
  }


  render () {

    return (

      <Card style={styleTopicsS.card}>
      <Card.Title title={this.state.topicTitle} titleStyle = {styleTopicsS.titleTextStyle} />
      <Paragraph style={styleTopicsS.contentView} numberOfLines = {5} >{this.state.topicQuestion}</Paragraph>
      <Card.Content style = {styleTopicsS.dateView}>
        <Paragraph style = {styleTopicsS.dateTextStyle}>{this.state.topicDate}</Paragraph>
      </Card.Content>
      </Card>



    );
  }
}

const styleTopicsS = StyleSheet.create ({

  card:{
    height : 230,
    width : 170,
    marginBottom : 10,
    marginRight : 10,
    elevation:5,
  //  backgroundColor:'#F2F7C5aa'
  },
  titleTextStyle : {
    fontSize : 23,
    color : '#8f0114',
    fontWeight : 'bold'
  },
  contentView : {
    flex : 5,
    fontSize : 18,
    alignItems : 'center',
    paddingLeft : 12,
    paddingRight : 12,
  },
  dateView : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'flex-end',
    alignItems : 'center',
    paddingRight : 12
  },
  dateTextStyle :{
    fontSize : 15,
  }
});

export default CardTopicsS;
