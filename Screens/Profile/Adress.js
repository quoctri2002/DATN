import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'
import { Input, Button } from '@rneui/base';

export function Adress({ action }) {
    const { setModalVisible } = action;
    const [selectedProvince, setSelectedProvince] = React.useState("");
    const [selectedCity, setSelectedCity] = React.useState("");
    const [addAdress, setAddAdress] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => setModalVisible(false)} style={styles.back}>
                    <Feather name="chevron-left" size={25} color="white" />
                </Pressable>
                <Text style={styles.text}>Adress</Text>
            </View>

            <View style={{ width: '80%', alignSelf: 'center', paddingTop: '5%' }}>

                <FlatList
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.boxAdress}>
                            <Text style={styles.txtTitleAdress}>Adress {item.id}</Text>
                            <Text>{item.adress}</Text>
                        </View>
                    }
                    pagingEnabled
                    snapToAlignment="center"
                    data={dataAdress}
                />


                {
                    !addAdress ?
                        <Button buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 20, paddingVertical: 10, marginTop: 10, width: '40%', alignSelf: 'flex-end' }} onPress={() => setAddAdress(true)}>
                            Add Adress
                        </Button> :
                        <View>
                            <Text style={styles.txtTitle}>Province/City</Text>
                            <SelectList
                                setSelected={(val) => setSelectedProvince(val)}
                                data={dataTinh}
                                save="selectedProvince"
                                placeholder='Province'
                                boxStyles={{ borderRadius: 20, elevation: 5, borderWidth: 0.5, backgroundColor: '#FFFFFF' }}
                            />

                            <Text style={styles.txtTitle}>City/Distric</Text>
                            <SelectList
                                setSelected={(val) => setSelectedCity(val)}
                                data={dataCity}
                                save="selectedCity"
                                placeholder='City/Distric'
                                boxStyles={{ borderRadius: 20, elevation: 5, borderWidth: 0.5, backgroundColor: '#FFFFFF' }}
                            />

                            <Text style={styles.txtTitle}>Street and ward adress</Text>
                            <Input
                                placeholder=""
                                style={styles.input}
                                inputContainerStyle={styles.inputContainer}
                            />

                            <Button onPress={() => setAddAdress(false)} buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 20, paddingVertical: 10, marginTop: 10 }}>
                                Add Adress
                            </Button>
                            <Button onPress={() => setAddAdress(false)} buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 20, paddingVertical: 10, marginTop: 10 }}>
                                Cancel
                            </Button>
                        </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    txtTitleAdress: {
        fontWeight: '700',
        fontSize: 16,
        color: '#484848'
    },

    boxAdress: {
        borderWidth: 0.5,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 20,
        marginVertical: 5,
    },

    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        paddingHorizontal: 20,
        color: '#A6A6A6',
        elevation: 5,
        borderRadius: 20,
    },
    input: {
        color: 'black',
        fontSize: 15,
    },
    txtTitle: {
        paddingVertical: 15,
        fontWeight: '700',
        fontSize: 16,
        color: '#484848'
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
})

const dataTinh = [
    { key: '1', value: 'TP.HCM' },
    { key: '2', value: 'Ha Noi' },
    { key: '3', value: 'Dong Thap' },
    { key: '4', value: 'Thanh Hoa' },
    { key: '5', value: 'Nghe An' },
    { key: '6', value: 'Long An' },
]

const dataCity = [
    { key: '1', value: 'Hải Phòng' },
    { key: '2', value: 'Đà Nẵng' },
    { key: '3', value: 'Cần Thơ' },
    { key: '4', value: 'Phan Thiết' },
    { key: '5', value: 'Distric 12' },
    { key: '6', value: 'Tân Bình Distric' },
]

const dataAdress = [
    { id: '1', adress: '1 Hoang Bat Dat, phường 15,Q.Tân Bình,Tp.HCM' },
    { id: '2', adress: '22 Hoang Bat Dat, phường 15,Q.Tân Bình,Tp.HCM' },
]