import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import theme from '../theme';
import Text from './Text';
import TextInput from './FormikTextInput';

const styles = StyleSheet.create({
  login: {
    margin: 10,
  },
  button: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
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
  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = (values) => {
    alert(`logging in with username ${values.username} and password ********`);
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });

  const props = { initialValues, onSubmit, validationSchema };

  const render = ({ handleSubmit }) => {
    return <SignInForm onSubmit={handleSubmit} />;
  };

  return <Formik {...props}>{render}</Formik>;
};

export default SignIn;
