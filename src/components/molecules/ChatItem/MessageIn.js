import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const MessageIn = ({ text, date, photo }) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.time}>{date}</Text>
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
