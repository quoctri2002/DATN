import { Avatar, Text } from "@rneui/themed";
import { FlatList, ScrollView, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ListItem, Button } from '@rneui/themed';
import { useEffect, useState } from "react";
import { http } from "../../Utilities/axios/http";
import { useNavigation } from "@react-navigation/native";

export function Cart() {


  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={{ justifyContent: 'flex-end' }}>
          <MaterialIcons name="arrow-back-ios" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cart</Text>
        <MaterialCommunityIcons name="cart-variant" size={25} color="white" />
      </View>

      <CartProductList />

      <View style={styles.totalContainer}>
        <View style={{ paddingBottom: 80 }}>
        </View>
        <View style={{ marginTop: 'auto', marginBottom: 15 }}>
          <View style={styles.totalRow}>
            <Text style={styles.totalSubText}>Subtotal</Text>
            <Text style={styles.totalSubText}>53,340.00$
            </Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalSubText}>Shipping charges</Text>
            <Text style={styles.totalSubText}>520.00$</Text>
          </View>
          <View style={{ ...styles.totalRow, marginTop: 30 }}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>53,860$</Text>
          </View>

          <Button onPress={() => navigation.navigate('Pay')} containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle} titleStyle={styles.buttonTitleStyle}>Checkout</Button>
        </View>
      </View>

    </ScrollView>
  )
}

function MinusAndPlus() {

  const [count, setCount] = useState(1);
  const increase = () => setCount(count+1) 
  const decrease = () => count > 1 && setCount(count-1) 

  return (
    <View style={{ gap: 4, alignSelf: 'center' }}>
      <Button onPress={increase} buttonStyle={styles.buttonQuantityStyle} titleStyle={styles.buttonQuantityTitleStyle} title="+" />
      <ListItem.Input onChangeText={setCount} inputContainerStyle={styles.inputQuantityContainerStyle} inputStyle={styles.inputQuantityStyle} inputMode="numeric" value={count.toString()} />
      <Button onPress={decrease} buttonStyle={styles.buttonQuantityStyle} titleStyle={styles.buttonQuantityTitleStyle} title="-" />
    </View>
  )
}

function CartProductList() {
  const renderItem = () => (
    <ListItem.Swipeable
      rightStyle={{ marginRight: 15 }}
      leftWidth={0}
      rightWidth={60}
      rightContent={(reset) => (
        <Button
          onPress={() => reset()}
          icon={() => <MaterialCommunityIcons name="trash-can-outline" size={28} color="white" />}
          buttonStyle={styles.buttonSwipeable}
        />)}
      containerStyle={styles.cartItem}
    >
      <Avatar containerStyle={{ margin: 0 }} size={42} avatarStyle={styles.avatarStyle} source={{ uri: "https://images.unsplash.com/photo-1707343848655-a196bfe88861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" }} />
      <ListItem.Content style={styles.itemContent}>
        <ListItem.Subtitle style={styles.cartSubtitleTop}>7850.00$ x 3</ListItem.Subtitle>
        <ListItem.Title style={styles.cartTitle} >Royal Canin Rottweiler Puppy</ListItem.Title>
        <ListItem.Subtitle style={styles.cartSubtitleBottom}>3kg</ListItem.Subtitle>
      </ListItem.Content>
      <MinusAndPlus />
    </ListItem.Swipeable>
  );

  return (
    <FlatList
      style={{ paddingTop: 48 }}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      scrollEnabled={false}
      keyExtractor={(item) => item}
      data={[1, 2, 3, 4]}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#5CB15A',
    paddingHorizontal: '4%',
    paddingTop: '6%',
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
    paddingHorizontal: 15,
    flexDirection: 'column',
    flex: 1
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
    height: 10,
  },
  buttonSwipeable: { height: '100%', borderRadius: 8, marginLeft: 7, backgroundColor: '#E54D4D' }
})
