import { Pressable, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Image } from '@rneui/themed';
import { Feather, Entypo, Fontisto, AntDesign } from '@expo/vector-icons';
import { logout } from '../../store/slices/profile.slice';
import { useDispatch } from 'react-redux';
import { Account } from './Account';
import { useSelector } from 'react-redux';
import { Adress } from './Adress';
import { Order } from './Order';

export function Profile() {
  const [nameModal, setNameModal] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const setModalVisibleCallback = useCallback(() => {
    setModalVisible(false);
  }, [setModalVisible]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.back}>
        </View>
        <Text style={styles.text}>{profile?.customer_name}</Text>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={require('../../assets/images/LogoDashboard.png')} />
        </View>
      </View>
      <Image style={{ width: '100%', height: '65%' }} resizeMode="cover" source={{ uri: profile?.customer_image + '?' + new Date() }} />
      <View style={styles.view2in}>

      </View>
      <View style={styles.box1}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#141415', fontSize: 25, fontWeight: '700' }}>{profile?.customer_name}</Text>
          <TouchableOpacity onPress={() => dispatch(logout())} style={{ flexDirection: 'row', gap: 3 }}>
            <Entypo name="log-out" size={18} color="red" />
            <Text style={{ color: '#E54D4D', fontSize: 12, fontWeight: '600' }}>Sign out</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', gap: 20, marginLeft: 15, alignItems: 'center', marginTop: 7 }}>
          <Fontisto name="email" size={20} color="#000000" />
          <Text style={styles.txtContent}>{profile?.CUSTOMER_EMAIL}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 20, marginLeft: 15, alignItems: 'center', marginTop: 15 }}>
          <AntDesign name="phone" size={20} color="#000000" />
          <Text style={styles.txtContent}>{profile?.CUSTOMER_PHONE}</Text>
        </View>
      </View>

      <Modal
        transparent={false}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => true}>
        <View style={{ height: '100%' }}>
          {
            (nameModal === 'Address') ?
              <Adress action={{ setModalVisible }} state={{ modalVisible, profile }} /> :
              (nameModal === 'AboutMe') ?
                <Account action={{ setModalVisible: setModalVisibleCallback }} /> :
                <Order action={{ setModalVisible }} state={{ modalVisible }} />
          }
        </View>
      </Modal>

      <View style={styles.box2}>
        {
          Data.map((item) => (
            <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '2%' }}>
              <View style={{ flexDirection: 'row', gap: 15 }}>
                <Image resizeMode="contain" style={{ width: 20, height: 20 }} source={item.icon} />
                <Text style={{ color: 'black', fontSize: 14, fontWeight: '600' }}>{item.name}</Text>
              </View>
              <TouchableOpacity onPress={() => {
                setNameModal(item.screen), setModalVisible(true);
              }}>
                <Feather name="chevron-right" size={24} color="#868889" />
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtContent: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500'
  },
  box2: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    padding: '3%',
    backgroundColor: 'white',
    borderRadius: 26,
    borderStyle: 'solid',
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    transform: [{ scaleX: 1 }],
    bottom: '33%'
  },
  box1: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 15,
    padding: '4%',
    backgroundColor: 'white',
    borderRadius: 26,
    borderStyle: 'solid',
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    transform: [{ scaleX: 1 }],
    bottom: '33%'
  },
  view2in: {
    alignItems: 'center',
    position: 'absolute',
    bottom: -4,
    backgroundColor: '#F3F2F5',
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    transform: [{ scaleX: 2 }]
  },
  back: {
    backgroundColor: '#5CB15A'
  },

  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#5CB15A',
    paddingHorizontal: '4%',
    paddingTop: '7%',
    paddingBottom: '2%'
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: '7%'
  },
  logo: {
    borderRadius: 10,
    width: 53,
    height: 53,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logoImage: {
    width: 62,
    height: 62,
    objectFit: 'cover'
  }
});

const Data = [
  {
    id: 1,
    icon: require('../../assets/images/aboutMe.png'),
    name: 'About Me',
    screen: 'AboutMe'
  },
  {
    id: 2,
    icon: require('../../assets/images/order.png'),
    name: 'My Orders',
    screen: ''
  },
  {
    id: 3,
    icon: require('../../assets/images/address.png'),
    name: 'Address',
    screen: 'Address'
  }
];