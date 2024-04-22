import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';
import { Article, ListDogs } from '../../Components';
import PetStatusList from '../../Components/PetStatusList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMyPetList } from '../../Store/thunkApis';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const Randeritem = (item) => {
    item = data;
    return (
      <Article title="Pet Food" icon={require('../../assets/images/Food.png')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 0.5,
            width: '90%',
            height: 'auto',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius: 15,
          }}>
          <Image style={{ width: 100, height: 100, marginVertical: 10 }} resizeMode="cover" source={item.image} />
          <View>
            <Text style={{ color: '#5CB15A', fontSize: 14, fontWeight: 'bold' }}>{item.brand}</Text>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: 'rgba(95, 95, 99, 1)', fontSize: 14, fontWeight: 'bold' }}>{item.gam}</Text>
            <Text
              style={{
                color: 'rgba(95, 95, 99, 1)',
                fontSize: 12,
                fontWeight: 'bold',
                borderWidth: 1,
                borderRadius: 10,
                width: '45%',
                height: '15%',
                textAlign: 'center',
                borderColor: '#F0BB22',
                marginTop: 5,
              }}>
              {item.petname}
            </Text>
          </View>
          <View>
            <Image style={{ width: 70, height: 70 }} resizeMode="cover" source={require('../../assets/images/ItemFood1.png')} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 0.5,
            width: '90%',
            height: 'auto',
            alignSelf: 'center',
            marginVertical: 15,
            borderRadius: 15,
          }}>
          <Image style={{ width: 100, height: 100, marginVertical: 10 }} resizeMode="cover" source={require('../../assets/images/Food1.png')} />
          <View>
            <Text style={{ color: '#5CB15A', fontSize: 14, fontWeight: 'bold' }}>Josera</Text>
            <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>Josi Dog Master Mix</Text>
            <Text style={{ color: 'rgba(95, 95, 99, 1)', fontSize: 14, fontWeight: 'bold' }}>900g</Text>
            <Text
              style={{
                color: 'rgba(95, 95, 99, 1)',
                fontSize: 12,
                fontWeight: 'bold',
                borderWidth: 1,
                borderRadius: 10,
                width: '45%',
                height: '15%',
                textAlign: 'center',
                borderColor: '#F0BB22',
                marginTop: 5,
              }}>
              Bella
            </Text>
          </View>
          <View>
            <Image style={{ width: 70, height: 70 }} resizeMode="cover" source={require('../../assets/images/ItemFood1.png')} />
          </View>
        </View>
      </Article>
    );
  };

  useEffect(() => {
    dispatch(getMyPetList());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hey Pixel Posse,</Text>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={require('../../assets/images/LogoDashboard.png')} />
        </View>
      </View>

      <View style={styles.main}>
        <Article title="My Pets" icon={require('../../assets/images/PetFoot.png')}>
          <ListDogs />
        </Article>

        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
          <Article asLink={'Hello'} containerStyle={{ width: '48%' }} title="Pet Location" icon={require('../../assets/images/Location.png')}>
            <Image containerStyle={{ flex: 1, borderRadius: 15 }} source={require('../../assets/images/Map.png')} />
          </Article>
          <Article asLink={'Hello'} containerStyle={{ width: '48%' }} title="Pet Status" icon={require('../../assets/images/MoodHappy.png')}>
            <PetStatusList />
          </Article>
        </View>

        <FlatList scrollEnabled={false} data={data} renderItem={Randeritem} keyExtractor={(item) => item.id} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5CB15A',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  logo: {
    borderRadius: 10,
    width: 53,
    height: 53,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logoImage: {
    width: 62,
    height: 62,
    objectFit: 'cover',
  },
  main: {
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
});

const data = [
  {
    id: 1,
    image: require('../../assets/images/Food1.png'),
    brand: 'Josera',
    name: 'Josi Dog Master Mix',
    gam: '900',
    petname: 'Bella',
  },
  {
    id: 2,
    image: require('../../assets/images/Food1.png'),
    brand: 'Happy Pet',
    name: 'Happy Dog - Profi Line High Energy 30-20',
    gam: '500',
    petname: 'Roudy',
  },
  {
    id: 3,
    image: require('../../assets/images/Food1.png'),
    brand: 'Happy Pet',
    name: 'Happy Dog - Profi Line High Energy 30-20',
    gam: '500',
    petname: 'Roudy',
  },
  {
    id: 4,
    image: require('../../assets/images/Food1.png'),
    brand: 'Happy Pet',
    name: 'Happy Dog - Profi Line High Energy 30-20',
    gam: '500',
    petname: 'Roudy',
  },
];
