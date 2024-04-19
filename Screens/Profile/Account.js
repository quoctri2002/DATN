import { StyleSheet, Text, View, Pressable, Modal, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Avatar } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { Button, Input } from '@rneui/base';
import { getProfile } from '../../store/thunkApis';

export function Account({ action }) {
  const { setModalVisible } = action;
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [user, setUser] = useState({
    name: profile.CUSTOMER_NAME, phone: profile.CUSTOMER_PHONE, address: profile.CUSTOMER_ADDRESS, password: ''
  });

  const updateField = (field, value) => {
    setUser({
      ...user, [field]: value
    });
  };
  const [editModalVisible, setEditModalVisible] = useState(false);

  async function updateUser() {
    const data = {
      CUSTOMER_EMAIL: profile.CUSTOMER_EMAIL,
      CUSTOMER_NAME: user.name,
      CUSTOMER_PHONE: user.phone,
      CUSTOMER_ADDRESS: user.address,
      CUSTOMER_PASSWORD: user.password
    };
    console.log(data);

    const response = await fetch('http://206.189.45.141/api/auth/update-user.php', {
      method: 'POST', body: JSON.stringify(data)
    });

    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.status === true) {
      const userLogin = {
        email: profile.CUSTOMER_EMAIL, password: user.password
      };
      dispatch(getProfile(userLogin));
      setEditModalVisible(false);
      setModalVisible(false);
      ToastAndroid.showWithGravity('Update successfully', ToastAndroid.LONG, ToastAndroid.CENTER);
    } else {
      ToastAndroid.showWithGravity('Update failed', ToastAndroid.LONG, ToastAndroid.CENTER);
    }
  }

  const EditProfile = () => {
    return (<View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => setEditModalVisible(false)} style={styles.back}>
          <Feather name="chevron-left" size={25} color="white" />
        </Pressable>
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        width: 'auto',
        height: 'auto',
        paddingLeft: 20,
        paddingTop: '10%',
        alignItems: 'center',
        gap: 20
      }}>
        <Avatar
          size={90}
          rounded
          source={{ uri: profile.CUSTOMER_IMAGE }}
        />
        <View>
          <Text style={styles.textEmail}>{profile.CUSTOMER_EMAIL}</Text>
        </View>
      </View>
      <View style={{ paddingTop: '10%', paddingHorizontal: 40, gap: 20 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <FontAwesome name="user" size={20} color="#5CB15A" />
            <Text style={styles.textTitle}>Name</Text>
          </View>
          <Input
            value={user.name}
            onChangeText={(value) => updateField('name', value)}
            placeholder="Name"
            style={{ width: '60%' }}
          />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <FontAwesome name="phone" size={20} color="#5CB15A" />
            <Text style={styles.textTitle}>Phone</Text>
          </View>
          <Input
            value={user.phone}
            onChangeText={(value) => updateField('phone', value)}
            placeholder="Phone"
            style={{ width: '60%' }}
          />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <FontAwesome name="map-marker" size={20} color="#5CB15A" />
            <Text style={styles.textTitle}>Address</Text>
          </View>
          <Input
            value={user.address}
            onChangeText={(value) => updateField('address', value)}
            placeholder="Address"
            style={{ width: '60%' }}
          />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <FontAwesome name="lock" size={20} color="#5CB15A" />
            <Text style={styles.textTitle}>Password (Leave blank to keep the same)</Text>
          </View>
          <Input
            value={user.password}
            onChangeText={(value) => updateField('password', value)}
            placeholder="Password"
            style={{ width: '60%' }}
          />
        </View>
        {/*<View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>*/}
        {/*  <View style={{ flexDirection: 'row', gap: 20 }}>*/}
        {/*    <FontAwesome name="lock" size={20} color="#5CB15A" />*/}
        {/*    <Text style={styles.textTitle}>Avatar URL</Text>*/}
        {/*  </View>*/}
        {/*  <Input*/}
        {/*    value={avatar} onChangeText={setAvatar}*/}
        {/*    placeholder="Avatar url"*/}
        {/*    style={{ width: '60%' }}*/}
        {/*  />*/}
        {/*</View>*/}
      </View>
      <View style={{
        flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '10%'
      }}>
        <Button
          size={'md'}
          onPress={updateUser}>Save</Button>
      </View>
    </View>);
  };

  const Data = [{
    id: 1, icon: 'envelope-o', title: 'Email', content: profile.CUSTOMER_EMAIL
  }, {
    id: 2, icon: 'phone', title: 'Phone', content: profile.CUSTOMER_PHONE
  }, {
    id: 3, icon: 'map-marker', title: 'Address', content: profile.CUSTOMER_ADDRESS
  }];

  return (<View style={styles.container}>
    <View style={styles.header}>
      <Pressable onPress={() => setModalVisible(false)} style={styles.back}>
        <Feather name="chevron-left" size={25} color="white" />
      </Pressable>
      <Text style={styles.text}>Profile</Text>
    </View>
    <View style={{
      flexDirection: 'row',
      width: 'auto',
      height: 'auto',
      paddingLeft: 20,
      paddingTop: '10%',
      alignItems: 'center',
      gap: 20
    }}>
      <Avatar
        size={90}
        rounded
        source={{ uri: profile.CUSTOMER_IMAGE }}
      />
      <View>
        <Text style={styles.textName}>{profile.CUSTOMER_NAME}</Text>
        <Text style={styles.textEmail}>{profile.CUSTOMER_EMAIL}</Text>
      </View>
    </View>
    <View style={{ paddingTop: '10%', paddingHorizontal: 40, gap: 20 }}>
      {Data.map((item) => (<View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <FontAwesome name={item.icon} size={20} color="#5CB15A" />
          <Text style={styles.textTitle}>{item.title}</Text>
        </View>
        <Text style={styles.textHint}>{item.content}</Text>
      </View>))}
    </View>
    <View style={{
      flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '10%'
    }}>
      <Button
        size={'md'}
        onPress={() => setEditModalVisible(true)}>Edit Profile</Button>
    </View>

    <Modal visible={editModalVisible}
           transparent={false}
           animationType="slide"
           onRequestClose={() => true}>
      <View style={{ height: '100%' }}>
        <EditProfile />
      </View>
    </Modal>

  </View>);
}


const styles = StyleSheet.create({
  textHint: {
    color: '#9098B1', fontSize: 14
  }, textTitle: {
    color: 'black', fontWeight: '600', fontSize: 16
  }, textEmail: {
    color: '#9098B1', fontWeight: '700', fontSize: 12
  }, textName: {
    color: 'black', fontWeight: '700', fontSize: 20
  }, back: {
    backgroundColor: '#5CB15A', flex: 1.2
  },

  text: {
    color: 'white', fontWeight: '600', fontSize: 16, paddingLeft: '7%', flex: 2
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#5CB15A',
    paddingHorizontal: '4%',
    paddingBottom: '2%'
  },

  container: {
    flex: 1, width: '100%', height: '100%'
  }, buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5CB15A',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    width: '80%'
  }
});

