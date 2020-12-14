import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  label: {
    color: theme.colors.white,
    backgroundColor: theme.colors.blue,
    fontWeight: theme.fontWeights.bold,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    margin: 1,
    borderRadius: 7,
  },
});

const Text = ({
  bold,
  color,
  fontSize,
  fontWeight,
  label,
  title,
  subtitle,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    bold && styles.fontWeightBold,
    title && styles.fontSizeHeading,
    subtitle && styles.fontSizeSubheading,
    label && styles.label,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
