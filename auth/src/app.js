import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPGbUL694VKk3nfmTbC4GQcTxvWHhm-zA',
      authDomain: 'react-native-auth-demo-f0c34.firebaseapp.com',
      databaseURL: 'https://react-native-auth-demo-f0c34.firebaseio.com',
      projectId: 'react-native-auth-demo-f0c34',
      storageBucket: 'react-native-auth-demo-f0c34.appspot.com',
      messagingSenderId: '313719971046'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Auth success! User was returned.');
        this.setState({ loggedIn: true });
      } else {
        console.log('Auth fail! User is null.');
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogoutPressed() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        console.log('Rendering Logout Button');
        return (
          <View style={{ marginTop: 20 }}>
            <Button onPress={this.onLogoutPressed.bind(this)} >
              Log Out
            </Button>
          </View>
        );
      case false:
        console.log('Rendering Login Form');
        return <LoginForm />;
      default:
        console.log('Rendering Spinner');
        return (
          <View style={{ marginTop: 20 }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}


export default App;
