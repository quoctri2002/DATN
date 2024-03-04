import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Image, Button, Input } from '@rneui/themed';


const AddPets = ({action, state}) => {
    const { setModalVisible } = action;
    const { modalVisible } = state;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => setModalVisible(false)} style={{ flex: 0.5 }}>
                    <Feather style={{ color: '#FFFFFF', paddingLeft: 10, }} name="chevron-left" size={25} />
                </Pressable>
                <Text style={styles.text}>Add Pets</Text>
            </View>
            <Button containerStyle={{ width: '40%', marginTop: '3%', alignSelf: 'flex-end', marginRight: '3%', borderRadius: 15, }} buttonStyle={{ backgroundColor: '#5CB15A' }} titleStyle={{ fontWeight: '500', fontSize: 18 }}> Scan for Pets </Button>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', marginLeft: 20, fontWeight: 700 }}>Added Pets</Text>
            <View style={{ marginTop: 20, gap: 20 }}>
                {
                    Data.map((item) =>
                        <TouchableOpacity key={item.id} style={styles.item}>
                            <Image style={{ width: 60, height: 60, flexShrink: 0 }} resizeMode='cover' source={item.image} />
                            <Text style={{ flex: 1, color: 'black', fontSize: 15, fontWeight: '600' }}>{item.name}</Text>
                            <Feather name="link" size={24} color="black" style={{ padding: '4%' }} />
                        </TouchableOpacity>
                    )
                }
            </View>
            <Text style={{ paddingTop: 20, color: 'black', fontSize: 20, fontWeight: '500', marginLeft: 20, fontWeight: 700 }}>Manually Add Pet</Text>
            <View style={{ alignSelf: 'center', width: '80%', marginTop: 23, gap: 15, bottom: 3 }}>
                <TextInput placeholder='Pet Name' style={styles.input}></TextInput>
                <TextInput placeholder='Breed Name' style={styles.input}></TextInput>
                <View style={{ flexDirection: 'row', width: '31%', gap: 10 }}>
                    <TextInput placeholder='Gender' style={styles.input}></TextInput>
                    <TextInput placeholder='Age' style={styles.input}></TextInput>
                    <TextInput placeholder='Colour' style={styles.input}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', width: '48.5%', gap: 10 }}>
                    <TextInput placeholder='Height' style={styles.input}></TextInput>
                    <TextInput placeholder='Weight' style={styles.input}></TextInput>
                </View>
                <Button containerStyle={{ width: '100%', borderRadius: 5 }} buttonStyle={{ backgroundColor: '#5CB15A' }} titleStyle={{ fontWeight: '500', fontSize: 18 }}>Add Pet</Button>
            </View>
        </ScrollView>
    )
}

export default AddPets

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        backgroundColor: '#D4D4D4',
        borderRadius: 10,
        padding: 15,
        fontWeight: '600',
        textAlignVertical: 'center',
        color: '#0000007D',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },

    item: {
        width: '80%',
        alignSelf: 'center',
        padding: '2%',
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
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
        image: require('../../assets/images/pet.png'),
        name: 'Smart Collar'
    },
    {
        id: 2,
        image: require('../../assets/images/pet.png'),
        name: 'Pet Feeder'
    },
    {
        id: 3,
        image: require('../../assets/images/pet.png'),
        name: 'truys'
    },
    {
        id: 4,
        image: require('../../assets/images/pet.png'),
        name: 'Sangs cho'
    },
    {
        id: 5,
        image: require('../../assets/images/pet.png'),
        name: 'Tron Lung'
    },
    {
        id: 6,
        image: require('../../assets/images/pet.png'),
        name: 'Smart Collar'
    },
    {
        id: 7,
        image: require('../../assets/images/addDevice.png'),
        name: 'Smart Collar'
    },
]