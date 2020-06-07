import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link, Loading } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, storeData, useForm } from '../../utils';

const Login = ({ navigation }) => {
  const [form, setForm] = useForm({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const login = () => {
    console.log('form', form);
    setLoading(true);

    // Authentication user with email and password
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        // Get user data from database
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              // Store data to local storage
              storeData('user', resDB.val());
              setLoading(false);
              navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
            }
          });
      })
      .catch((err) => {
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <View>
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value.trim())}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={login} />
            <Gap height={30} />
            <Link
              title="Create New Account"
              size={16}
              align="center"
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </ScrollView>

      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 153,
    marginVertical: 30,
  },
});
