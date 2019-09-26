import React from 'react'
import { View, Text, StyleSheet,Dimensions} from 'react-native'

export default class Commentaire extends React.Component {

  componentDidMount () {

    //On recupere la props item qui nous ppermettra de recupérer les informations pour la card
    var item = this.props.item;

    console.log(item);
    console.log(item.nom);
    console.log(item.date);

    //On change le state en fonction de la props qu'on a recu
    this.setState ({

      nom :item.nom,
      date:item.date,
      reponse:item.reponse,
      idComment : item.idComment,
    });
  }

  constructor (props) {
    super (props);

    this.state= {

      nom : 'Elie El Debs',
      date:'02/11/2019',
      reponse:"Je crois que les rattrapages auront lieu mi juin. Les dates seront affichées par la scolarité d'ici quelques jours.",
      idComment : null,
    }
  }

  render  () {

  return (
      <View style = {comStyle.mainContainer}>

        <View style = {comStyle.titreView}>
          <Text style = {comStyle.titreStyle}>{ this.state.nom } </Text>
        </View>

        <View style = {comStyle.dataView}>
          <Text style = {comStyle.dataTextStyle}> { this.state.reponse } </Text>
        </View>

      </View>
    )
  }
}

const comStyle = StyleSheet.create ({

  mainContainer : {

    flexDirection : 'column',
    paddingTop : 10,
    paddingLeft:20,
    paddingRight : 20,
    elevation : 3,
    width : Dimensions.get('window').width-30,
    borderRadius : 3,
    backgroundColor : '#dae8e6',
    marginBottom :5,
  },
  titreView : {
    paddingLeft : 3,
  },
  dataView : {
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 10,
  },
  titreStyle : {
    fontSize : 15,
    fontWeight : 'bold',
  },
  dataTextStyle : {
    fontSize : 13,
  }
});
