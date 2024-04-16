import React from 'react';
import { Pressable, View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Detail_fix() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('shop')} style={styles.back}>
                    <Feather name="chevron-left" size={30} color="black" />
                </Pressable>
                <View>
                    <Text style={styles.text_number_header}>PK525489</Text>
                    <Text style={styles.text_header}>Detail_order</Text>
                </View>
            </View>
            <View style={styles.address_body}>
                <View style={{
                    marginLeft: '7%',
                    marginTop: '5%',

                }}>
                    <Text style={styles.address_time}>đặt vào lúc 8 h  14 tháng 8 năm 2018</Text>
                    <Text style={styles.address_text}>234 blabla bla bla tp hcm</Text>
                </View>
                <View style={{
                    marginLeft: '7%',
                    marginTop: '5%',

                }}>
                    <Text style={styles.address_time}>đặt vào lúc 8 h  14 tháng 8 năm 2018</Text>
                    <Text style={styles.address_text}>234 blabla bla bla tp hcm</Text>
                </View>
            </View>
            <View style={styles.hr0} />
            <View style={styles.price_body}>
                <View style={{ paddingHorizontal: 1, gap: 10 }} >
                    <Text style={{ fontSize: 20, color: '#808080', letterSpacing: 4, }}>Giá bán gốc :</Text>
                    <Text style={{ fontSize: 20, color: '#808080', letterSpacing: 2, }}>Phí giao Hàng :</Text>
                    <Text style={{ fontSize: 20, color: '#808080', letterSpacing: 4, }}>Áp mã giảm :</Text>
                    <Text style={{ fontSize: 20, color: '#808080', letterSpacing: 2, paddingTop: '15%', }}>Tổng giá tiền :</Text>
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginTop: '1.5%' }}>$100</Text>
                    <Text style={{ fontSize: 20, color: 'black', marginTop: '1.5%' }}>$15</Text>
                    <Text style={{ fontSize: 20, color: 'black', marginTop: '1.5%' }}>$4</Text>
                    <Text style={{ fontSize: 20, color: 'black', marginTop: '1.5%', paddingTop: '6%' }}>$111</Text>
                </View>
            </View>

            <View style={styles.hr} />

            <View style={styles.Package_Detail}>
                <Text style={{ fontSize: 24, paddingLeft: '6%', paddingTop: '4%', fontWeight: '500' }}>Package_Detail</Text>
                <View style={{ paddingHorizontal: '6%', paddingVertical: '2%', gap: 5 }}>
                    <Text style={styles.text_detail}>package_Number</Text>
                    <Text style={styles.text_Detail_in}>PK42151783232</Text>

                    <Text style={styles.text_detail}>package_Items</Text>
                    <Text style={styles.text_Detail_in}>food and items dog</Text>

                    <Text style={styles.text_detail}>Delivery_type</Text>
                    <Text style={styles.text_Detail_in}>DATN Press</Text>

                    <Text style={styles.text_detail}>Delivery_instructions</Text>
                    <Text style={styles.text_Detail_in}>cẩn thận hàng dễ vỡ lắm nhoa !!!</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around',}}>
                <TouchableOpacity onPress={() => console.log('Button pressed')} style={{width:200}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: '#5CB15A', borderRadius: 6 }}>
                        <Icon name="rocket" size={30} color="white" />
                        <Text style={{ color: 'white', marginLeft: 5 }}>Email invoice</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Button pressed')}style={{width:200}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: '#5CB15A', borderRadius: 6 }}>
                        <Icon name="rocket" size={30} color="white" /> 
                        <Text style={{ color: 'white', marginLeft: 5 }}>Need Help?</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F2F5',

    },

    back: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'flex-start',
        paddingBottom: 8,
        paddingLeft: 20,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#5CB15A',
        paddingHorizontal: '7%',
        paddingTop: '6%',
        paddingBottom: '2%',
        alignSelf: 'center',
        width: '100%',
    },
    text_number_header: {
        color: '#c0c0c0',
        fontWeight: '200',
        fontSize: 25,
        letterSpacing: 5,
        paddingLeft: '2%',
        marginVertical: 'auto',
        width: '90%',
        marginLeft: '4%',
    },
    text_header: {
        color: 'white',
        fontWeight: '600',
        fontSize: 25,
        letterSpacing: 5,
        paddingLeft: '2%',
        marginVertical: 'auto',
        width: '95%',
        marginLeft: '4%',
    },
    address_body: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        lineheight: 2.5,
    },
    address_time: {
        color: '#c0c0c0',
        fontSize: 20,

    },
    address_text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',

    },
    price_body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '5%',
        paddingLeft: '5%',
        paddingRight: '7%',

    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginTop: '5%',
        opacity: 0.2,
    },
    hr0: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 10,
        opacity: 0.2,
        marginTop: '5%',
    },
    Package_Detail: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    text_detail: {
        color: 'black',
        opacity: 0.5,
        fontSize: 20,
    },
    text_Detail_in: {
        color: 'black',
        fontSize: 20,
    },
})
