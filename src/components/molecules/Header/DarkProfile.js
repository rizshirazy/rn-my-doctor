import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Button } from '../../atoms';
import { DummyDoctor9 } from '../../../assets';

const DarkProfile = ({ title, subtitle, profile, leftButtonAction }) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={leftButtonAction} />
      <View style={styles.content}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{subtitle}</Text>
      </View>
      <Image source={DummyDoctor9} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 25,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: { flex: 1 },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.subTitle,
    textAlign: 'center',
    marginTop: 6,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
