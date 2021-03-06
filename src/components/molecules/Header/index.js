import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({ title, leftButtonAction, type, subtitle, avatar }) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile
        title={title}
        subtitle={subtitle}
        leftButtonAction={leftButtonAction}
        avatar={avatar}
      />
    );
  }

  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={leftButtonAction}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => ({
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: (type) => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? colors.white : colors.text.primary,
    textTransform: 'capitalize',
  }),
});
