
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBpdOdceTT70EvA6nUIfUvcwdk_qSN8TfQ",
    authDomain: "midbe-2a457.firebaseapp.com",
    databaseURL: "https://midbe-2a457.firebaseio.com",
    projectId: "midbe-2a457",
    storageBucket: "midbe-2a457.appspot.com",
    messagingSenderId: "251992747480",
    appId: "1:251992747480:web:9f3c02bea53aea4e"
  };

  export default !firebase.apps.length  ? firebase.initializeApp (firebaseConfig) : firebase.app ();
