import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import {} from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Input = ({ label }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.secondary,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
});
