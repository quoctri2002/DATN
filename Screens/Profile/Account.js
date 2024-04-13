import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Avatar } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

export function Account({action}) {
  const { setModalVisible } = action;
  const profile = useSelector((state) => state.user.profile);

  const Data = [
    {
      id: 1,
      icon: 'envelope-o',
      title: 'Email',
      content: profile.ADMIN_EMAIL,
    },
    {
      id: 2,
      icon: 'phone',
      title: 'Phone',
      content: profile.ADMIN_PHONE,
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => setModalVisible(false)} style={styles.back}>
          <Feather name="chevron-left" size={25} color="white" />
        </Pressable>
        <Text style={styles.text}>Profile</Text>
      </View>
      <View style={{ flexDirection: 'row', width: 'auto', height: 'auto', paddingLeft: 20, paddingTop: '10%', alignItems: 'center', gap: 20 }}>
        <Avatar
          size={90}
          rounded
          source={{ uri: profile.ADMIN_IMAGE }}
        />
        <View>
          <Text style={styles.textName}>{profile.ADMIN_NAME}</Text>
          <Text style={styles.textEmail}>{profile.ADMIN_EMAIL}</Text>
        </View>
      </View>
      <View style={{ paddingTop: '10%', paddingHorizontal: 40, gap: 20}}>
        {
          Data.map((item) => (
            <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <FontAwesome name={item.icon} size={20} color="#5CB15A" />
                <Text style={styles.textTitle}>{item.title}</Text>
              </View>
              <Text style={styles.textHint}>{item.content}</Text>
            </View>
          ))
        }
      </View>
    </View >
  );
};


const styles = StyleSheet.create({
  textHint: {
    color: '#9098B1',
    fontSize: 14,
  },
  textTitle: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  textEmail: {
    color: '#9098B1',
    fontWeight: '700',
    fontSize: 12,
  },
  textName: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
  },
  back: {
    backgroundColor: '#5CB15A',
    flex: 1.2,
  },

  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    paddingLeft: '7%',
    flex: 2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#5CB15A',
    paddingHorizontal: '4%',
    paddingBottom: '2%',
  },

  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
})

