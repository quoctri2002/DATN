import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';

export function Paymentmethod({ route, navigation }) {
    const { onPaymentMethodSelect } = route.params; // Lấy hàm callback từ props route

    const handlePaymentSelection = (paymentMethodId) => {
        // Gọi hàm callback và truyền mã id kiểu số của phương thức thanh toán được chọn
        onPaymentMethodSelect(paymentMethodId);
        navigation.goBack(); // Quay lại màn hình trước đó (màn hình Pay)
    };
    return (
        // <View style={styles.container}>
        //     <TouchableOpacity onPress={() => handlePaymentSelection(1)} style={styles.paymentMethodButton}>
        //         <Text style={styles.paymentMethodText}>Momo</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity onPress={() => handlePaymentSelection(2)} style={styles.paymentMethodButton}>
        //         <Text style={styles.paymentMethodText}>Cash</Text>
        //     </TouchableOpacity>
        // </View>

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Pay')} style={styles.back}>
                    <Feather name="chevron-left" size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.text_pay}>Payment Method</Text>
            </View>
            <View style={{marginTop: '10%'}}>

                <Text style={{
                    fontSize: 20,
                    fontWeight: 600,
                    opacity: 0.5,
                    paddingHorizontal: 20,
                }}>
                    Linked methods
                </Text>
                <View style={styles.link}>
                    <View style={{ flexDirection: 'row', gap: 15, }}>
                        <Icon name='cash' color="#4F8EF7" size={38} />
                        <Text style={{ fontSize: 20, paddingTop: 7, }}>Cash</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => handlePaymentSelection(2)}>
                    </TouchableOpacity>
                </View>
                <View style={styles.link}>
                    <View style={{ flexDirection: 'row', gap: 15, }}>
                        <Image source={require('../../assets/momo.png')} style={{ width: 40, height: 25, marginLeft: 2 }} />
                        <Text style={{ fontSize: 20, paddingTop: 2, }}>MoMo</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => handlePaymentSelection(1)}>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    powered: {
        flexDirection: 'row',
        paddingHorizontal: '4%',
        paddingTop: '4%',
        paddingBottom: '2%',
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'flex-end',
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
    back: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 20,
    },
    text_pay: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 'auto',
        width: '90%',
        textAlign: 'center',
        marginLeft: '6%',
    },
    linked_method: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 15,

    },
    link: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 15,
    },
    button: {
        width: 20,
        height: 20,
        borderRadius: 50,
        borderWidth: 1.5, // Độ dày của viền
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1%',
    },

});
