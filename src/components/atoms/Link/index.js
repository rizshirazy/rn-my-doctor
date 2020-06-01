import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';

const Link = ({ title, size, align }) => {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    fontFamily: 'Nunito-Regular',
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
