import React from 'react';
import { StyleSheet, Text, View , ScrollView , Image , TouchableOpacity } from 'react-native';

import firebase from '../../Data/FireBase.js'
import Modal from 'react-native-modal'
import{Button} from 'react-native-paper'
import DateTimePicker from "react-native-modal-datetime-picker";

class Local extends React.Component {


//https://www.flaticon.com/free-icon/closed_2038800#term=closed&page=1&position=74
//<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

  openModal (boolean) {

    return (
      <Modal
        isVisible = { boolean }
        hasBackdrop = { true }
        onBackdropPress = { () => { this.setState ({
          isModalVisible : false,
        })} }
        onBackButtonPress = { () => { this.setState ({
          isModalVisible : false,
        })} }
        animationOut = { 'slideOutDown' }
        style = { { paddingLeft : 10 , paddingRight : 10 } }
      >

      <View style = { { backgroundColor : 'white' , borderRadius:15} }>
        <View>
          <Text style = { { fontWeight : 'bold' , fontSize : 27, margin:5 } }>Voulez-vous fermer le BDE ?</Text>
        </View>

        <View style = { { flexDirection : 'row', alignSelf:'flex-end', margin:5 } }>

              <Button
                onPress = { () => { this.setState ({ isModalVisible : false}) } }
                style = { {marginBottom:5, fontSize : 20 } }
                color='grey'
              >Non</Button>

              <Button
                mode="outlined"
                color = "red"
                style = { { fontWeight : 'bold', fontSize : 25, marginBottom:5} }
                onPress = {() => { this.fermerBde () }}
              > Oui </Button>

        </View>
      </View>

      </Modal>
    )
  }

  openModal2 (boolean) {

    return (
      <Modal
        isVisible = { boolean }
        hasBackdrop = { true }
        onBackdropPress = { () => { this.setState ({
          isModalVisible2 : false,
        })} }
        onBackButtonPress = { () => { this.setState ({
          isModalVisible2 : false,
        })} }
        animationOut = { 'slideOutDown' }
        style = { { paddingLeft : 10 , paddingRight : 10 } }
      >

      <View style = { { backgroundColor : 'white' } }>
        <View>
          <Text style = { { fontWeight : 'bold' , fontSize : 27 } }>Voulez- vous fermer le BDE ?</Text>
        </View>

        <View style = { { flexDirection : 'row' } }>
          <TouchableOpacity onPress = {() => { this.fermerBde () }}>
              <Text style = { { fontSize : 23 , color : 'red' } }>Oui</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = { () => { this.setState ({
            isModalVisible : false
          }) } }>
              <Text style = { { color : 'black' , fontSize : 20 } }>non</Text>
          </TouchableOpacity>

        </View>
      </View>

      </Modal>
    );
  }

  fermerBde () {

    this.setState ({

      localStateValue : false,
    });
  }

  ouvrirBde () {

  }

