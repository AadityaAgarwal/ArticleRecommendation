import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Home from './screens/Home';
import Recommended from './screens/Recommended';

export default function App() {
  return (
    <View >
      <AppContainer />
    </View>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Home: Home,
  Recommended:Recommended,
})

const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
