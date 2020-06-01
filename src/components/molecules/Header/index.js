import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gap, Button } from '../../atoms';
import { colors, fonts } from '../../../utils';

const Header = ({ title, leftButtonAction }) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={leftButtonAction} />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
