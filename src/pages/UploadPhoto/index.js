import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import ImagePicker from 'react-native-image-picker';
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, storeData } from '../../utils';

const UploadPhoto = ({ navigation, route }) => {
  const { uid, fullName, profession } = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

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
          setHasPhoto(true);
          setPhotoForDB(photoBase64);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    Fire.database().ref(`users/${uid}/`).update({ photo: photoForDB });

    const data = route.params;
    data.photo = photoForDB;
    storeData('user', data);

    navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
  };
  return (
    <View style={styles.container}>
      <Header
        title="Upload Photo"
        leftButtonAction={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto ? (
              <IconRemovePhoto style={styles.addPhoto} />
            ) : (
              <IconAddPhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <View>
          <Button
            disabled={!hasPhoto}
            title="Upload and Countinue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() =>
              navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  profession: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary.normal,
  },
});
