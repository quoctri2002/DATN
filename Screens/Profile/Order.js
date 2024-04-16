import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
// import { SelectList } from 'react-native-dropdown-select-list'
import { Input, Button } from '@rneui/base';

export function Order({ action, state }) {
    const { setModalVisible } = action;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => setModalVisible(false)} style={styles.back}>
                    <Feather name="chevron-left" size={25} color="white" />
                </Pressable>
                <Text style={styles.text}>My Orders</Text>
            </View>

            <View style={{ width: '80%', alignSelf: 'center', paddingTop: '5%' }}>

                <FlatList
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.boxOrder}>
                            <Text style={styles.txtCode}>{item.id}</Text>
                            <View style={styles.Content}>
                                <Text style={styles.txtTitle}>Order Day:  </Text>
                                <Text style={styles.txtContent}>21-02-2024</Text>
                            </View>
                            <View style={styles.Content}>
                                <Text style={styles.txtTitle}>Status:  </Text>
                                <Text style={styles.txtContent}>delivery</Text>
                            </View>
                            <View style={styles.Content}>
                                <Text style={styles.txtTitle}>Address:  </Text>
                                <Text style={{
                                    fontWeight: '400',
                                    fontSize: 14,
                                    color: '#5B5B5B',
                                    width: '50%',
                                    textAlign: 'right'
                                }}>{item.adress}</Text>
                            </View>
                            <View style={styles.Content}>
                                <Text style={styles.txtTitle}>Quantity:  </Text>
                                <Text style={styles.txtContent}>2</Text>
                            </View>
                            <View style={styles.Content}>
                                <Text style={styles.txtTitle}>Total Price:  </Text>
                                <Text style={{
                                    fontWeight: '700',
                                    fontSize: 16,
                                    color: '#DE8181'
                                }}>12$</Text>
                            </View>
                        </View>
                    }
                    pagingEnabled
                    snapToAlignment="center"
                    data={dataAdress}
                />
            </View>

        </View>
    )
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
})

const dataAdress = [
    {
        id: '1',
        date: '21-2-2024',
        status: 'delivery',
        adress: '123 Hoang Bat Dat, phường 15,Q.Tân Bình,Tp.HCM',
        quantity: 4,
        price: 12,
    },
    {
        id: '2',
        date: '21-2-2024',
        status: 'delivery',
        adress: '123 Hoang Bat Dat, phường 15,Q.Tân Bình,Tp.HCM',
        quantity: 4,
        price: 12,
    },
]