import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer ,
         createStackNavigator,
         createMaterialTopTabNavigator,
         createDrawerNavigator,
         createBottomTabNavigator
       } from "react-navigation";
import React from 'react'
import { Image } from 'react-native';
import Home from '../Activities/Home.js'
import News from '../Activities/News.js'
import Topic from '../Activities/Topics.js'
import Snack from '../Activities/Local.js'
import Rss from '../Activities/Rss.js'
import Params from '../Activities/Params.js'
import SendCard from '../Activities/Send_Topic.js'
import SendComment from '../Activities/send_Comments.js'
import TopicInfo from '../Activities/Topics_Infos.js'
import NewsInfo from '../Activities/News_Info.js'
import ParamSnack from '../Activities/ParamSnack.js'
import First from '../Activities/FirstActivity.js'
import Login from '../Activities/Login.js'
import SignUp from '../Activities/SignupOut.js'
import Adresse from '../Activities/Adresse.js'
import Post from '../Activities/PostNews.js'

const NewsNav = createStackNavigator ({
  News : {
    screen : News,
    navigationOptions : {
      title : 'News',
      headerStyle :{
        backgroundColor : '#8b2938',
      },
      headerTintColor : 'white',
    }
  },
  NewsInfo : {
    screen : NewsInfo,
    navigationOptions : {
      title:'Informations',
      headerStyle :{
        backgroundColor : '#8b2938',
      },
      headerTintColor : 'white',
    }
  },
  Post : {
    screen : Post,
    navigationOptions : {
      title : 'Send News',
      headerStyle :{
        backgroundColor : '#8b2938',
      },
      headerTintColor : 'white',
    }
  }
},{
  initialRouteName : 'News'
});

const TopicNav = createStackNavigator ({
  Topic : {
    screen : Topic,
    navigationOptions : {
      title : 'Topics',
      headerStyle :{
        backgroundColor : '#8b2938',
      },
      headerTintColor : 'white',
    }
  },
  SendCard : {
    screen : SendCard,
    navigationOptions : {
      title : 'SendCard',
      headerStyle :{
        backgroundColor : '#8b2938',
      },
      headerTintColor : 'white',
    }
  },
  TopicInfo : {
    screen : TopicInfo,
    navigationOptions : {
      title : 'Infos',
      headerStyle :{
        backgroundColor : '#8b2938',
      },
      headerTintColor : 'white',
    }
  },
  SendComment : {
    screen :SendComment,
    navigationOptions : {
      title : 'Send Comments',
      headerStyle :{
        backgroundColor : '#8b2938',
      },
      headerTintColor : 'white',
    }
  }
}, {
  initialRouteName : 'Topic'
})

const TopNavigation = createMaterialTopTabNavigator ({
  Rss : { screen : Rss },
  Snack : { screen : Snack },
},{
  tabBarOptions : {
    style : {
      backgroundColor : '#8b2938',

    },

  }
});

const BottomNavigation = createBottomTabNavigator({
  Home : { screen : TopNavigation,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../../assets/home.png')}
        style={{height:30,width:30,marginTop:-5}}
          />
        }
    }
   },
  Topic : { screen : TopicNav ,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../../assets/logotopic.png')}
        style={{height:30,width:30,marginTop:-5}}
          />
        }
    }
  },


  News : { screen : NewsNav ,
    navigationOptions: {
      tabBarIcon: () => {
        return <Image
          source={require('../../assets/newspaperIcon.png')}
        style={{height:30,width:30,marginTop:-5}}
          />

    }

  },
}
},{

  initialRouteName : 'Home',

  order : ['News' , 'Home' , 'Topic'],


  },
  {tabBarOptions: {
    activeBackgroundColor: 'red', // Couleur d'arrière-plan de l'onglet sélectionné
    inactiveBackgroundColor: 'green', // Couleur d'arrière-plan des onglets non sélectionnés
    showLabel: false, // On masque les titres
    showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
  }


})

const FirstActivityNav = createStackNavigator ({
  First : { screen : First,
            navigationOptions : {
              headerVisible: false,
            }
          },
  Login : { screen : Login },
  SignUp : { screen : SignUp },
  Adresse : { screen : Adresse },
  BottomNavigation :{ screen : BottomNavigation }
}, {
  headerMode : 'none',
});

export default createAppContainer (FirstActivityNav);
