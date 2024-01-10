import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { ButtonGroup } from '@rneui/themed';

const Discover = () => {

  const listRenderItem = ({item}) => {

  }

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather style={{ color: '#FFFFFF', paddingLeft: 10, }} name="chevron-left" size={25} />
      </View>

      <Text style={styles.hello}>Hello, How may I help you ?</Text>

      <ButtonGroup
        innerBorderStyle={{ width: 0 }}
        containerStyle={{ width: 'auto', height: 50, borderWidth: 0, marginTop: 20 }}
        buttonContainerStyle={{ width: 'auto', height: 'auto', alignItems: 'center' }}
        buttonStyle={{ backgroundColor: '#D0D7D5', borderRadius: 15, width: 50 }}
        selectedButtonStyle={{ backgroundColor: '#5AB197' }}
        buttons={[
          <View>
            <Image source={require('../../assets/veterinary.png')} />
          </View>,
          <View>
            <Image source={require('../../assets/grooming.png')} />
          </View>,
          <View>
            <Image source={require('../../assets/boarding.png')} />
          </View>,
        ]}
        selectedIndex={selectedIndex}
        onPress={setSelectedIndex}
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 55 }}>
        <Text style={styles.txtButton}>Veterinary</Text>
        <Text style={styles.txtButton}>Grooming</Text>
        <Text style={styles.txtButton}>Boarding</Text>
      </View>
      <View style={styles.line}></View>
      <View style={{ flexDirection: 'row', justifyContent:'space-between', marginHorizontal: '10%', marginTop: '3%', alignItems:'center'}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>Nearby  Veterinarian</Text>
        <Text style={{color: '#A6A6A6', fontSize: 15, fontWeight: '400'}}>See all</Text>
      </View>
    </View>
  )
}

export default Discover

const styles = StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: '#000000',
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },

  txtButton: {
    color: '#A6A6A6',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.50,
    alignItems: 'center',
  },
  buttonForm: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 70,
    paddingHorizontal: 30,
    paddingTop: 15,
  },

  button: {
    width: 55,
    height: 55,
    alignItems: 'center',
    backgroundColor: '#D0D7D5',
    justifyContent: 'center',
    borderRadius: 15,
  },

  hello: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
    paddingLeft: 30,
    paddingTop: 30,
  },

  header: {
    backgroundColor: '#5CB15A',
    width: '100%',
    height: '8%',
    justifyContent: 'center',
  },

  container: {
    width: 'auto',
    height: '100%',
  }
})

const list = [
  {
    id: 1,
    image: require('../../assets/images/'),
    name: 'Dr. Nambuvan',
    nameClinic: 'Bachelor of veterinary science',
    rate: 5,
    experience: 10,
    status: 'open',
    kilometer: '2.5',
    price: 100,
  },
  {
    id: 1,
    image: require('../../assets/images/'),
    name: 'Dr. Nambuvan',
    nameClinic: 'Bachelor of veterinary science',
    rate: 5,
    status: 'closed',
    experience: 10,
    kilometer: '2.5',
    price: 100,
  },
]