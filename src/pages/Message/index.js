import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { List } from '../../components';
import { colors, fonts } from '../../utils';

const Message = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <List
          profile={DummyDoctor1}
          name="Alexander Jennie"
          desc="Ok baik bu"
        />
        <List
          profile={DummyDoctor1}
          name="Alexander Jennie"
          desc="Ok baik bu"
        />
        <List
          profile={DummyDoctor1}
          name="Alexander Jennie"
          desc="Ok baik bu"
        />
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.secondary },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
