import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, List } from '../../components';
import { Fire } from '../../config';
import { colors } from '../../utils';

const ChooseDoctor = ({ navigation, route }) => {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, []);

  const callDoctorByCategory = (category) => {
    Fire.database()
      .ref('doctors')
      .orderByChild('category')
      .equalTo(category)
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
          setListDoctor(data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${itemCategory.category}`}
        type="dark"
        leftButtonAction={() => navigation.goBack()}
      />
      {listDoctor.map((doctor) => (
        <List
          profile={{ uri: doctor.data.photo }}
          name={doctor.data.fullName}
          desc={doctor.data.gender}
          type="next"
          onPress={() => navigation.navigate('DoctorProfile', doctor)}
        />
      ))}
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
});
