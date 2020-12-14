import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    padding: 5,
    backgroundColor: theme.colors.dark,
  },
  text: {
    margin: 10,
    color: theme.colors.light,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Link to="/signin">
          <Text style={styles.text}>Sign in</Text>
        </Link>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
