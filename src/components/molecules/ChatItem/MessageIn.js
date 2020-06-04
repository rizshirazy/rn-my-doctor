import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyDoctor9 } from '../../../assets';
import { colors, fonts } from '../../../utils';

const MessageIn = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor9} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.time}>4.20 PM</Text>
      </View>
    </View>
  );
};

export default MessageIn;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: { width: 30, height: 30, borderRadius: 30 / 2, marginRight: 12 },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.card.dark,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
