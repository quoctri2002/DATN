import { StyleSheet, Text, View, Pressable, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export function Order({ action }) {
    const { setModalVisible } = action;
    const [selectedOrder, setSelectedOrder] = useState(null);
    const profile = useSelector((state) => state.user.profile.ADMIN_ID); // chuyển qua id người dùng
    const [data, setData] = useState([]);

    // Function to handle click on an order item
    const handleOrderItemPress = (order) => {
        setSelectedOrder(selectedOrder === order ? null : order);
    };

    // Function to handle click on the cancel button
    const handleCancelButtonPress = () => {
        setSelectedOrder(null);
        setModalVisible(false);
    };

    // Function to handle click on the confirm button
    const handleConfirmButtonPress = () => {
        // Perform navigation or any other action you want
        console.log("Order confirmed:", selectedOrder);
    };

    useEffect(() => {
        async function fetchProductCategories() {
          try {
            const response = await fetch(`http://206.189.45.141/api/testdetail.php?id=${profile}`);
            const resJson = await response.json();
            console.log(resJson.data);
            setData(resJson.data);
          } catch (error) {
            console.error('Error fetching product categories:', error);
          }
        }
        fetchProductCategories();
      }, [profile]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => setModalVisible(false)} style={styles.back}>
                    <Feather name="chevron-left" size={25} color="white" />
                </Pressable>
                <Text style={styles.text}>My Orders</Text>
            </View>
            <View style={{ width: '80%', alignSelf: 'center', paddingTop: '5%', height: '90%', }}>
                <FlatList
                    keyExtractor={(item) => item.BILL_ID}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleOrderItemPress(item)}>
                            <View style={styles.boxOrder}>
                                <Text style={styles.txtCode}>{item.BILL_ID}</Text>
                                <View style={styles.Content}>
                                    <Text style={styles.txtTitle}>Order Day: </Text>
                                    <Text style={styles.txtContent}>{item.BILL_CREATEDAT}</Text>
                                </View>
                                <View style={styles.Content}>
                                    <Text style={styles.txtTitle}>Status: </Text>
                                    <Text style={styles.txtContent}>{item.BILL_STATUS}</Text>
                                </View>
                                <View style={styles.Content}>
                                    <Text style={styles.txtTitle}>Paymentmethod: </Text>
                                    <Text style={styles.txtContent}>{item.BILL_PAYMENTMETHOD}</Text>
                                </View>
                                <View style={styles.Content}>
                                    <Text style={styles.txtTitle}>Orderer: </Text>
                                    <Text style={styles.txtContent}>{item.CUSTOMER_NAME}</Text>
                                </View>
                                <View style={styles.Content}>
                                    <Text style={styles.txtTitle}>Address: </Text>
                                    <Text style={styles.txtContent}>{item.ADDRESS_DETAIL}</Text>
                                </View>
                                {/* Only render items if the order is selected */}
                                {selectedOrder === item && (
                                    <View style={styles.Content}>
                                        <Text style={styles.txtTitle}>Items: </Text>
                                        {item.ORDERDETAIL.map((product, index) => (
                                            <View key={index} style={styles.itemContainer}>
                                                <Text style={styles.itemName}>{product.PRODUCT.name}</Text>
                                                <Text style={styles.itemPrice}>Price: ${product.PRODUCT.price}</Text>
                                                <Text style={styles.itemQuantity}>Quantity: {product.ORDERDETAIL_QUANTITY}</Text>
                                                <Text style={styles.itemTotal}>Total: ${product.ORDERDETAIL_PRICE}</Text>
                                            </View>
                                        ))}
                                    </View>
                                )}
                                <View style={styles.Content}>
                                    <Text style={styles.txtTitle}>Total Price: </Text>
                                    <Text style={styles.txtContent}>${item.totalPrice}</Text>
                                </View>
                                <View style={styles.Content}>
                                    <Text style={styles.txtTitle}>NOTE</Text>
                                    <Text style={styles.txtContent}>{item.BILL_NOTE}</Text>
                                </View>
                                {/* Render buttons only under the selected order */}
                                {selectedOrder === item && (
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.button} onPress={handleCancelButtonPress}>
                                            <Text style={styles.buttonText}>Cancel</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button} onPress={handleConfirmButtonPress}>
                                            <Text style={styles.buttonText}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    )}
                    data={data}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    txtContent: {
        fontWeight: '400',
        fontSize: 14,
        color: '#5B5B5B'
    },
    txtTitle: {
        fontWeight: '700',
        fontSize: 16,
        color: '#245E23',
    },
    Content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '3%',
    },
    boxOrder: {
        borderWidth: 0.5,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 20,
        marginVertical: 5,
        gap: 5,
    },
    txtCode: {
        fontWeight: '700',
        fontSize: 16,
        color: '#245E23'
    },
    back: {
        backgroundColor: '#5CB15A',
        flex: 1.2,
    },
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: '7%',
        flex: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: '#5CB15A',
        paddingHorizontal: '4%',
        paddingBottom: '2%',
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        width: 120,
        paddingVertical: 12,
        borderRadius: 8,
        backgroundColor: '#5CB15A',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemContainer: {
        marginLeft: 0, // Thiết lập khoảng cách từng mục
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 14,
        color: '#888',
    },
    itemQuantity: {
        fontSize: 14,
        color: '#888',
    },
    itemTotal: {
        fontSize: 14,
        color: '#888',
    },
});

const dataAdress = [
    {
        id: '1',
        date: '21-2-2024',
        status: 'delivery',
        adress: '123 Hoang Bat Dat, phường 15,Q.Tân Bình,Tp.HCM',
        items: [
            { productName: 'Product 1', unitPrice: 5, quantity: 2, totalPrice: 10 },
            { productName: 'Product 2', unitPrice: 8, quantity: 3, totalPrice: 24 }
        ],
        total: 34,
    },
    {
        id: '2',
        date: '21-2-2024',
        status: 'delivery',
        adress: '123 Hoang Bat Dat, phường 15,Q.Tân Bình,Tp.HCM',
        items: [
            { productName: 'Product 3', unitPrice: 10, quantity: 1, totalPrice: 10 }
        ],
        total: 10,
    },
];
