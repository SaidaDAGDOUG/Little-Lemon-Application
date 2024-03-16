import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MenuItems from './components/MenuItems';
export default function WelcomeScreen() {
  return (
    <View style={welcomeScreenStyles.container}>
      <Text
        style={welcomeScreenStyles.titleText}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={welcomeScreenStyles.paragraphText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <MenuItems />
    </View>
  );
}

const welcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText: {
    padding: 20,
    fontSize: 20,
    color: '#EDEFEE',
    textAlign: 'center',

  },
  paragraphText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 4,
    color: '#EDEFEE',
    textAlign: 'center',
  }

})