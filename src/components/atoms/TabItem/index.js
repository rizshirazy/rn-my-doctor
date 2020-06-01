import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  IconDoctor,
  IconMessage,
  IconHospital,
  IconDoctorActive,
  IconMessageActive,
  IconHospitalActive,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Message') {
      return active ? <IconMessageActive /> : <IconMessage />;
    }
    if (title === 'Hospital') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
    return <IconDoctor />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
