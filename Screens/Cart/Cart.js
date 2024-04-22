import { Avatar, Text } from "@rneui/themed";
import { FlatList, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ListItem, Button } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { http } from "../../Utilities/axios/http";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from 'react-redux';
import { removeFromCartAction } from '../../store/test/actionsAddproductcart';

import { updateQuantity } from '../../store/test/actionsAddproductcart';

export function Cart() {
  const navigation = useNavigation();



 

  // Lọc dữ liệu dựa trên giá trị của input search

  const cartItems = useSelector(state => state.cart.cartItems); // Giả sử reducer của giỏ hàng được lưu dưới tên "cart"
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  // const cartItems = []; // Thay [] bằng giá trị thực tế của cartItems nếu sử dụng Redux hoặc React Context
  console.log("cartItems:", cartItems); // Kiểm tra giá trị của cartItems

  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={{ justifyContent: 'flex-end' }}>
          <MaterialIcons name="arrow-back-ios" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cart</Text>
        <MaterialCommunityIcons name="cart-variant" size={25} color="white" />
      </View>
      <View style={styles.container2}>
        <ScrollView style={{ paddingBottom: 6, }} scrollEnabled={true}>
          <CartProductList cartItems={cartItems} />
        </ScrollView>
      </View>

      <View style={styles.totalContainer}>
        <View>
        </View>
        <View style={{ marginTop: 'auto', marginBottom: 15 }}>
          <View style={styles.totalRow}>
            <Text style={styles.totalSubText}>Subtotal</Text>
            <Text style={styles.totalSubText}>{totalPrice.toFixed(2)}$
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalSubText}>Promotion Price</Text>
            <Text style={styles.totalSubText}>0$</Text>
          </View>
          <View style={{ ...styles.totalRow, marginTop: 30 }}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>{totalPrice.toFixed(2)}$</Text>
          </View>

          <Button  onPress={() => navigation.navigate('Pay', { totalItems, totalPrice })} containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle} titleStyle={styles.buttonTitleStyle}>Checkout</Button>
        </View>
      </View>
    </ScrollView>

  )
}

function MinusAndPlus({ quantity, onUpdateQuantity }) {
  const [count, setCount] = useState(quantity);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    onUpdateQuantity(newCount);
  };

  const decreaseCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onUpdateQuantity(newCount);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Button onPress={increaseCount} buttonStyle={styles.buttonQuantityStyle} titleStyle={styles.buttonQuantityTitleStyle} title="+" />
      <Text>{count}</Text>
      <Button onPress={decreaseCount} buttonStyle={styles.buttonQuantityStyle} titleStyle={styles.buttonQuantityTitleStyle} title="-" />
    </View>
  );
}


function CartProductList({ cartItems }) {
  const dispatch = useDispatch();

  const handleDeleteItem = (productId) => {
    dispatch(removeFromCartAction(productId)); // Gọi action xóa sản phẩm với productId
  };
  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity(productId, newQuantity));
  };
  const renderItem = ({ item }) => {
    return (
      <ListItem.Swipeable
        rightStyle={{ marginRight: 15 }}
        leftWidth={0}
        rightWidth={60}
        rightContent={(reset) => (
          <Button
            onPress={() => {
              handleDeleteItem(item.productId, console.log(item.productId)); // Gọi hàm handleDeleteItem với productId của sản phẩm
              reset(); // Reset swipeable sau khi xử lý xóa
            }}
            icon={() => <MaterialCommunityIcons name="trash-can-outline" size={28} color="white" />}
            buttonStyle={styles.buttonSwipeable}
          />
        )}
        containerStyle={styles.cartItem}
      >
        <Avatar containerStyle={{ margin: 0 }} size={42} avatarStyle={styles.avatarStyle} source={{ uri: item.image }} />
        <ListItem.Content style={styles.itemContent}>
          <ListItem.Subtitle style={styles.cartSubtitleTop}>{item.price}$</ListItem.Subtitle>
          <ListItem.Title style={styles.cartTitle} >{item.name}</ListItem.Title>
          {/* Hiển thị thông tin sản phẩm khác tại đây */}
        </ListItem.Content>
        <MinusAndPlus quantity={item.quantity} onUpdateQuantity={(newQuantity) => handleUpdateQuantity(item.productId, newQuantity)} />
      </ListItem.Swipeable>
    );
  };


  return (
    <FlatList
      style={{ paddingTop: 24 }}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      // scrollEnabled={true}
      keyExtractor={(item) => item.productId}
      data={cartItems}
      renderItem={renderItem}
    // showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  container2: {
    flex: 1,
    height: 400, // Chiều cao cố định
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#5CB15A',
    paddingHorizontal: '4%',
    paddingTop: '10%',
    paddingBottom: '2%',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  headerText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  totalContainer: {
    marginTop: 6,
    paddingTop: 10,
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 700
  },
  totalSubText: {
    fontSize: 16,
    fontWeight: 500
  },
  cartItem: {
    elevation: 8,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    shadowColor: 'black',
    shadowOffset: 0,
    shadowOpacity: 0.2,
    marginBottom: 4
  },
  cartTitle: {
    fontWeight: 600,
    fontSize: 16
  },
  cartSubtitleTop: {
    fontSize: 12,
    fontWeight: 500,
    color: '#5CB15A'
  },
  cartSubtitleBottom: {
    fontSize: 12,
    fontWeight: 500,
    color: '#868889'
  },
  buttonContainerStyle: {
    marginTop: 8,
    elevation: 4,
  },
  buttonStyle: {
    backgroundColor: '#5CB15A',
    paddingVertical: 16,
    borderRadius: 8
  },
  buttonTitleStyle: {
    fontSize: 20,
    fontWeight: 600
  },
  inputQuantityStyle: {
    textAlign: 'left',
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  buttonQuantityStyle: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  buttonQuantityTitleStyle: {
    color: '#5CB15A',
  },
  inputQuantityContainerStyle: {
    margin: 0,
    padding: 0,
    height: 2
  },
  buttonSwipeable: { height: '97%', borderRadius: 8, marginLeft: 7, backgroundColor: '#E54D4D' }
})
