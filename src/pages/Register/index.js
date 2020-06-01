import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Input, Button, Gap } from '../../components';
import { colors } from '../../utils';

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Daftar Akun"
        leftButtonAction={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  content: { padding: 40, paddingTop: 0 },
});
