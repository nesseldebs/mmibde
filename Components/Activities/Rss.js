import React from 'react';
import { StyleSheet, Text, View , ScrollView , FlatList , ActivityIndicator , Image , Button,ImageBackground} from 'react-native';

import firebase from '../../Data/FireBase.js'
import NewsS from '../Shortcut/Card_News_s.js'
import CardS from '../Shortcut/Card_Topics_S.js'
import {Banner} from 'react-native-paper'
class Rss extends React.Component {

  afficherBoutton (boolean)  {

    if (boolean == true) {

      return (
        <View style = { { width : '85%' , marginBottom : 20 , marginTop : 20} }>
          <Button
              title = 'God Mode'
              color = '#8f0114'
              onPress = {() => {console.log('Activating God Mode ...');} }
           />
        </View>
      );
    }
  }

  isFetchingData (bool) {

    if (bool) {

      return (
        <View style = { { justifyContent : 'center', alignItems : 'center' } }>

          <ActivityIndicator
            size = 'large'
          />

        </View>
      );
    }
  }

  convertToArray (object) {//////////////////////////////////////////////////////////////////////////////////////////

    return Object.values (object);
  }
  fetchData () {
    console.log('Updating Component...');

    this.fecthTopics ();
    this.fecthNews ();
  }

  fecthTopics () {

    console.log('fetching Topics ...');

    var ref = firebase.database().ref('topics');

    ref.on ('value', (data) => {

      if (data.val () != null) {

        var dataToUse = this.convertToArray (data.val ())

        this.setState ({

          newsDataToUseTopics : dataToUse,
          isFetchingTopics : false,
        });
      }
    })
  }

  fecthNews () {

    console.log('fetching News ...');

    var ref = firebase.database().ref('news');

    ref.on('value', (data) => {

      if (data.val () != null) {

        var newData = this.convertToArray (data.val ());

        this.setState ({
          newsDataToUseNews : newData,
          isFetchingNews : false,
        });
      }
    })
  }

  componentDidMount () {

    this.fetchData ();
  }

  constructor (props) {
    super (props);

    this.state = {
      newsDataToUseTopics : null,
      newsDataToUseNews : null,
      isFetchingNews : true,
      isFetchingTopics : true,
      visible:true
    }
  }

  render  () {
    return (
    <ScrollView scrollEnabled= {true}>
    <ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%'}}>

      <View style = { { flex : 1  , paddingTop : 10,} }>
        <Banner
          visible={this.state.visible}
          actions={ [
              {
                label: 'Masquer',
                onPress: () => {this.setState({ visible: false })},

              }
            ]  }

        >NE PAS OUBLIER : GROSSE PUTIN Soirée d'intégration le 19 septembre </Banner>
        <View style = {rssStyle.titreView}>
          <Text style = {rssStyle.titreStyle}>News</Text>
        </View>
        <View style = {rssStyle.flatView}>

          { this.isFetchingData (this.state.isFetchingNews) }

          <FlatList
            horizontal = {true}
            data = { this.state.newsDataToUseNews  }
            keyExtractor = {(item) => item.idNews.toString ()}
            renderItem = {({item}) => <NewsS item = {item} />}
          />
        </View>
        <View style = {rssStyle.titreView}>
          <Text style = {rssStyle.titreStyle}>Topics</Text>
        </View>
        <View style = { { marginBottom : 10 } }>

          { this.isFetchingData (this.state.isFetchingTopics) }

          <FlatList
            horizontal = {true}
            data = { this.state.newsDataToUseTopics }
            keyExtractor = {(item) => item.id.toString ()}
            renderItem = {({item}) => <CardS item = {item} />}
          />
        </View>
          <View style = {rssStyle.titreView}>
            <Text style = {rssStyle.titreStyle}>Voir le plan de la Fac </Text>
          </View>
        <View style = { { justifyContent : 'center' , alignItems : 'center'} }>
          <Image
            style = { { resizeMode : 'stretch' , width: "75%", height : 400}  }
            source = { require ('../../assets/plan.jpg') }
          />
        </View>
      </View>
      </ImageBackground>
    </ScrollView>

    );
  }
}

const rssStyle = StyleSheet.create ({
  mainContainer : {
    flex : 1,
    flexDirection : 'column',
    paddingTop : 20,
    paddingLeft:10,
    paddingRight : 10,
    marginLeft : 10,
    marginRight : 10,
    elevation : 3
  },
  titreView : {

    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 10,
  },
  titreStyle : {
    fontSize : 30,
  },
  flatView : {
    flexDirection : 'column',
    marginBottom : 20,
  }
});

export default Rss
