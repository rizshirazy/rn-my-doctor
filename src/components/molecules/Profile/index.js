import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconRemovePhoto } from '../../../assets';
import { colors, fonts } from '../../../utils';

const Profile = ({ name, desc, avatar, iconShown, onPress }) => {
  return (
    <View style={styles.container} onPress={onPress}>
      {iconShown ? (
        <TouchableOpacity style={styles.borderAvatar} onPress={onPress}>
          <Image source={avatar} style={styles.avatar} />
          <IconRemovePhoto style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.borderAvatar}>
          <Image source={avatar} style={styles.avatar} />
        </View>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 110, height: 110, borderRadius: 110 / 2 },
  borderAvatar: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
    textAlign: 'center',
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});
