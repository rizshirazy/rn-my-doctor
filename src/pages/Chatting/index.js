import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, fonts } from '../../utils';

const Chatting = ({ navigation, route }) => {
  const dataDoctor = route.params;

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
        value=""
        onChangeText={() => alert('input tap')}
        onButtonPress={() => alert('button press')}
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
