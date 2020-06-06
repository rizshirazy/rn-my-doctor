import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import { colors, fonts } from '../../utils';

const Doctor = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcomeText}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <DoctorCategory
                  onPress={() => navigation.navigate('ChooseDoctor')}
                />
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              avatar={DummyDoctor1}
              name="Alexa Rachel"
              desc="Pediatrician"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DummyDoctor2}
              name="Bobby Fernandes"
              desc="Dentist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DummyDoctor3}
              name="Peo Minn"
              desc="Podiatrist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: { paddingHorizontal: 16 },
  welcomeText: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    width: '80%',
  },
  category: { flexDirection: 'row' },
  wrapperScroll: { marginHorizontal: -16 },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
