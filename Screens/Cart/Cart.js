import { Avatar, Text } from "@rneui/themed";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ListItem, Button } from '@rneui/themed';

export function Cart() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          <Text style={styles.headerText}>Cart</Text>
          <MaterialCommunityIcons name="cart-variant" size={24} color="white" />
        </View>

        <CartProductList />

        <View style={styles.totalContainer}>
            <View style={{ paddingBottom: 80 }}>
            </View>
            <View style={{ marginTop: 'auto', marginBottom: 15 }}>
              <View style={styles.totalRow}>
                <Text style={styles.totalSubText}>Subtotal</Text>
                <Text style={styles.totalSubText}>Rs 53,340.00
              </Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalSubText}>Shipping charges</Text>
                <Text style={styles.totalSubText}>Rs 520.00</Text>
              </View>
              <View style={{ ...styles.totalRow, marginTop: 30 }}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalText}>Rs 53,860</Text>
              </View>

              <Button containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle} titleStyle={styles.buttonTitleStyle}>Checkout</Button>
            </View>
        </View>

        <View style={{ backgroundColor: '#5CB15A', height: 54, maxHeight: 54, width: '100%', marginTop: 'auto' }}></View>
    </ScrollView>
  )
}

function MinusAndPlus() {
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
      <Button buttonStyle={styles.buttonQuantityStyle} titleStyle={styles.buttonQuantityTitleStyle} title="+" />
      <ListItem.Input inputContainerStyle={styles.inputQuantityContainerStyle} inputStyle={styles.inputQuantityStyle} inputMode="numeric" placeholder="1" />
      <Button buttonStyle={styles.buttonQuantityStyle} titleStyle={styles.buttonQuantityTitleStyle} title="-" />
    </View>
  )
}

function CartProductList() {
  const renderItem = () => (
    <ListItem containerStyle={styles.cartItem}>
      <Avatar containerStyle={{ margin: 0 }} size={42} avatarStyle={styles.avatarStyle} source={{ uri: "https://images.unsplash.com/photo-1707343848655-a196bfe88861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" }} />
      <ListItem.Content style={styles.itemContent}>
        <ListItem.Subtitle style={styles.cartSubtitleTop}>Rs 7850.00 x 3</ListItem.Subtitle>
        <ListItem.Title style={styles.cartTitle} >Royal Canin Rottweiler Puppy</ListItem.Title>
        <ListItem.Subtitle style={styles.cartSubtitleBottom}>3kg</ListItem.Subtitle>
      </ListItem.Content>
      <MinusAndPlus />
    </ListItem>
  );

  return (
    <FlatList
      style={{ paddingTop: 48}}
      scrollEnabled={false}
      keyExtractor={(item) => item}
      data={[1,2,3,4]}
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
    backgroundColor: '#5CB15A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500
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
    elevation: 4,
    borderRadius: 8,
    marginBottom: 12,
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
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  buttonQuantityStyle: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  buttonQuantityTitleStyle: {
    color: '#5CB15A'
  },
  inputQuantityContainerStyle: {
    margin: 0,
    padding: 0,
  }
})
