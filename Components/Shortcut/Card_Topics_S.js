import React from 'react';
import { StyleSheet, Text, View , WebView} from 'react-native';

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
      <View style = {styleTopicsS.mainContainer}>
        <View style = {styleTopicsS.titleView}>
          <Text  style = {styleTopicsS.titleTextStyle} > { this.state.topicTitle } </Text>
        </View>
        <View style = {styleTopicsS.contentView} >
          <Text style = {styleTopicsS.contentTextStyle} numberOfLines = {4} > { this.state.topicQuestion } </Text>
        </View>
        <View style = {styleTopicsS.dateView}>
          <Text >{ this.state.topicDate }</Text>
        </View>
      </View>
    );
  }
}

const styleTopicsS = StyleSheet.create ({

  mainContainer : {

    height : 230,
    width : 170,
    flexDirection : 'column',
    opacity : 15,
    borderRadius : 3,
    elevation:3,
    marginRight : 7
  },
  titleView :  {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    paddingTop : 10,
    paddingLeft : 7,
  },
  titleTextStyle : {
    fontSize : 23,
    color : '#8f0114',
    fontWeight : 'bold'
  },
  contentView : {
    flex : 5,
    justifyContent : 'center',
    alignItems : 'center',
    textAlign : 'center',
    paddingLeft : 12,
    paddingRight : 12,
  },
  contentTextStyle : {
    fontSize : 18,
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
