import { Text, View, StyleSheet } from 'react-native';
import { Button, Image, Input } from '@rneui/base';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../store/thunkApis';
import { useNavigation } from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispath = useDispatch();

  const handleLogin = () => {
    if (email === '' && password === '') return;
    dispath(getProfile({ email, password }));
  };
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
            onChangeText={setEmail}
            value={email}
          />

          <Input
            placeholder="Password"
            style={styles.input}
            leftIcon={<Feather style={{ color: '#A6A6A6' }} name="lock" size={25} />}
            inputContainerStyle={styles.inputContainer}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />

          <Text style={{ color: '#5CB15A', fontSize: 20, textAlign: 'right', marginBottom: 18 }}>Forgot Password?</Text>

          <Button onPress={handleLogin} buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 8 }}>
            Login
          </Button>
          <View>
            <Text style={{ marginTop: 24, textAlign: 'center', marginBottom: 40, fontSize: 20, fontWeight: '400', color: '#747070' }}>
              or connect with
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', gap: 16 }}>
          <Button onPress={() => navigation.navigate('Register')} buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 8 }}>
            Register
          </Button>
          <Button buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 8 }}>Login with Google</Button>
          <Button buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 8 }}>Login with Facebook</Button>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>All Rights Reserved to Pixel Posse - 2022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    width: '100%',
    position: 'relative',
    marginTop: -20,
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
