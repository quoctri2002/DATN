import { StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';
import React from 'react';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather style={{ color: 'white' }} name="chevron-left" size={25} />
        <Text style={styles.txtTitle}>Dr.Nambuvan</Text>
      </View>
      <View>
        <Image style={{ width: '100%', height: '90%' }} source={require('../../assets/images/docter.png')} />
      </View>

      <View style={{ width: 100, height: 100, color: '#5CB15A' }}></View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  txtTitle: {
    marginLeft: '28%',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: '#5CB15A',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    height: 'auto',
    width: '100%',
  },
});
