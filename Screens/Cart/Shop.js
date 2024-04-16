import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { SearchBar, ButtonGroup } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProductList } from '../../store/thunkApis';
import { useNavigation } from '@react-navigation/native';
import { addToCartAction } from '../../store/test/actionsAddproductcart';

export const Shop = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [id, setId] = React.useState(1);
  const [listCategory, setListCategory] = React.useState([]);
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products);

  useEffect(() => {
    async function fetchProductCategories() {
      try {
        const response = await fetch('http://206.189.45.141/api/Appgetlistproductcategory.php');
        const resJson = await response.json();
        console.log(resJson.data);
        setListCategory(resJson.data);
      } catch (error) {
        console.error('Error fetching product categories:', error);
      }
    }
    fetchProductCategories();
  }, []);

  useEffect(() => {
    dispatch(getProductList(id));
  }, [id]);

  function handleSetSelectedIndex(props) {
    if (listCategory.length > props) {
      setSelectedIndex(props);
      const categoryId = listCategory[props].PRODUCTCATEGORY_ID;
      setId(categoryId);
    }
  }
  const addToCart = (product) => {
    const { product_id, product_name, image_link, product_price } = product;
    dispatch(addToCartAction({ productId: product_id, product_name, image_link, product_price }));
    console.log('Add to cart:', product);
    navigation.navigate('Cart');
  };
  const limitProduct = productsList.slice(0, 3);
  const RenderRecommended = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail',
        {
          id: item.product_id
        }
      )} style={styles.box}>
        <Image resizeMode="cover" style={{
          width: '70%',
          height: 100,
          borderRadius: 20,
          overflow: 'hidden',
        }} source={{ uri: item.image_link }} />
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#5CB15A' }}>{item.product_price}</Text>
        <Text style={styles.txtNameProduct}>{item.product_name}</Text>
        <Text style={styles.line}></Text>
        <TouchableOpacity onPress={() => addToCart(item)} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 5 }} >
          <Feather name="shopping-bag" size={20} color="#5CB15A" />
          <Text style={{ fontSize: 14, fontWeight: '500' }}>Add to cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const RenderTopSelling = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.box2}>
        <Image resizeMode="cover" source={item.image} style={{ width: '20%', height: 70 }} />
        <View style={{ paddingRight: '15%', gap: 2 }}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#5CB15A' }}>{item.brand}</Text>
          <Text style={styles.txtNameProduct}>{item.name}</Text>
          <Text style={styles.txtkg}>{item.kg}kg</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#5CB15AB2',
            borderRadius: 20,
            width: 35,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Feather name="shopping-bag" size={20} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ height: 'auto', paddingBottom: 30 }}
        scrollEnabled={true}
        horizontal={false}
        howsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}
        scrollEventThrottle={16}>
        <View style={styles.header}>
          <Feather style={{ color: 'white' }} name="chevron-left" size={25} />
          <Text style={styles.txtTitle}>Shop</Text>
          <Pressable onPress={() => navigation.navigate('Cart')} style={{ paddingRight: 20 }}>
            <Feather style={{ color: 'white' }} name="shopping-cart" size={25} />
          </Pressable>
        </View>
        <View style={{ width: '90%', height: '100%', alignSelf: 'center' }}>
          <SearchBar
            placeholder="Search keywords..."
            lightTheme
            containerStyle={{
              backgroundColor: '#F4F5F9',
              width: '100%',
              height: 'auto',
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 8,
              shadowColor: '#00000040',
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 5,
              color: '#868889',
            }}
            platform="android"
          />

          <ButtonGroup
            innerBorderStyle={{ width: 0 }}
            containerStyle={{ height: 70, borderWidth: 0, marginTop: 20 }}
            buttonContainerStyle={{ width: 'auto', alignItems: 'center' }}
            buttonStyle={{ backgroundColor: '#D0D7D5', borderRadius: 15, width: 120 }}
            selectedButtonStyle={{ backgroundColor: '#5CB15A' }}
            buttons={Array.isArray(listCategory) ? listCategory.map((item, index) => (
              <View key={item.PRODUCTCATEGORY_ID} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.txtButton}>{item.PRODUCTCATEGORY_NAME}</Text>
              </View>
            )) : []}
            selectedIndex={selectedIndex}
            onPress={(index) => handleSetSelectedIndex(index)}
          />

          {/* <FlatList
            data={listCategory}
            style={{
              width: '100%',
              height: 70,
              borderWidth: 0,
              marginTop: 20,
              backgroundColor: 'red',
            }}
            renderItem={({ item }) => (
              <Pressable onPress={() => setId(item.PRODUCTCATEGORY_ID)}>
              <View style={{ backgroundColor: '#D0D7D5', borderRadius: 15, width: 70, height: 70}}>
                <Text style={styles.txtButton}>{item.PRODUCTCATEGORY_NAME}</Text>
              </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.PRODUCTCATEGORY_ID}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          /> */}

          <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginTop: 20 }}>Recommended Food</Text>
          <FlatList
            data={productsList}
            renderItem={RenderRecommended}
            numColumns={2}
            columnWrapperStyle={{ columnGap: 10 }}
            contentContainerStyle={{ gap: 10 }}
            style={{ maxWidth: '100%', maxHeight: 'auto', marginTop: 20 }}
            keyExtractor={(index) => index.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />

          <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginTop: 20 }}>Top Selling </Text>
          <FlatList
            data={limitProduct}
            renderItem={RenderTopSelling}
            contentContainerStyle={{ gap: 20, paddingBottom: 5 }}
            style={{ marginTop: 20 }}
            keyExtractor={(index) => index.id}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box2: {
    flexDirection: 'row',
    width: '98%',
    height: 'auto',
    alignSelf: 'center',
    gap: 10,
    justifyContent: 'space-between',
    padding: '5%',
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#171717',
    elevation: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
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
    borderRadius: 8,
  },

  txtButton: {
    color: '#5F5F63',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 19.5,
    textAlign: 'center',
  },
  txtTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: '#5CB15A',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingTop: '7%',
    paddingBottom: '2%',
  },
  container: {
    flex: 1,
    height: 'auto',
    width: '100%',
  },
});


// const Data = [
//   {
//     id: 1,
//     icon: require('../../assets/images/shop_food.png'),
//     name: 'Food',
//     category: 'food',
//   },
//   {
//     id: 2,
//     icon: require('../../assets/images/shop_veterinarian.png'),
//     name: 'Vet Items',
//     category: 'vetItem',
//   },
//   {
//     id: 3,
//     icon: require('../../assets/images/shop_accessories.png'),
//     name: 'Accessories',
//     category: 'accessories',
//   },
//   {
//     id: 4,
//     icon: require('../../assets/images/shop_device.png'),
//     name: 'IOT Device',
//     category: 'devices',
//   },
// ];
