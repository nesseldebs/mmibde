import React from 'react'
import { View , Text , StyleSheet, Dimensions , Image, TouchableOpacity } from 'react-native'
import {IconButton} from "react-native-paper"

class CardNews extends React.Component {

  // il faut rajouter le constructeur et la fonction componentDidMount



/*  mainContainerVue:{
      margin: 10,
      marginBottom : 10,
      shadowColor: '#8f0114',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.55,
      shadowRadius: 2,
      borderRadius: 5,
      backgroundColor:'grey',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      width:Dimensions.get('window').width-20,
      elevation:3
    },*/


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
      <TouchableOpacity onPress = {this.displayId} onPress = {() => this.passToDetail (this.state.idNews)}>
        <View style={cardStyle.mainC}>

          <View style={cardStyle.avatarVue}>
            <View style= {cardStyle.userVue}>
              <Image style={cardStyle.avatar} source={this.state.avatar}/>
            </View>

            <View style = { { flexDirection : 'column' } }>

              <View style = { { paddingLeft : 6 } }>
                  <Text style={cardStyle.titleNews}> {this.state.titrenews} </Text>
              </View>

              <View style = { { paddingLeft : 4 } }>
                <Text style={cardStyle.avatarName}> {this.state.avatarName} </Text>
              </View>

            </View>
          </View>

            <Image style={cardStyle.image} source={this.state.imagenews}/>
          <View style={cardStyle.containerVue}>

              <View style = { { flex:1 ,padding : 10 } }>
                <Text style= {cardStyle.descritpion} numberOfLines={3}>{this.state.description}</Text>
              </View>

              <TouchableOpacity style={cardStyle.iconVue}>
                <IconButton icon="camera" color="#551A8B" />
                <Text style={cardStyle.like}>{this.state.nombreLike} Likes</Text>
                <Text style={cardStyle.date}>le {this.state.dateDeMiseEnLigne}</Text>
              </TouchableOpacity>

          </View>

        </View>
      </ TouchableOpacity>
      );
    }
}

const cardStyle = StyleSheet.create ( {

    mainC :{

      borderRadius : 5,
      margin : 10,
      marginBottom : 10,
      marginLeft : 10,
      width :Dimensions.get('window').width-20,
      elevation:3,
      borderColor : 'black',
    },

  avatarVue:{
    flexDirection: "row",
    backgroundColor:'white',
    paddingLeft : 7,
    paddingTop : 7,
    marginBottom : 15,
  },
  userVue:{
    flexDirection: "row",
    alignItems : 'center',
    justifyContent : 'center',
    marginBottom:3,
    marginTop:3
  },
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
  imageVue:{
    height: 400,
    width: "100%",
    marginTop: 14,
    borderRadius: 12
  },
    image: {
      height: 210,
      width: "100%",
      resizeMode:'stretch'
    },
    containerVue :{
      padding: 6,
      backgroundColor: "#fff",
    },
    iconVue:{
      flexDirection: "row",
      alignItems: "center",
    },
    like:{
      color: "#888",
      marginLeft: 5
    },
    date:{
      marginLeft:150,
      color: "#888",
    },
    title : {
    lineHeight: 24,
    fontWeight: "bold",
    color: "#8f0114",
    fontSize: 16,
    flexWrap : 'wrap' /* retour à la ligne si titre trop long */
  },
  description :{
    color: 'gray'
  },
  avatarName : {

    fontSize: 13,
    color: "#727272",
    marginTop: 10
  }
});

export default CardNews;
