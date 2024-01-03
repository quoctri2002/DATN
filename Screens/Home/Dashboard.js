import { StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';
import { Article, ListDogs } from '../../Components';

export const Dashboard = () => {
  return (
    <View style={styles.container}>
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

        <View style={{ flexDirection: 'row', width: '100%', gap: 20 }}>
          <Article title="Pet Location" icon={require('../../assets/images/Location.png')}>
            <Text>Text</Text>
          </Article>
          <Article title="Pet Status" icon={require('../../assets/images/MoodHappy.png')}>
            <Text>List</Text>
          </Article>
        </View>
      </View>
    </View>
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
    paddingVertical: 10,
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
    paddingHorizontal: 10,
  },
});
