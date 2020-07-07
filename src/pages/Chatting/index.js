import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { Fire } from '../../config';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setChatDate,
  showError,
} from '../../utils';

const Chatting = ({ navigation, route }) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('user').then((res) => setUser(res));
  }, []);

  const chatSend = () => {
    const today = new Date();
    const chatId = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/${setChatDate(today)}`;

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent,
    };

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch((err) => showError(err.message));
  };

  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        title={dataDoctor.data.fullName}
        subtitle={dataDoctor.data.profession}
        leftButtonAction={() => navigation.goBack()}
        avatar={{ uri: dataDoctor.data.photo }}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.chatDate}>Kamis, 4 Juni 2020</Text>
          <ChatItem self />
          <ChatItem />
          <ChatItem self />
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onButtonPress={chatSend}
      />
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
