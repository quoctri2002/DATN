import { Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Image, Button, Input } from '@rneui/base';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export function ForgotPassword(navigation) {
  navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const [isSendOTP, setIsSendOTP] = useState(false);
  const [isVerifyOTP, setIsVerifyOTP] = useState(false);

  async function handleSendOTP() {
    if (email === '') {
      return ToastAndroid.showWithGravity(
        'Please enter email',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }

    const response = await fetch('http://206.189.45.141/api/auth/forgotpassword.php', {
      method: 'POST',
      body: JSON.stringify({ email })
    });

    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.status === true) {
      ToastAndroid.showWithGravity(
        'Token sent to your email',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsSendOTP(true);
    } else {
      ToastAndroid.showWithGravity(
        'Error, please try again',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  }

  async function handleVerifyOTP() {
    const response = await fetch(`http://206.189.45.141/api/auth/verify-token.php?email=${email}&token=${token.trim()}`);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.status === true) {
      ToastAndroid.showWithGravity(
        'Token verified. You can update your password now!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      setIsVerifyOTP(true);
    } else {
      ToastAndroid.showWithGravity(
        'Error, please try again',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  }

  async function handleResetPassword() {
    if (password !== passwordAgain) {
      return ToastAndroid.showWithGravity(
        'Passwords do not match',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
    const response = await fetch('http://206.189.45.141/api/auth/update-password.php', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.status === true) {
      ToastAndroid.showWithGravity(
        'Reset password successfully',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
      navigation.navigate('Login');
    } else {
      ToastAndroid.showWithGravity(
        'Error, please try again',
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  }


  return (<View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
    <View style={styles.container}>
      <View style={{ width: '100%' }}>
        <Input
          placeholder="Email address"
          style={styles.input}
          value={email}
          disabled={isVerifyOTP}
          onChangeText={setEmail}
          leftIcon={<MaterialCommunityIcons style={{ color: '#A6A6A6', width: '100%' }} name="email-outline"
                                            size={25} />}
          inputContainerStyle={styles.inputContainer}
        />

        <Input
          placeholder="Token"
          keyboardType="numeric"
          value={token}
          disabled={isVerifyOTP}
          onChangeText={setToken}
          style={styles.input}
          leftIcon={<MaterialCommunityIcons style={{ color: '#A6A6A6', width: '100%' }} name="form-textbox-password"
                                            size={25} />}
          inputContainerStyle={styles.inputContainer}
        />
        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Button onPress={handleSendOTP}
                  disabled={isSendOTP}
                  style={{
                    justifyContent: 'center',
                    backgroundColor: '#5CB15A',
                    width: 124,
                    height: 48,
                    borderRadius: 8,
                    paddingHorizontal: 20,
                    paddingVertical: 10
                  }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>Send Token</Text>
          </Button>
          <Button onPress={handleVerifyOTP}
                  disabled={!isSendOTP}
                  style={{
                    justifyContent: 'center',
                    backgroundColor: '#5CB15A',
                    width: 124,
                    height: 48,
                    borderRadius: 8,
                    paddingHorizontal: 20,
                    paddingVertical: 10
                  }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>Verify Token</Text>
          </Button>
        </View>
        <Input
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          leftIcon={<Feather style={{ color: '#A6A6A6' }} name="lock" size={25} />}
          inputContainerStyle={styles.inputContainer}
        />
        <Input
          placeholder="Password Again"
          style={styles.input}
          value={passwordAgain}
          onChangeText={setPasswordAgain}
          leftIcon={<Feather style={{ color: '#A6A6A6' }} name="lock" size={25} />}
          inputContainerStyle={styles.inputContainer}
        />

        <Button disabled={!isVerifyOTP} onPress={handleResetPassword}
                buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 8 }}>Reset Password</Button>

        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
          <Text style={{
            marginTop: 24, textAlign: 'center', marginBottom: 40, fontSize: 18, fontWeight: '400', color: '#747070'
          }}>
            Have a account?
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={{
              marginTop: 24, textAlign: 'center', marginBottom: 40, fontSize: 19, fontWeight: '600', color: '#5CB15A'
            }}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
    <View style={styles.bottom}>
      <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>All Rights Reserved to Pixel Posse -
        2022</Text>
    </View>
  </View>);
}


const styles = StyleSheet.create({
  container: {
    flex: 1, paddingHorizontal: 40, width: '100%', position: 'relative', marginTop: -30
  }, button: {
    color: 'white', backgroundColor: '#5CB15A'
  }, inputContainer: {
    backgroundColor: '#D4D4D4', borderRadius: 8, borderWidth: 0, paddingHorizontal: 20, color: '#A6A6A6', width: '100%'
  }, input: {
    width: '100%', paddingLeft: 10, backgroundColor: '#D4D4D4', borderRadius: 8, color: '#A6A6A6'
  }, bottom: {
    backgroundColor: '#5CB15A', width: '100%', paddingVertical: 10
  }, logo: {
    width: 240, height: 240
  }
});
