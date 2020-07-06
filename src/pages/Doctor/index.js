import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import { Fire } from '../../config';
import { colors, fonts, showError } from '../../utils';

const Doctor = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getNews();
    getCategory();
    getTopRatedDoctor();
  }, []);

  const getNews = () => {
    Fire.database()
      .ref('news')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch((err) => showError(err.message));
  };

  const getCategory = () => {
    Fire.database()
      .ref('category_doctor')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setCategory(res.val());
        }
      })
      .catch((err) => showError(err.message));
  };

  const getTopRatedDoctor = () => {
    Fire.database()
      .ref('doctors')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const obj = res.val();
          const data = [];
          Object.keys(obj).map((key) => {
            data.push({
              id: key,
              data: obj[key],
            });
          });
          setDoctors(data);
        }
      })
      .catch((err) => showError(err.message));
  };

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
                {category.map((item) => (
                  <DoctorCategory
                    key={item.id}
                    category={item.category}
                    onPress={() => navigation.navigate('ChooseDoctor', item)}
                  />
                ))}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {doctors.map((doctor) => (
              <RatedDoctor
                key={doctor.id}
                avatar={{ uri: doctor.data.photo }}
                name={doctor.data.fullName}
                desc={doctor.data.category}
                onPress={() => navigation.navigate('DoctorProfile', doctor)}
              />
            ))}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map((item) => (
            <NewsItem
              key={item.id}
              title={item.title}
              date={item.date}
              image={item.image}
            />
          ))}
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
