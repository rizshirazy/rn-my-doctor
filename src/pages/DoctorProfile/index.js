import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

const DoctorProfile = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header
        title="Doctor Profile"
        leftButtonAction={() => navigation.goBack()}
      />
      <Profile name="Nairobi Putri Hayza" desc="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2002" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem label="No. STR" value="000001116622081996" />
      <View style={styles.action}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
  action: { paddingHorizontal: 40, paddingTop: 23 },
});
