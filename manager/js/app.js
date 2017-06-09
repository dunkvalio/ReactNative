import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
