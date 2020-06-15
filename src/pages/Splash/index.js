import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Fire } from '../../config';
import { colors, fonts, storeData } from '../../utils';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          console.log('user :', user);
          Fire.database()
            .ref(`users/${user.uid}/`)
            .once('value')
            .then((resDB) => {
              if (resDB.val()) {
                // Store data to local storage
                storeData('user', resDB.val());
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'MainApp' }],
                });
              }
            });
          // navigation.replace('MainApp');
        } else {
          console.log('no user');
          // navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
