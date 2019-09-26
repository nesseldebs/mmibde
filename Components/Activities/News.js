import React from 'react';
import { StyleSheet, Text, View , FlatList , ActivityIndicator , Image , TextInput ,TouchableOpacity } from 'react-native';

import CardNews from '../Card_News.js'
import NewsInfo from './News_Info.js'
import {IconButton} from 'react-native-paper'

import firebase from '../../Data/FireBase.js'

export default class New extends React.Component {


    godModeBouton (bool) {

      if (bool == true) {
        return (
          <TouchableOpacity style = {
            {
                position : 'absolute',
                bottom : 10 ,
                right :10,
                width: 50,
                height: 50,
                borderRadius: 100/2,
                backgroundColor: 'orange',
           }
         }
         onPress = { () => this.props.navigation.navigate ("Post") }
         >
              <IconButton icon="camera" style={ {

                color:"white",
                elevation:2,
                fontSize:50,
                alignItems:"center",
                justifyContent:"center"
               }
             }/>

          </TouchableOpacity>
        );
      }
    }

    passToDetail = (id) => {//Fonction qui sera passé par props vers la card topics

      console.log(id);
      this.props.navigation.navigate("NewsInfo" , {dataToPass : this.state.dataToUse , idNews : id});
    }

    addActivityIndicator () {//////////////////////////////////////////////////////////////////////////////////////////

      if (this.state.isLoading == true) {
        return (
          <View>
            <ActivityIndicator
              size = 'large'
              style = {newStyle.indicatorStyle}
            />
          </View>
        );
      }
    }

    convertToArray (object) {//////////////////////////////////////////////////////////////////////////////////////////

      return Object.values (object);
    }

   // Fonction qui retroune les données contenue dans la base de données
   fecthData () {/////////////////////////////////////////////////////////////////////////////////////////////////////

    var ref = firebase.database().ref('news');// On crée la référence vers les news pour récupérés l'ensembles des news

    //On déclare un écouteur qui va écouter les valeur et donc déclencher des évenements selon les résultats des valeurs

      ref.on ('value' , (snapshot) => {

        if (! snapshot.val() != null) {

          console.log(snapshot);

          var newData = this.convertToArray (snapshot.val ());// Il faut connvertir l'objet en un tableau
          console.log(newData);

          this.setState ({
            dataToUse : newData,
            isLoading : false,
          });
        }
      })
   }

   componentDidMount () {/////////////////////////////////////////////////////////////////////////////////////////////
     // on appelle la fonction qui recupere les données
     this.fecthData ();
   }


   constructor (props) {/////////////////////////////////////////////////////////////////////////////////////////////
     super (props)

     this.state = {
       dataToUse : null,
       isLoading : true,
       isGodModeEnabled : true
     }

   }

    render () {/////////////////////////////////////////////////////////////////////////////////////////////////////
      return (
        <View style = { { flex : 1 } }>

            <View style = { { borderWidth : 1 , borderColor : '#8f0114' , marginLeft : 10 , marginRight : 10 , marginBottom : 10 , marginTop : 15 } }>
              <TextInput
                style =  { { paddingLeft : 7 , fontSize : 20} }
                placeholder = "Recherche"
              />
            </View>

            <FlatList
              data = { this.state.dataToUse  }
              keyExtractor = {(item) => item.idNews.toString ()}
              renderItem = {({item}) => <CardNews item = {item} passToDetail = {this.passToDetail} />}
          />
          {this.addActivityIndicator()}
          {this.godModeBouton (true)}
        </View>
      );
    }
}

const newStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorStyle : {

    position : 'absolute',
    alignItems : 'center',
    justifyContent: 'center',
    top : 100
  }
});
