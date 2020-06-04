import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, ListDoctor } from '../../components';
import { colors } from '../../utils';
import { DummyDoctor1 } from '../../assets';

const ChooseDoctor = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        leftButtonAction={() => navigation.goBack()}
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="Wanita"
        type="next"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="Wanita"
        type="next"
      />
      <ListDoctor
        profile={DummyDoctor1}
        name="Alexander Jennie"
        desc="Wanita"
        type="next"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
});