  convertToArray (object) {/////////////////////////////////////////////////////////////////////////////////////////

    return Object.values (object);
  }

fetchData () {

  var ref = firebase.database().ref ('local');

  ref.on ('value', (snapshot) => {

    if (snapshot.val() != null) {

      console.log("Voila les valeurs : ----->>>");

      var newData = this.convertToArray (snapshot.val ());

      this.setState ({

        localStateValue :newData [0].localStateValue,
        heurePause :newData [0].heurePause,
        heureFermeture :newData [0].heureFermeture,
        heureOuverture : newData [0].heureOuverture,
        note : newData [0].note
      });
    }
  })

}
componentDidMount () {

  // Update the state here by searching in the database
  this.fetchData ();// After all the data was feteched, we setState directly so the whole new UI is open
}
constructor (props) {
  super (props);

  this.state = {

    localStateValue : true,
    heurePause :"12h30",
    heureFermeture : "18h30",
    heureOuverture : "10h",
    note : "Le porc c'est bien pour la santé",
    isModalVisible : false,
    isModalVisible : false,
  }
}

renderButton (bool) {
  if (bool == true) {

    console.log('rendering fermer  le bde');

    return (
      <Button
        color = "#8b2938"
        onPress = { () => this.setState ({
          isModalVisible : true,
        }) }
      >Fermer le BDE</Button>
    );
  }else{

    console.log("Rendering ouvrir le bde");
    return (
      <Button  color = "#8b2938"
      >Ouvrir le BDE</Button>
    );
  }
}

renderGodButton (bool) {

  if (! bool) {
    return null;
  }else{
    return (
       this.renderButton (this.state.localStateValue)
    );
  }
}

render () {

  if (this.state.localStateValue == true ) {

    return (
      <ScrollView contentContainerStyle = { localStyle.mainContainer }>

        { this.openModal (this.state.isModalVisible) }

          <View style = {localStyle.titreView}>
            <Text style = {localStyle.titreStyle}>Horaires</Text>
          </View>

          <View style = { localStyle.containerView }>
              <View style = { localStyle.textSubView }>
                <Text> Le BDE Ouvre à : </Text>
                <Text> { this.state.heureOuverture } </Text>
              </View>

              <View style = { localStyle.textSubView } >
                <Text> Le BDE ferme à : </Text>
                <Text> { this.state.heureFermeture } </Text>
              </View>
          </View>

          <View style = { localStyle.titreView }>
            <Text style = { localStyle.titreStyle } >Note :</Text>
          </View>

          <View style = { localStyle.containerView}>
            <Text> { this.state.note }</Text>
          </View>

            { this.renderGodButton (true) }

      </ScrollView>
    );

  } else {

    return (
      <ScrollView contentContainerStyle = { localStyle.mainContainer } >

          <Image
            source = { require('../../assets/closed.png') }
          />
          <Text>Le Bde est fermé :(</Text>

          { this.renderGodButton(true) }
      </ScrollView>
    );
  }
}

/*
  openModalNote = () => {

    // On ouvre le modale qui va nous permettre d'écire la nouvelle note
    // la notation fléché Bind les données directement, et donc on peut utiliser this. à l'interieur.


  }

  hideTimePicker = () => {
    this.setState ({
      isTimePickerVisible : false,
    });
  }

  openTimePicker = () => {

    console.log('ouvrir le DateTimePicker');

    this.setState ({
      isTimePickerVisible : true,
    });
  }
  handleTime = (time) => {

    console.log('Voici la date');
    console.log(time);
    this.hideTimePicker;
  }

  convertToArray (object) {//////////////////////////////////////////////////////////////////////////////////////////

    return Object.values (object);
  }

  componentDidMount () {////////////////////////////////////////////////////////
    this.fetchData ();
  }

  constructor (props) {/////////////////////////////////////////////////////////
    super (props)

    this.state  = {

      isTimePickerVisible : false,
      isOpen : true,
      heureOuverture : '7h00',
      heureFermeture : '18h00',
      heurePause : '15h00',
      isTherePause : true,
      note : 'Veuilliez vous rendre à 17h30 dans le hall du Campus avec vos covocations'
    }
  }

  fetchData () {////////////////////////////////////////////////////////////////
    console.log("fetching data ...");

    // On ouvre la référence
    var ref = firebase.database().ref ('local');

    //on recupere les données
    ref.on ('value' , (snapshot)=> {

      if ( snapshot.val () != null) {

        var newData = this.convertToArray (snapshot.val());

        this.setState ({
          isOpen : newData[0].isOpen,
          heureOuverture : newData[0].heureOuverture,
          heureFermeture : newData[0].heureFermeture,
          heurePause : newData[0].heurePause,
          note : newData[0].note
        });
      }
    })
  }

  godModeButton (boolean , text , callBackFunction) {

    if (boolean ==  true) {
      return (
          <View style = { { width : '85%' , marginBottom : 10 } }>
            <Button
              onPress = { callBackFunction }
              title = { text }
              color = '#8f0114'
            />

          <DateTimePicker
            mode = 'time'
            date = { new Date() }
            isVisible={ this.state.isTimePickerVisible }
            onConfirm={this.handleTime}
            onCancel={this.hideTimePicker}
          />
          </View>
      );
    }
  }

  localOuvert  (bool) {

    if (bool) {
      return (
        <View style = { { alignItems : 'center' , marginBottom : 5 , marginTop : 5 } }>
          <Text style = {{ fontWeight : 'bold' , fontSize : 20}}>Le Snack est ouvert !</Text>
        </View>
      );
    }else{
      return (
        <View style = { { alignItems : 'center' , marginBottom : 5 , marginTop : 5 } }>
          <Text style = {{ fontWeight : 'bold' , fontSize : 20}}>Le Snack est fermé !</Text>
        </View>
      );
    }
  }
  pause (bool) {

    if (bool) {
      return (
      <View>
        <View style = {localStyle.textSubView}>
          <Text style = {{ fontWeight : 'bold'}} > Le Snack partira en pause vers : </Text>
          <Text>{this.state.heurePause}</Text>
        </View>
      </View>
      );
    }
  }

  render () {

    return (
      <ScrollView contentContainerStyle = {localStyle.mainContainer}>
        <View style = {localStyle.titreView}>
          <Text style = {localStyle.titreStyle}>Horaires</Text>
        </View>
        <View style = {localStyle.containerView}>

          {this.localOuvert (this.state.isOpen)}

          <View style = {localStyle.textSubView}>
            <Text style = {{ fontWeight : 'bold'}} >Ouvre à : </Text>
            <Text>{this.state.heureOuverture}</Text>
          </View>

          <View style = {localStyle.textSubView}>
            <Text style = {{ fontWeight : 'bold'}} >Ferme à : </Text>
            <Text>{this.state.heureFermeture}</Text>
          </View>

          {this.pause (this.state.isTherePause)}

        </View>

        <View style = {localStyle.titreView}>
          <Text style = {localStyle.titreStyle}>Notes</Text>
        </View>
        <View style = {localStyle.containerView}>
          <View style = { localStyle.noteView }>
            <Text style = {{fontWeight : 'bold'}}>{this.state.note}</Text>
          </View>
        </View>

        { this.godModeButton (true , 'Modifier la note') , this.openModalNote}
      </ScrollView>
    );
  }
  */
}

const localStyle = StyleSheet.create ({
  mainContainer : {
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    paddingTop : 10,
    justifyContent : 'center',
    elevation : 3
  },
  titreView : {
    width : '50%',
    height : 35,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 3,
    marginBottom : 10,
  },
  titreStyle : {
    fontSize : 30,
    fontWeight : 'bold'
  },
  containerView : {
    backgroundColor : '#F3E5E7',
    borderRadius : 3,
    width : '95%',
    paddingLeft : 20,
    paddingRight : 20,
    paddingBottom : 20,
    marginBottom : 10,
    elevation : 3,
    justifyContent : 'center'
  },
  textSubView : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginBottom:2,
  },
  noteView : {
    paddingTop : 15,
  },
  headerView : {

    position : 'absolute',
  }
});

export default Local;
