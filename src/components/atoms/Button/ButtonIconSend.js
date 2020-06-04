import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconSendDark, IconSendLight } from '../../../assets';
import { colors } from '../../../utils';

const ButtonIconSend = ({ disabled }) => {
  return (
    <View style={styles.container(disabled)}>
      {disabled ? <IconSendDark /> : <IconSendLight />}
    </View>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: (disabled) => ({
    backgroundColor: disabled ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
