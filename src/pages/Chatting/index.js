import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, ChatItem, InputChat } from '../../components';
import { fonts, colors } from '../../utils';

const Chatting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        title="Nairobi Putri Hayza"
        subtitle="Dokter Anak"
        leftButtonAction={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Kamis, 4 Juni 2020</Text>
        <ChatItem self />
        <ChatItem />
        <ChatItem self />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  content: { flex: 1 },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
});
