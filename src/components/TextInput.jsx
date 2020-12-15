import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 14,
  },
  error: {
    borderColor: 'red',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.error, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
