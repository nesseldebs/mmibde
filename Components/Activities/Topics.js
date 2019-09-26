import React from 'react';
import { StyleSheet, Text, View , FlatList , Dimensions , TouchableOpacity  , ActivityIndicator , TextInput} from 'react-native';

import {IconButton, FAB} from 'react-native-paper'

import CardTopic from "../Card_Topic.js"
import firebase from '../../Data/FireBase.js'
import TopicInfo from './Topics_Infos.js'

import SendComment from './send_Comments.js'
import SendCard from "./Send_Topic.js"

export default class Topics extends React.Component {


  idToLoad = (id) => {

    this.props.navigation.navigate ('TopicInfo', { idTopic : id , dataToPass : this.state.topicData })
  }

  convertToArray (object) {//////////////////////////////////////////////////////////////////////////////////////////

    return Object.values (object);
  }
  fetchData () {////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log('fetching Topics ...');

    var ref = firebase.database().ref('topics');
    ref.on ('value', (data) => {

      if (data.val () != null) {

        var dataToUse = this.convertToArray (data.val ());

        this.setState ({
          isFetching : false,
          topicData : dataToUse
        });
      }
    })
  }

  componentDidMount () {//////////////////////////////////////////////////////////////////////////////////////////

    console.log('component mounting.......');
    this.fetchData ();

  }
  constructor (props) {////////////CommentAnswer//////////////////////////////////////////////////////////////////////////////
    super (props)

    this.state = {
      isFetching : true,
      topicData : null
    }
  }

   render () {//////////////////////////////////////////////////////////////////////////////////////////////////

     console.log('rendering item topics ... ');

      if (this.state.isFetching) {
        return (
          <View style = {{flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
            <ActivityIndicator size = 'large'/>
          </View>
        );
      }else {

      return (
        <View style = {topicsStyle.container} >

          <View style = { { borderWidth : 1 , borderColor : '#8f0114' , marginLeft : 10 , marginRight : 10 , marginBottom : 10 , marginTop : 15 } }>
            <TextInput
              style =  { { paddingLeft : 7 , fontSize : 20} }
              placeholder = "Recherche"
            />
          </View>

          <FlatList
            data = {this.state.topicData}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {({item}) => <CardTopic item = {item} navigateToAnwser = { this.idToLoad } exposition = {false} />}
          />
        <FAB
            onPress = {() => {this.props.navigation.navigate ("SendCard" , { id : 1 , sentence : 'coucou'})}}
            icon="add"
            style={topicsStyle.icon}
        />
      </View>
      );
    }
  }
}



const topicsStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  Vue:{
    marginTop:25,
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent:"center",
    position : 'absolute',
    bottom : 10 ,
    right :10,
    width: 50,
    height: 50,
    borderRadius: 100/2,
    backgroundColor: 'orange',
  }
});
