import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { FlashList } from "@shopify/flash-list";

export function HomeScreen() {
  const screenWith = Dimensions.get('window').width;
  const { height, width } = Dimensions.get('window');
  const profile = useSelector((state) => state.user.profile);
  const imagesPanner = [
    {
      id: 1,
      image: require('../../assets/images/panner.jpg'),
    },
    {
      id: 2,
      image: require('../../assets/images/panner.jpg'),
    },
    {
      id: 3,
      image: require('../../assets/images/panner.jpg'),
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const RenderRecommended = ({item}) => {
    return (
      <TouchableOpacity key={item.id} style={styles.box}>
        {item.sale === '' ? null : (
          <View style={{ textAlign: 'left', backgroundColor: '#F56262', width: '25%', height: '8%', alignSelf: 'flex-start', position: 'absolute' }}>
            <Text style={{ fontSize: 12, color: 'red', textAlign: 'center', backgroundColor: '#F56262', fontWeight: '500' }}>{item.sale}</Text>
          </View>
        )}
        <Image resizeMode="cover" style={{width: 100, height: 100, marginTop: 10}} source={item.image} />
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#5CB15A' }}>Rs 2900.00</Text>
        <Text style={styles.txtNameProduct}>{item.name}</Text>
        <Text style={styles.txtkg}>{item.kg}kg</Text>
        <Text style={styles.line}></Text>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 5 }}>
          <Feather name="shopping-bag" size={20} color="#5CB15A" />
          <Text style={{ fontSize: 14, fontWeight: '500' }}>Add to cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hey {profile.name},</Text>
        <View style={styles.logo}>
          <Image style={styles.logoImage} source={require('../../assets/images/LogoDashboard.png')} />
        </View>
      </View>
      <View style={{ width: '90%', alignItems: 'center', alignSelf: 'center', marginTop: 10 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          style={styles.slideShow}
          data={imagesPanner}
          renderItem={({ item }) => <Image style={{ width: screenWith, height: 200 }} source={item.image} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
        />

        <View style={{ flexDirection: 'row', width: width, justifyContent: 'center', alignItems: 'center' }}>
          {
            imagesPanner.map((item, index) => {
              return <View key={item.id} style={{
                width: Number(currentIndex) === index ? 20 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: Number(currentIndex) === index ? '#5CB15A' : 'gray',
                marginTop: 5,
                marginHorizontal: 5,
              }}>
              </View>
            })
          }
        </View>

        <Text style={{fontWeight: '700', fontSize: 20, color: '#868889', marginTop: 20, textAlign: 'left'}}>List Recommended</Text>

        <FlatList
          data={data}
          renderItem={RenderRecommended}
          numColumns={2}
          columnWrapperStyle={{ columnGap: 10 }}
          contentContainerStyle={{ gap: 10 }}
          style={{ maxWidth: '100%', maxHeight: 'auto', marginTop: 20 }}
          keyExtractor={(item) => item.id.toString()}
          estimatedItemSize={200}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#EBEBEB',
    marginTop: 10,
  },
  txtNameProduct: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000000',
  },
  txtkg: {
    fontSize: 14,
    fontWeight: '500',
    color: '#868889',
  },
  box: {
    width: '48%',
    height: 'auto',
    alignItems: 'center',
    gap: 5,
    marginBottom: 10,
    alignSelf: 'center',
    paddingVertical: '4%',
    backgroundColor: 'white',
    borderRadius: 2,
    overflow: 'hidden',
    shadowColor: '#171717',
    elevation: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5CB15A',
    paddingHorizontal: '4%',
    paddingTop: '7%',
    paddingBottom: '2%'
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginTop: '3%'
  },
  logo: {
    borderRadius: 10,
    width: 53,
    height: 53,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logoImage: {
    width: 62,
    height: 62,
    objectFit: 'cover',
  },
})

const data = [
  {
    id: 1,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '16%',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
  {
    id: 2,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '16%',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
  {
    id: 3,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
  {
    id: 4,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '16%',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
  {
    id: 5,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
  {
    id: 6,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '16%',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
  {
    id: 7,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
  {
    id: 8,
    category: 'food',
    image: require('../../assets/images/spFood.png'),
    sale: '16%',
    brand: '123',
    name: 'Josera Mini Deluxe',
    kg: '900',
    review: '5',
  },
]