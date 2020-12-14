import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingLeft: 20,
    margin: 10,
    marginBottom: 3,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 16,
  },
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
