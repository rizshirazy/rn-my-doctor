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
  const [chatData, setChatData] = useState([]);

  const chatId = `${user.uid}_${dataDoctor.data.uid}`;

  useEffect(() => {
    getDataUserFromLocal();

    const urlFirebase = `chatting/${chatId}/allChat/`;
    Fire.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({ id: itemChat, data: dataChat[itemChat] });
            });

            allDataChat.push({ id: key, data: newDataChat });
          });

          setChatData(allDataChat);
        }
      });
  }, [chatId]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => setUser(res));
  };

  const chatSend = () => {
    const today = new Date();
    const urlFirebase = `chatting/${chatId}/allChat/${setChatDate(today)}`;
    const urlMessageUser = `messages/${user.uid}/${chatId}`;
    const urlMessageDoctor = `messages/${dataDoctor.data.uid}/${chatId}`;

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent,
    };

    const dataChatHistoryForUser = {
      lastChatContent: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.data.uid,
    };

    const dataChatHistoryForDoctor = {
      lastChatContent: chatContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');

        Fire.database().ref(urlMessageUser).set(dataChatHistoryForUser);
        Fire.database().ref(urlMessageDoctor).set(dataChatHistoryForDoctor);
      })
      .catch((err) => {
        showError(err.message);
        console.log('ERROR ', err.message);
      });
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
          {chatData.map((chat) => (
            <View key={chat.id}>
              <Text style={styles.chatDate}>{chat.id}</Text>
              {chat.data.map((itemChat) => (
                <ChatItem
                  key={itemChat.id}
                  self={itemChat.data.sendBy === user.uid}
                  text={itemChat.data.chatContent}
                  date={itemChat.data.chatTime}
                  photo={
                    itemChat.data.sendBy !== user.uid && {
                      uri: dataDoctor.data.photo,
                    }
                  }
                />
              ))}
            </View>
          ))}
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
