import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather, Ionicons } from '@expo/vector-icons';
import { ButtonGroup } from '@rneui/themed';

const Discover = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
      <ScrollView style={styles.container}>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '10%', marginTop: '3%', alignItems: 'center' }}>
          {selectedIndex === 0 ? <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Nearby  Veterinarian</Text> : selectedIndex === 1 ? <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Nearby Grooming Room</Text> : <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Nearby Boarding</Text>}

          <Text style={{ color: '#A6A6A6', fontSize: 15, fontWeight: '400' }}>See all</Text>
        </View>
        {
          list.map((item) => (
            <TouchableOpacity key={item.id} style={styles.itemBox}>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Image resizeMode='cover' style={{ width: '30%', height: '100%', borderRadius: 15 }} source={item.image} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{item.name}</Text>
                  {
                    selectedIndex === 0 ? <Text style={styles.txtItem}>{item.nameClinic}</Text> : null
                  }

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500', marginLeft: 10 }}>{item.rate}</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                {
                  selectedIndex === 0 ? <Text style={styles.txtItem}>{item.experience} years of experience</Text> : <Text style={{ color: '#5CB15A', fontSize: 16, fontWeight: '400' }}>{item.status}</Text>
                }
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  <Ionicons name="location-sharp" size={20} color="#A6A6A6" />
                  <Text style={styles.txtItem}>{item.kilometer} km</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  <Ionicons name="pricetag" size={20} color="#A6A6A6" />
                  <Text style={styles.txtItem}>{item.price}$</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: 5, marginTop: 15 }}>
                <Ionicons name="time-sharp" size={20} color="#A6A6A6" />
                <Text style={styles.txtItem}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          ))
        }

        <View style={styles.line}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '10%', marginTop: '3%', alignItems: 'center', gap: 5}}>
          {selectedIndex === 0 ? <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Recommended Veterinarian</Text> : selectedIndex === 1 ? <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Recommended Grooming Room</Text> : <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>Recommended Boarding</Text>}

          <Text style={{ color: '#A6A6A6', fontSize: 15, fontWeight: '400' }}>See all</Text>
        </View>
        {
          list.map((item) => (
            <TouchableOpacity key={item.id} style={styles.itemBox}>
              <View style={{ flexDirection: 'row', gap: 5 }}>
                <Image resizeMode='cover' style={{ width: '30%', height: '100%', borderRadius: 15 }} source={item.image} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>{item.name}</Text>
                  {
                    selectedIndex === 0 ? <Text style={styles.txtItem}>{item.nameClinic}</Text> : null
                  }

                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Feather name="star" size={20} color="#FFD700" />
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500', marginLeft: 10 }}>{item.rate}</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                {
                  selectedIndex === 0 ? <Text style={styles.txtItem}>{item.experience} years of experience</Text> : <Text style={{ color: '#5CB15A', fontSize: 16, fontWeight: '400' }}>{item.status}</Text>
                }
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  <Ionicons name="location-sharp" size={20} color="#A6A6A6" />
                  <Text style={styles.txtItem}>{item.kilometer} km</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                  <Ionicons name="pricetag" size={20} color="#A6A6A6" />
                  <Text style={styles.txtItem}>{item.price}$</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: 5, marginTop: 15 }}>
                <Ionicons name="time-sharp" size={20} color="#A6A6A6" />
                <Text style={styles.txtItem}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
  )
}

export default Discover

const styles = StyleSheet.create({
  txtItem: {
    color: '#A6A6A6',
    fontSize: 12,
    fontWeight: '400'
  },

  itemBox: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: '6%',
    paddingVertical: '4%',
    backgroundColor: 'white',
    borderRadius: 26,
    borderStyle: 'solid',
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
  },

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
    image: require('../../assets/images/docter1.png'),
    name: 'Dr. Nambuvan',
    nameClinic: 'Bachelor of veterinary science',
    rate: 5.0,
    experience: 10,
    status: 'open',
    kilometer: '2.5',
    price: 100,
    date: 'Monday - Friday at 8.00 am - 5.00pm',
  },
  {
    id: 2,
    image: require('../../assets/images/docter1.png'),
    name: 'Dr. Sambuvan',
    nameClinic: 'Veterinary Dentist ',
    rate: 4.0,
    status: 'closed',
    experience: 4,
    kilometer: '4',
    price: 100,
    date: 'Monday - Friday at 8.00 am - 5.00pm',
  },
]