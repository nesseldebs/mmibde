import React from 'react';
import { StyleSheet, Text, View , WebView} from 'react-native';

export default class CardNewsS extends React.Component {

  componentDidMount () {

    console.log('Updating ...');

    const item = this.props.item;//On récupère la prop item
    //On change les données en fonction de ces données la.
    this.setState ({
      titre : item.titreNews,
      date : item.dateDeMiseEnLigne,
      content : item.description
    });
  }

  constructor (props) {
    super (props);
    console.log('Constructing cardNewsS ....');

    this.state = {
      titre : 'Soirée Halloween',
      date : '12/10/2019',
      content :'La soirée se passeras dans le bar d a coté de la fac '
    }
  }

  render () {
    return (

      <View style = {styleCard.mainContainer}>
        <View style = {styleCard.titleView}>
          <Text style = {styleCard.titleTextStyle}>{this.state.titre}</Text>
        </View>
        <View style = {styleCard.contentView}>
          <Text style = {styleCard.contentTextStyle} numberOfLines = {4} >{this.state.content}</Text>
        </View>
        <View style = {styleCard.dateView}>
          <Text>{this.state.date}</Text>
        </View>
      </View>
    );
  }
}

const styleCard = StyleSheet.create({

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
