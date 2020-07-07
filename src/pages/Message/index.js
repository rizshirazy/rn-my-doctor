import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Message = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const dataSnapshot = snapshot.val();
        const data = [];

        const promises = await Object.keys(dataSnapshot).map(async (key) => {
          const urlUidDoctor = `doctors/${dataSnapshot[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');

          data.push({
            id: key,
            doctor: detailDoctor.val(),
            ...dataSnapshot[key],
          });
        });

        await Promise.all(promises);
        setChatHistory(data);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => setUser(res));
  };
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {chatHistory.map((item) => {
          const dataDoctor = {
            id: item.uidPartner,
            data: item.doctor,
          };

          return (
            <List
              key={item.id}
              profile={{ uri: item.doctor.photo }}
              name={item.doctor.fullName}
              desc={item.lastChatContent}
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          );
        })}
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
