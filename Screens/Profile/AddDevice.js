import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Image } from '@rneui/themed';
import { Button } from '@rneui/base';

const AddDevice = ({action, state}) => {
    const { setModalVisible } = action;
    const { modalVisible } = state;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => setModalVisible(false)} style={{ flex: 0.5 }}>
                    <Feather style={{ color: '#FFFFFF', paddingLeft: 10, }} name="chevron-left" size={25} />
                </Pressable>
                <Text style={styles.text}>Add Device</Text>
            </View>
            <Button containerStyle={{ width: '40%', marginTop: '3%', alignSelf: 'flex-end', marginRight: '3%', borderRadius: 15, }} buttonStyle={{ backgroundColor: '#5CB15A' }} titleStyle={{ fontWeight: '500', fontSize: 18 }}>
                Scan Device
            </Button>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginLeft: 20 }}>Select Device</Text>
            <View style={{height: '100%', bottom: 20, marginTop: 20}}>

            {
                Data.map((item) =>
                    <TouchableOpacity key={item.id} style={styles.item}>
                        <Image style={{ width: 40, height: 40, flexShrink: 0 }} resizeMode='cover' source={item.image} />
                        <Text style={{ flex: 1, color: 'black', fontSize: 15, fontWeight: '600' }}>{item.name}</Text>
                        <Feather name="link" size={24} color="black" />
                    </TouchableOpacity>
                )
            }
            </View>
        </ScrollView>
    )
}

export default AddDevice

const styles = StyleSheet.create({
    item: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
        padding: '4%',
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#5CB15A',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18,
        flex: 1,
    },
})

const Data = [
    {
        id: 1,
        image: require('../../assets/images/addDevice.png'),
        name: 'Smart Collar'
    },
    {
        id: 2,
        image: require('../../assets/images/addDevice.png'),
        name: 'Pet Feeder'
    },
    {
        id: 3,
        image: require('../../assets/images/addDevice.png'),
        name: 'truys'
    },
    {
        id: 4,
        image: require('../../assets/images/addDevice.png'),
        name: 'Sangs cho'
    },
    {
        id: 5,
        image: require('../../assets/images/addDevice.png'),
        name: 'Tron Lung'
    },
    {
        id: 6,
        image: require('../../assets/images/addDevice.png'),
        name: 'Smart Collar'
    },
    {
        id: 7,
        image: require('../../assets/images/addDevice.png'),
        name: 'Smart Collar'
    },
]