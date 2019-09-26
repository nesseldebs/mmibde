import { AsyncStorage } from 'react-native'

export saveData (data , key) {
  console.log('Creating key '+key+' with data '+data);
  console.log('Saving data ...');

  AsyncStorage.setItem (key,data);
}
