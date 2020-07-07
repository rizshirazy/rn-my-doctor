import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const MessageOut = ({ text, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <Text style={styles.time}>{date}</Text>
    </View>
  );
};

export default MessageOut;

const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: 'flex-end', paddingRight: 16 },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.card.light,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
