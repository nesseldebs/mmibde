import React from 'react';
import { StyleSheet, View  } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Web extends React.Component {


  render () {
    return (
    <View style = { { flex : 1 } }>
      <WebView
        javaScriptEnabled = { true }
        source = { {uri : 'http://www.bu.parisdescartes.fr/' } }
        style = { { width: '100%' , height : '100%' } }
        allowFullScreenVideo = { false }
        allowsBackForwardNavigationGestures = { true }
      />
    </View>
    );
  }
}
