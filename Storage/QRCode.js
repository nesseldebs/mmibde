import React from 'react'
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';

import { CameraKitCameraScreen, } from 'react-native-camera-kit';


export default class QRCode extends React.Component {

  open_QR_Code_Scanner=()=> {

    var that = this;

    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA, {
              'title': 'Camera App Permission',
              'message': 'Camera App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            that.setState({ QR_Code_Value: '' });
            that.setState({ Start_Scanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err", err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    } else {
      that.setState({ QR_Code_Value: '' });
      that.setState({ Start_Scanner: true });
    }
  }

  onQR_Code_Scan_Done = (QR_Code) => {

    this.setState({ QR_Code_Value: QR_Code });
    this.setState({ Start_Scanner: false });
  }

  openLink_in_browser = () => {

    Linking.openURL(this.state.QR_Code_Value);
  }

  constructor (porps) {
    super (props);

    this.state = {

      QR_Code_Value: '',// Retient la valeur du QRcode au fur et à mesure du scan
      start_Scanner: false,// Quand est ce que commence le scann
    }
  }

  return () {

    <View style = { { flex : 1 } }>
    
    <CameraKitCameraScreen
      showFrame={true}
      scanBarcode={true}
      laserColor={'#FF3D00'}
      frameColor={'#00C853'}
      colorForScannerFrame={'black'}
      onReadCode={event =>
        this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
      }
    />
    </View>
  }
}
