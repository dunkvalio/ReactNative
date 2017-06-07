import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAXsxOZ1JseZeJHep49ypns1jMQ24Fzw-A',
      authDomain: 'fir-manager-f4862.firebaseapp.com',
      databaseURL: 'https://fir-manager-f4862.firebaseio.com',
      projectId: 'fir-manager-f4862',
      storageBucket: 'fir-manager-f4862.appspot.com',
      messagingSenderId: '875452069401'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
