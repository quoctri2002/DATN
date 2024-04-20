import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
// import { addres } from '../../store/test/actionsAddproductcart';
import { Paymentmethod } from './Paymentmethod'; // Import Paymentmethod component

export function Pay() {
  const cartItems = useSelector(state => {
    // Tính toán totalPrice cho mỗi sản phẩm trong cartItems
    return state.cart.cartItems.map(item => ({
      ...item,
      totalPrice: item.price * item.quantity
    }));
  });
  const addressData = useSelector(state => state.cart.addressData);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Cash');
  const [selectedPaymentMethodIconOrImage, setSelectedPaymentMethodIconOrImage] = useState('cash');
  const [selectedPaymentMethod1, setSelectedPaymentMethod1] = useState(2);
  const [note, setNote] = useState('');
  const profile = useSelector((state) => state.user.profile.ADMIN_ID); // chuyển qua id người dùng
  console.log("totalPrice:", totalPrice);
  console.log(addressData.ADDRESS_ID);
  console.log(cartItems);
  // console.log(profile);
  console.log("selectedPaymentMethod:", selectedPaymentMethod1)

  const handlePaymentMethodSelect = (paymentMethodId) => {
    // Dựa vào mã id, cập nhật thông tin phương thức thanh toán
    if (paymentMethodId === 1) {
      setSelectedPaymentMethod('Momo');
      setSelectedPaymentMethodIconOrImage(require('../../assets/momo.png')); // Dùng require cho hình ảnh
      setSelectedPaymentMethod1(paymentMethodId)
    } else if (paymentMethodId === 2) {
      setSelectedPaymentMethod1(paymentMethodId)
      setSelectedPaymentMethod('Cash');
      setSelectedPaymentMethodIconOrImage('cash')
    }
  };

  const handleOrderNow = async () => {
    try {
      // Gửi yêu cầu POST đến API testapiaddbill.php với dữ liệu cần gửi
      const response = await fetch('http://206.189.45.141/api/addorder.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          billStatus: selectedPaymentMethod1,
          billPaymentMethod: selectedPaymentMethod1,
          billNote: note,
          addressId: addressData.ADDRESS_ID,
          customerId: profile,
          products: cartItems // Lấy danh sách productId từ cartItems
        }),
      });
  
      // Kiểm tra nếu phản hồi từ server không thành công, ném ra một lỗi
      if (!response.ok) {
        throw new Error('Failed to send data to the server');
      }
  
      // Chuyển hướng sau khi đặt hàng thành công
      console.log(response)
      navigation.navigate('Shop');
    } catch (error) {
      console.error('Error ordering:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.back}>
          <Feather name="chevron-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.text}>Payment</Text>
      </View>
      <ScrollView style={styles.boxInput}>
        <Text style={styles.txtTitle1}>Client Information</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Address')} style={{ marginTop: 10, }}>
            <View style={styles.containeraddress}>
              <View style={styles.containeraddress2}>
                <Feather name="location" size={20} color="red" />
                <Text style={{ marginLeft: 5, }}>Delivery Address</Text>
              </View>
              <Feather name="chevron-right" size={20} color="red" style={{ position: 'absolute', right: 0, top: 15, }} />
              {addressData ? (
                <Text style={{ marginLeft: 15, }}>{addressData.ADDRESS_DETAIL}</Text>
              ) : (
                <Text style={{ marginLeft: 15, }}>Full Address</Text>
              )}
            </View>
          </TouchableOpacity>
          {addressData ? (
            <View>
              <Text style={styles.txtTitle}>Full Name</Text>
              <Input containerStyle={styles.input} disabled value={addressData.ADDRESS_NAME}/>
              <Text style={styles.txtTitle}>Phone</Text>
              <Input containerStyle={styles.input} disabled value={addressData.ADDRESS_PHONE.toString()}/>
              <Text style={styles.txtTitle}>Note</Text>
              <Input containerStyle={styles.input} value={note} onChangeText={text => setNote(text)}/>
            </View>
          ) : (
            <View>
              <Text style={styles.txtTitle}>Full Name</Text>
              <Input containerStyle={styles.input} disabled />
              <Text style={styles.txtTitle}>Phone</Text>
              <Input containerStyle={styles.input} disabled />
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.boxTotal}>
        <View style={styles.content}>
          <Text style={styles.txtTitle2}>Total Item</Text>
          <Text style={styles.txtTotal2}>{totalItems}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.txtTitle2}>Total Price</Text>
          <Text style={styles.txtTotal2}>{totalPrice.toFixed(2)} $</Text>
        </View>
      </View>
      <Text style={styles.txtTitle2a}>Payment Details</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Paymentmethod', { onPaymentMethodSelect: handlePaymentMethodSelect })} style={styles.paymentmethod}>
        <View style={styles.paymentmethod1}>
          <View style={styles.paymentmethod2}>
            {typeof selectedPaymentMethodIconOrImage === 'string' ? (
              <Icon name={selectedPaymentMethodIconOrImage} color="#4F8EF7" size={27} /> // Icon
            ) : (
              <Image source={selectedPaymentMethodIconOrImage} style={{ width: 35, height: 20, marginLeft: 2 }} /> // Hình ảnh
            )}
            <Text style={styles.txtTitle2b}>{selectedPaymentMethod}</Text>
          </View>
          <Feather name="chevron-right" size={16} color="black" />
        </View>
      </TouchableOpacity>
      <Button
        onPress={handleOrderNow}
        containerStyle={styles.buttonContainerStyle}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitleStyle}>
        Order Now
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainerStyle: {
    marginTop: '3%',
    elevation: 4,
    width: '85%',
  },
  containeraddress: {
    borderRadius: 6,
    flexDirection: 'column',
  },
  containeraddress2: {
    flexDirection: 'row',
  },
  buttonStyle: {
    backgroundColor: '#5CB15A',
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttonTitleStyle: {
    fontSize: 20,
    fontWeight: 600,
  },
  txtTotal2: {
    color: '#707070',
    fontWeight: '500',
    fontSize: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxTotal: {
    marginTop: 30,
    paddingHorizontal: 30,
    width: '85%',
    height: 'auto',
    borderRadius: 20,
    backgroundColor: '#ECECEC',
    gap: 20,
    paddingVertical: '3%',
    alignSelf: 'center',
    elevation: 4,
  },
  paymentmethod: {
    width: '100%',
    paddingHorizontal: 30,
    alignSelf: 'flex-start',
  },
  paymentmethod1: {
    marginTop: 6,
    height: 25,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  paymentmethod2: {
    alignItems: 'center',
    height: '100%',
    flexDirection: 'row',
  },
  boxInput: {
    backgroundColor: 'red',
    marginTop: 30,
    paddingHorizontal: 30,
    width: '80%',
    height: 'auto',
    paddingTop: 10,
    borderRadius: 20,
    backgroundColor: '#ECECEC',
    elevation: 4,
  },
  input: {
    alignItems: 'center',
    height: 'auto',
  },
  txtTitle: {
    marginLeft: 10,
    marginTop: 20,
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  txtTitle1: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  txtTitle2: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  txtTitle2a: {
    paddingHorizontal: 30,
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  txtTitle2b: {
    marginLeft: 6,
    fontSize: 18,
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
    paddingTop: '10%',
    paddingBottom: '2%',
    alignSelf: 'center',
    width: '100%',
  },
  container: {
    flex: 0.95,
    height: 'auto',
    width: '100%',
    alignItems: 'center',
  },
});
