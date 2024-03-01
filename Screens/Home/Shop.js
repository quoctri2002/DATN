import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SearchBar, ButtonGroup } from '@rneui/themed';

export const Shop = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather style={{ color: 'white', flex: 1, }} name="chevron-left" size={25} />
                <Text style={styles.txtTitle}>Shop</Text>
                <Feather style={{ color: 'white', flex: 1, textAlign: 'right', paddingRight: 10 }} name="shopping-cart" size={25} />
            </View>
            <SearchBar
                placeholder='Search keywords...'
                lightTheme
                containerStyle={{ backgroundColor: '#F4F5F9', width: '90%', height: 'auto', alignSelf: 'center', marginTop: 10, borderRadius: 8, shadowColor: '#00000040', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.4, shadowRadius: 3, elevation: 5, color: '#868889' }}
                platform='android'
            />

            <ButtonGroup
                innerBorderStyle={{ width: 0 }}
                containerStyle={{ width: 'auto', height: 70, borderWidth: 0, marginTop: 20}}
                buttonContainerStyle={{ width: 'auto', height: 'auto', alignItems: 'center'}}
                buttonStyle={{ backgroundColor: '#D0D7D5', borderRadius: 15, width: 70}}
                selectedButtonStyle={{ backgroundColor: '#5CB15A' }}
                buttons=
                    {
                        Data.map((item) => (
                            <View key={item.id} style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={item.icon} />
                            <Text style={styles.txtButton}>{item.name}</Text>
                        </View>
                        ))
                    }
                selectedIndex={selectedIndex}
                onPress={setSelectedIndex}
            />
        </View>
    )
}



const styles = StyleSheet.create({
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
    },
    header: {
        height: '6%',
        width: '100%',
        backgroundColor: '#5CB15A',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 3,
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