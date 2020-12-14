import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';

import theme from '../theme';
import Text from './Text';
import TextInput from './FormikTextInput';

const styles = StyleSheet.create({
  login: {
    paddingTop: 30,
  },
  button: {
    padding: 10,
    paddingLeft: 20,
    margin: 10,
    marginBottom: 3,
    backgroundColor: theme.colors.primary,
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.login}>
      <TextInput name="username" placeholder="Username" />
      <TextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={styles.button}>Sign in</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    alert(`logging in with username ${values.username} and password ********`);
  };

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
