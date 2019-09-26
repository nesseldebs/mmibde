import React from 'react'
import { View , ScrollView , StyleSheet , Image , Text , TouchableOpacity, Dimensions} from 'react-native'
import {IconButton} from "react-native-paper"

export default class NewsInfo extends React.Component {

  componentDidMount () {

    //On recherhe, à l'aide de l'ID, la news qu'on va charger.
    var compteur = 0;
    var tableau = this.state.dataToUse;
    var size = tableau.length;

    while (compteur < size ) {

      if (tableau[compteur].idNews == this.state.idNews) {

        this.data = tableau [compteur];
        compteur = size +1;
      }

      compteur ++;
    }

    //var data = this.props.item;// On récupère la props

    if (this.data != null) {

      this.setState ({
        titrenews: this.data.titreNews,
        //avatar: this.data.avatar,
        avatarName:this.data.avatarName,
        //imagenews:this.data.imagenews,
        description:this.data.description,
        dateDeMiseEnLigne:this.data.dateDeMiseEnLigne,
        nombreLike:this.data.nombreLike,
      });
    }else {
      console.log("ERROR : Couldn\'t find data to mount the component !");
    }
  }

  constructor (props) {
    super (props);

    this.data = null;

    this.state = {

        titrenews: "Soirée d'inté le 17 septembre 20H",
        avatar: require ('../../assets/news.png'),
        avatarName:'Elie',
        imagenews:require ('../../assets/news.png'),
        dateDeMiseEnLigne:'00/00/0000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        nombreLike:'1000',
        idNews : this.props.navigation.state.params.idNews,
        dataToUse : this.props.navigation.state.params.dataToPass,
    }
  }

  render () {
    return (
      <ScrollView style = {newsInfoStyle.container}>
        <View style = {newsInfoStyle.titreVue} >
          <Text style={newsInfoStyle.title}>{this.state.titrenews}</Text>
        </View>

        <View style = {newsInfoStyle.imageVue}>
          <Image style = {newsInfoStyle.imageStyle} source = {this.state.imagenews}/>
        </View>

        <View style = {newsInfoStyle.likeVue}>
          <TouchableOpacity>
            <IconButton icon="camera" color="#551A8B" />
          </TouchableOpacity>

          <Text style={newsInfoStyle.likeVue}>{this.state.nombreLike} Likes</Text>
          <Text style={newsInfoStyle.date}>le {this.state.dateDeMiseEnLigne}</Text>
        </View>

        <View style = {newsInfoStyle.descriptionVue}>
          <Text style= {newsInfoStyle.text}>{this.state.description}</Text>
        </View>

        <View style ={ newsInfoStyle.avatarVue }>
          <Text>{this.state.avatarName}</Text>
        </View>

      </ScrollView>
    );
  }
}

const newsInfoStyle = StyleSheet.create ({

  container :{
    flex:1,
    flexDirection:'column',
    paddingTop: 5,
    width:Dimensions.get('window').width-15,

  },
  imageStyle : {
    height:'100%',
    width:'100%',
    borderRadius:12,

  },
  imageVue : {
    width : "100%",
    height: 170,
    marginBottom: 15,
    marginTop:30,
    borderRadius:12,
  },
  likeVue : {
    color: "#888",
    marginLeft: 5,
    flexDirection:'row',
    marginBottom : 10,
  },
  date : {
    marginLeft:165,
    color: "#888",
  },
  titreVue : {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    //marginBottom : 20,
    marginTop:40,

  },
  title:{
    color:'red',
    fontSize:25,
    textAlign:'center',
    fontStyle:'italic',
    fontWeight:'bold'
  },
  descriptionVue : {
    justifyContent:'center',
    alignItems:'center',
    paddingLeft : 20,
    paddingRight : 20,
    marginBottom : 20,
  },
  avatarVue : {
    justifyContent : 'flex-end',
    alignItems: 'flex-end',
    paddingRight:20,
  },
  text:{
    textAlign:'justify'
  }
});
