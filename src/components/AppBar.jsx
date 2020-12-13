import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 15,
    paddingBottom: 20,
    backgroundColor: theme.colors.dark,
  },
  text: {
    color: theme.colors.light,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
      <View style={styles.container}>
        <Text style={styles.text}>Repositories</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
