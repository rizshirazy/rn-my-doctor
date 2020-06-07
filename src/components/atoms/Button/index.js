import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import ButtonIconSend from './ButtonIconSend';
import IconOnly from './IconOnly';

const Button = ({ type, title, onPress, icon, disabled }) => {
  if (type === 'icon-only') {
    return <IconOnly onPress={onPress} icon={icon} disabled={disabled} />;
  }

  if (type === 'btn-icon-send') {
    return <ButtonIconSend onPress={onPress} disabled={disabled} />;
  }

  if (disabled) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
  }),
  disableBg: {
    backgroundColor: colors.button.disabled.background,
    paddingVertical: 10,
    borderRadius: 10,
  },
  disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.button.disabled.text,
  },
});
