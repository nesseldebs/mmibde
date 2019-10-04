import React from 'react'
import { View , Text , StyleSheet, Dimensions , Image, TouchableOpacity } from 'react-native'
import {IconButton, Card,Paragraph, Avatar,Title} from "react-native-paper"

class CardNews extends React.Component {

  // il faut rajouter le constructeur et la fonction componentDidMount


  componentDidMount () {

    // On récupère les différents les différentes props
    const passToDetail = this.props.passToDetail;
    this.passToDetail = this.props.passToDetail;

    var item = this.props.item;

    this.setState ({
      titrenews: item.titreNews,
      //avatar: this.props.avatar,
      avatarName:item.avatarName,
      //imagenews:this.props.imagenews,
      description:item.description,
      dateDeMiseEnLigne:item.dateDeMiseEnLigne,
      //nombreLike:this.props.like,
      idNews : item.idNews
    });
  }

  constructor (props){
    super (props)

    this.state = {
      titrenews: 'NEWS',
      avatar: require ('../assets/news.png'),
      avatarName:'Elie',
      imagenews:require ('../assets/test1.jpg'),
      dateDeMiseEnLigne:'00/00/0000',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      nombreLike:'27',
      idNews : 0,
    }
  }
  render () {


      return (

          <Card  style={{margin:8, elevation:3}} onPress = {this.displayId} onPress = {() => this.passToDetail (this.state.idNews)}>
            <Card.Title  title={this.state.titrenews} titleStyle={cardStyle.titleNews} subtitle={this.state.avatarName} left={(props) => <Avatar.Icon {...props} icon= {this.state.avatar} style={cardStyle.avatar}/>} />
            <Card.Cover source={this.state.imagenews}/>
            <Card.Content>
            <Card.Actions>
                <Paragraph style= {cardStyle.date}> le {this.state.dateDeMiseEnLigne}</Paragraph>
            </Card.Actions>

            <Card.Content>
                <Paragraph style= {cardStyle.description}> {this.state.description} </Paragraph>
            </Card.Content>

            </Card.Content>
          </Card>

    );
  }
}
const cardStyle = StyleSheet.create ( {

  avatar:{
    height: 40,
    width: 40,
    borderRadius: 25,
    margin: 2
  },
  titleNews:{
    fontWeight: "bold",
    fontSize: 17,
    color: '#8f0114',
    marginTop: 10
  },
  like:{
      color: "#888",
      //marginLeft: 5
    },
  date:{
      marginLeft:200,
      color: "#888",
    },

  description :{
    color: 'gray',
    //textAlign:'justify'
  }
});

export default CardNews;
