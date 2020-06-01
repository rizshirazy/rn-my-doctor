import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, Button, Link, Gap } from '../../components';
import { ILNullPhoto, IconAddPhoto } from '../../assets';
import { colors, fonts } from '../../utils';

const UploadPhoto = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title="Upload Photo"
        leftButtonAction={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Countinue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
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
    bottom: 8,
    right: 6,
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
