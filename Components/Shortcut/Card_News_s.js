import React from 'react';
import { StyleSheet, Text, View , WebView,Platform} from 'react-native';
import { Card,Paragraph, Title} from "react-native-paper"

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

      <Card style={styleCard.card}>
        <Card.Title title={this.state.titre} titleStyle = {styleCard.titleTextStyle} />
        <Paragraph style={styleCard.contentView} numberOfLines = {5} >{this.state.content}</Paragraph>
        <Card.Content style = {styleCard.dateView}>
          <Paragraph style = {styleCard.dateTextStyle}>{this.state.date}</Paragraph>
        </Card.Content>
      </Card>

    );
  }
}

const styleCard = StyleSheet.create({


    card:{
      height : 230,
      width : 170,
      marginBottom : 10,
      marginRight : 10,
      elevation:5,
    //  backgroundColor:'rgba(41, 194, 82, 0.3)' 
    },
  titleTextStyle : {
    fontSize : 23,
    color : '#8f0114',
    fontWeight : 'bold',
    textAlign:'center'
  },
  contentView : {
    flex : 5,
    alignItems : 'center',
    paddingLeft : 12,
    paddingRight : 12,
    fontSize:18
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
