import React, { Component } from 'react';
import AppNavigation from '../Navigation/AppNavigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <AppNavigation />
    );
  }
}