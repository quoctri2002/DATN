import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SearchBar, ButtonGroup } from '@rneui/themed';

export const Shop = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather style={{ color: 'white', }} name="chevron-left" size={25} />
                <Text style={styles.txtTitle}>Shop</Text>
                <Pressable style={{ paddingRight: 20 }}>
                    <Feather style={{ color: 'white' }} name="shopping-cart" size={25} />
                </Pressable>
            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <SearchBar
                    placeholder='Search keywords...'
                    lightTheme
                    containerStyle={{ backgroundColor: '#F4F5F9', width: '100%', height: 'auto', alignSelf: 'center', marginTop: 10, borderRadius: 8, shadowColor: '#00000040', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.4, shadowRadius: 3, elevation: 5, color: '#868889' }}
                    platform='android'
                />

                <ButtonGroup
                    innerBorderStyle={{ width: 0 }}
                    containerStyle={{ width: '100%', height: 70, borderWidth: 0, marginTop: 20 }}
                    buttonContainerStyle={{ width: 'auto', height: 'auto' }}
                    buttonStyle={{ backgroundColor: '#D0D7D5', borderRadius: 15, width: 70 }}
                    selectedButtonStyle={{ backgroundColor: '#5CB15A' }}
                    buttons=
                    {
                        Data.map((item) => (
                            <View key={item.id} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={item.icon} />
                                <Text style={styles.txtButton}>{item.name}</Text>
                            </View>
                        ))
                    }
                    selectedIndex={selectedIndex}
                    onPress={setSelectedIndex}
                />
                <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginTop: 20 }}>Recommended Food</Text>
                <View style={{ width: '100%', height: 'auto', flexDirection: 'row', marginTop: 20, gap: 20 }}>
                    <View style={styles.box}>
                        <View style={{ textAlign: 'left', backgroundColor: '#F56262', width: '25%', height: '7%', alignSelf:'flex-start', position: 'absolute'}}>
                            <Text style={{fontSize: 10, color: 'red', textAlign: 'center', backgroundColor: '#F56262' }}>-16%</Text>
                        </View>
                        <Image resizeMode='cover' source={require('../../assets/images/spFood.png')} />
                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#5CB15A' }}>Rs 2900.00</Text>
                        <Text style={styles.txtNameProduct}>Josera Mini Deluxe</Text>
                        <Text style={styles.txtkg}>900 g</Text>
                        <Text style={styles.line}></Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 5 }}>
                            <Feather name="shopping-bag" size={20} color="#5CB15A" />
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box}>
                        <Image resizeMode='cover' source={require('../../assets/images/spFood.png')} />
                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#5CB15A' }}>Rs 2900.00</Text>
                        <Text style={styles.txtNameProduct}>Josera Mini Deluxe</Text>
                        <Text style={styles.txtkg}>900 g</Text>
                        <Text style={styles.line}></Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 5 }}>
                            <Feather name="shopping-bag" size={20} color="#5CB15A" />
                            <Text style={{ fontSize: 14, fontWeight: '500' }}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        color: '#868889'
    },
    box: {
        width: '48%',
        height: 'auto',
        alignItems: 'center',
        gap: 5,
        alignSelf: 'center',
        paddingVertical: '4%',
        backgroundColor: 'white',
        borderRadius: 5,
        overflow: 'hidden',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 20,
    },

    txtButton: {
        color: '#5F5F63',
        fontSize: 10,
        fontWeight: '700',
        lineHeight: 19.50,
        textAlign: 'center'
    },
    txtTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },
    header: {
        height: '6%',
        width: '100%',
        backgroundColor: '#5CB15A',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 3,
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        height: 'auto',
        width: '100%',
    },
})

const Data = [
    {
        id: 1,
        icon: require('../../assets/images/shop_food.png'),
        name: 'Food',
    },
    {
        id: 2,
        icon: require('../../assets/images/shop_veterinarian.png'),
        name: 'Vet Items',
    },
    {
        id: 3,
        icon: require('../../assets/images/shop_accessories.png'),
        name: 'Accessories',
    },
    {
        id: 4,
        icon: require('../../assets/images/shop_device.png'),
        name: 'IOT Device',
    },

]