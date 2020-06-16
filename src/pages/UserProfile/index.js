import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ILNullPhoto } from '../../assets';
import { Gap, Header, List, Profile } from '../../components';
import Fire from '../../config/Fire';
import { colors, getData } from '../../utils';

const UserProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = { uri: res.photo };
      setProfile(data);
    });
  }, [profile]);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'GetStarted' }],
        });
      })
      .catch((err) =>
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        }),
      );
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" leftButtonAction={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && profile.profession.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profession}
          avatar={profile.photo}
        />
      )}

      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Edit Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Edit Profile"
        desc="Last Updated Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Sign Out"
        desc="Last Updated Yesterday"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
});
