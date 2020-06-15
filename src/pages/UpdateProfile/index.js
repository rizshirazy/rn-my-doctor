import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { Fire } from '../../config';
import { colors, getData, storeData } from '../../utils';

const UpdateProfile = ({ navigation }) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto,
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({ uri: res.photo });
      setProfile(data);
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      { quality: 0.2, maxWidth: 200, maxHeight: 200 },
      (response) => {
        console.log(response);

        if (response.didCancel || response.error) {
          showMessage({
            message: 'Ooops, no photo has been selected!',
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const source = { uri: response.uri };
          const photoBase64 = `data:${response.type};base64, ${response.data}`;

          setPhoto(source);
          setPhotoForDB(photoBase64);
        }
      },
    );
  };

  const update = () => {
    // check should password updated
    if (password.length > 0) {
      // check password requirment
      if (password.length < 6) {
        // if requirement doesn't match, show error message
        showMessage({
          message: 'Password at least 6 characters.',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        // update password and profile
        updatePassword();
        updateProfileData();
      }
    } else {
      // only update profile
      updateProfileData();
    }
  };

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          console.log(err);
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    const data = profile;
    if (photoForDB.length > 0) data.photo = photoForDB;

    Fire.database()
      .ref(`users/${data.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data);
        navigation.replace('MainApp');
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title="Update Profile"
        leftButtonAction={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile avatar={photo} onPress={getImage} iconShown />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disabled />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
  content: { padding: 30, paddingTop: 0 },
});
