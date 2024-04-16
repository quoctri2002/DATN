import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { rows } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

export function Pay() {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(1);
  console.log(isSelected);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart'), setSelection(1);
          }}
          style={styles.back}>
          <Feather name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>Payment</Text>
      </View>
      <View style={{ flexDirection: 'row', width: '80%', gap: 20, justifyContent: 'center' }}>
        <Button
          onPress={() => setSelection(2)}
          containerStyle={styles.buttonCategoryContainerStyle}
          buttonStyle={isSelected === 2 ? styles.buttonClickedStyle : styles.buttonStyle}
          titleStyle={styles.buttonTitleCategoryStyle}>
          Payment on delivery
        </Button>
        <Button
          onPress={() => setSelection(3)}
          containerStyle={styles.buttonCategoryContainerStyle}
          buttonStyle={isSelected === 3 ? styles.buttonClickedStyle : styles.buttonStyle}
          titleStyle={styles.buttonTitleCategoryStyle}>
          Payment with Card
        </Button>
      </View>
      {isSelected !== 1 && (
        <View style={{ width: '80%', justifyContent: 'center', marginTop: 10 }}>
          <Text style={styles.txtTitle}>Full name</Text>
          <Input style={styles.input} inputContainerStyle={styles.inputContainer}></Input>
          <Text style={styles.txtTitle}>Adress</Text>
          <Input style={styles.input} inputContainerStyle={styles.inputContainer}></Input>
          <Text style={styles.txtTitle}>Phone Number</Text>
          <Input style={styles.input} inputContainerStyle={styles.inputContainer}></Input>
          {isSelected === 3 && (
            <View>
              <Text style={styles.txtTitle}>Name on Card</Text>
              <Input style={styles.input} inputContainerStyle={styles.inputContainer}></Input>
              <Text style={styles.txtTitle}>Card Number</Text>
              <Input style={styles.input} inputContainerStyle={styles.inputContainer}></Input>
            </View>
          )}
          <Button
            onPress={() => navigation.navigate('Shop')}
            containerStyle={styles.buttonContainerStyle}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}>
            Pay Now(2 item) 465$
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#C4C4C4',
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
    elevation: 5,
  },
  buttonCategoryContainerStyle: {
    marginTop: '10%',
    elevation: 4,
    width: '50%',
  },
  buttonContainerStyle: {
    marginTop: '10%',
    elevation: 4,
    width: '100%',
  },
  buttonClickedStyle: {
    backgroundColor: 'grey',
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonStyle: {
    backgroundColor: '#5CB15A',
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonTitleCategoryStyle: {
    fontSize: 14,
    fontWeight: 400,
  },
  buttonTitleStyle: {
    fontSize: 18,
    fontWeight: 600,
  },

  input: {
    alignItems: 'center',
    height: 'auto',
  },
  txtTitle: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 10,
    marginVertical: 3,
  },
  back: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingBottom: 5,
    paddingLeft: 20,
  },

  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 'auto',
    width: '90%',
    textAlign: 'center',
    marginLeft: '6%',
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#5CB15A',
    paddingHorizontal: '4%',
    paddingTop: '6%',
    paddingBottom: '2%',
    alignSelf: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
