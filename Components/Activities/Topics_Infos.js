import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity , FlatList , Dimensions } from 'react-native'
import { createAppContainer , createStackNavigator } from 'react-navigation'

import {IconButton} from 'react-native-paper'
import firebase from '../../Data/FireBase.js'

import CardTopic from '../Card_Topic.js'
import Com from '../Commentaire.js'
import SendComment from './send_Comments.js'

export default class TopicInfo extends React.Component {

  // Meme si le composent s'appelle topics info, ca sera juste un jeu de question reponse avec le vrai topics

  /*
    --> Pour récuperer les réponses d'un topic il faut tout d'abord avoir l'id du topics
        ---> Ensuite aller chercher dans la base de données dans le sous arbre topicAnswer{idTopic}
             --->Il ne suffit plus qu'ensuite à afficher tout ca dans un flatlist en partant du principe qu'on doit faire le chemin inverse pour faire une reponse
  */

  renderWhenNull (o) {
     if ( o != null ) {
       return (
         <View>
          <CardTopic exposition = { true }
                     item = { {

                               name:this.data.name,
                               topicTitle:this.data.topicTitle,
                               topicQuestion:this.data.topicQuestion,
                               nombreReponse:this.data.nombreReponse,
                               topicMembre:this.data.topicMembre,
                               topicDate:this.data.topicDate,
                               topicResolu: this.data.topicResolu,

                             }
                           }
           />
         </View>
       );
     }else{
      <View>
       <CardTopic exposition = { true }

                   item = { {
                             name:this.state.name,
                             topicTitle:this.state.topicTitle,
                             topicQuestion:this.state.topicQuestion,
                             nombreReponse:this.state.nombreReponse,
                             topicMembre:this.state.topicMembre,
                             topicDate:this.state.topicDate,
                             topicResolu: this.state.topicResolu,
                           }
                         }
         />
        </View>
     }
  }

  convertToArray (object) {///////////////////////////////////////// /////////////////////////////////////////////////

    return Object.values (object);
  }
  fetchAnswer () {

    var ref = firebase.database().ref('answers/'+this.state.idToLoad);
    console.log(ref);

    ref.on('value' , (data) => {

      if (data.val () != null) {

        var dataToUse = this.convertToArray (data.val ());

        this.setState ({
          answerToLoad : dataToUse,
        });
      }
    })
  }

  componentDidMount (){
    //On remonte le composent

    var compteur = 0;// On initialise me compteur à 0
    var size = this.tableau.length;

    while (compteur < size) {

      if (this.tableau [compteur].id == this.state.idToLoad) {

        this.data = this.tableau[compteur]
        compteur = size +1;
      }

      compteur ++;
    }

    if (this.data != null) {

      this.setState ({
        name:this.data.name,
        topicTitle:this.data.topicTitle,
        topicQuestion:this.data.topicQuestion,
        nombreReponse:this.data.nombreReponse,
        topicMembre:this.data.topicMembre,
        topicDate:this.data.topicDate,
        topicResolu: this.data.topicResolu,
      });

      this.fetchAnswer()

    }else {
      console.log("ERROR : NO DATA TO WORK WITH !");
    }
  }

  constructor (props) {
    super (props)

    var idPassedByNavigation = this.props.navigation.state.params.idTopic;
    this.tableau = this.props.navigation.state.params.dataToPass;
    console.log("voici l id : "+ idPassedByNavigation);
    console.log("Voici les données passée par navigation ");
    console.log (this.tableau);

    this.data = null;

    this.state = {

      idToLoad : idPassedByNavigation,
      name:'Nesrine Skhiri',
      topicTitle:'Rattrapages',
      topicQuestion:'Quelles sont les dates des rattrapages ?',
      nombreReponse:0,
      topicMembre:'Trésorière',
      topicDate:'29/10/1999',
      topicResolu: false,
      answerToLoad : null,
    }

  }
  render () {

    console.log("On est dans le rendu ...");
    console.log(this.state.answerToLoad);

    return (
      <View style = { topicsInfoStyle.mainView }>

        { this.renderWhenNull (this.data) }

        <View style  = { { justifyContent : 'center' , alignItems : 'center'} }>

            <FlatList
              data = {this.state.answerToLoad}
              keyExtractor = {(item) => item.idComment.toString()}
              renderItem = {({item}) => <Com item = { item } />}
            />

        </View>

        <TouchableOpacity style = { topicsInfoStyle.addBoutonStyle } onPress = { () => {this.props.navigation.navigate ('SendComment', { idToAnswer : this.state.idToLoad })}}>
              <IconButton icon="camera"  style={topicsInfoStyle.icon}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const topicsInfoStyle = StyleSheet.create ({
  mainView : {

    flex : 1,
    flexDirection : 'column'
  },
  addBoutonStyle : {
    position : 'absolute',
    bottom : 10 ,
    right :10,
    width: 50,
    height: 50,
    borderRadius: 100/2,
    backgroundColor: 'orange',
  },
  icon:{
    color:"white",
    elevation:2,
    fontSize:50,
    alignItems:"center",
    justifyContent:"center"
  },
});
