import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image, Button, Input } from '@rneui/base';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React from 'react';

export function Register  ()  {
  return (
    <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Input
            placeholder="Email address"
            style={styles.input}
            leftIcon={<MaterialCommunityIcons style={{ color: '#A6A6A6', width: '100%' }} name="email-outline" size={25} />}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            placeholder="Password"
            style={styles.input}
            leftIcon={<Feather style={{ color: '#A6A6A6' }} name="lock" size={25} />}
            inputContainerStyle={styles.inputContainer}
          />
          <Input
            placeholder="Password Again"
            style={styles.input}
            leftIcon={<Feather style={{ color: '#A6A6A6' }} name="lock" size={25} />}
            inputContainerStyle={styles.inputContainer}
          />

          <Button buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 8 }}>Register</Button>

          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
            <Text style={{ marginTop: 24, textAlign: 'center', marginBottom: 40, fontSize: 18, fontWeight: '400', color: '#747070' }}>
              Have a account?
            </Text>
            <Pressable>
              <Text style={{ marginTop: 24, textAlign: 'center', marginBottom: 40, fontSize: 19, fontWeight: '600', color: '#5CB15A' }}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>All Rights Reserved to Pixel Posse - 2022</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    width: '100%',
    position: 'relative',
    marginTop: -30,
  },
  button: {
    color: 'white',
    backgroundColor: '#5CB15A',
  },
  inputContainer: {
    backgroundColor: '#D4D4D4',
    borderRadius: 8,
    borderWidth: 0,
    paddingHorizontal: 20,
    color: '#A6A6A6',
    width: '100%',
  },
  input: {
    width: '100%',
    paddingLeft: 10,
    backgroundColor: '#D4D4D4',
    borderRadius: 8,
    color: '#A6A6A6',
  },
  bottom: {
    backgroundColor: '#5CB15A',
    width: '100%',
    paddingVertical: 10,
  },
  logo: {
    width: 240,
    height: 240,
  },
});
