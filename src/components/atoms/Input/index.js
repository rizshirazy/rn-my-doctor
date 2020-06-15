import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import {} from 'react-native-gesture-handler';
import { colors, fonts } from '../../../utils';

const Input = ({ label, value, onChangeText, secureTextEntry, disabled }) => {
  const [border, setBorder] = useState(colors.border);

  const onFocusForm = () => {
    setBorder(colors.primary);
  };

  const onBlurForm = () => {
    setBorder(colors.border);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlurForm}
        onFocus={onFocusForm}
        secureTextEntry={secureTextEntry}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginBottom: 6,
  },
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
});
