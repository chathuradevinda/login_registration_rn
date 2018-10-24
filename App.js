import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';  
import Login from './app/components/Login';
import Profile from './app/components/Profile';

const Application = createStackNavigator({
  Home: {screen: Login},
  Profile: {screen: Profile}
},{
  navigationOptions: {
    header: false,
  }
}); 
 
export default class App extends React.Component {
  render() {
    return (
        
        <Application/>
   
    );
  }
}

