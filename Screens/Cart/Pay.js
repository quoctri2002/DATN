import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

export function Pay() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.back}>
                    <Feather name="chevron-left" size={30} color="white" />
                </TouchableOpacity>
                <Text style={styles.text}>Payment</Text>
            </View>
            <View style={styles.boxInput}>
                <Text style={styles.txtTitle}>Full Name</Text>
                <Input containerStyle={styles.input} />
                <Text style={styles.txtTitle}>Email</Text>
                <Input containerStyle={styles.input} />
                <Text style={styles.txtTitle}>Phone</Text>
                <Input containerStyle={styles.input} />
                <Text style={styles.txtTitle}>Address</Text>
                <Input containerStyle={styles.input} />
            </View>
            <View style={styles.boxTotal}>
                <View style={styles.content}>
                    <Text style={styles.txtTitle}>Total Item</Text>
                    <Text style={styles.txtTotal}>3</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.txtTitle}>Total Price</Text>
                    <Text style={styles.txtTotal}>1500 $</Text>
                </View>
            </View>
            <Button containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle} titleStyle={styles.buttonTitleStyle}>Pay Now</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainerStyle: {
        marginTop: '10%',
        elevation: 4,
        width: '85%',
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
    txtTotal: {
        color: '#707070',
        fontWeight: '500',
        fontSize: 16,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxTotal: {
        marginTop: 40,
        paddingHorizontal: 30,
        width: '85%',
        height: 'auto',
        borderRadius: 20,
        backgroundColor: '#ECECEC',
        gap: 20,
        paddingVertical: '3%',
        alignSelf: 'center',
        elevation: 4,
    },
    boxInput: {
        marginTop: 30,
        paddingHorizontal: 30,
        width: '80%',
        height: 'auto',
        paddingTop: 10,
        borderRadius: 20,
        backgroundColor: '#ECECEC',
        elevation: 4,
    },
    input: {
        alignItems: 'center',
        height: 'auto',
    },
    txtTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
    },
    back: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 20,
    },

    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        marginVertical: 'auto',
        width: '90%',
        textAlign: 'center',
         marginLeft: '6%'
    },

    header: {
        flexDirection: 'row',
        backgroundColor: '#5CB15A',
        paddingHorizontal: '4%',
        paddingTop: '6%',
        paddingBottom: '2%',
        alignSelf: 'center',
        width: '100%',
    },
    container: {
        flex: 1,
        height: 'auto',
        width: '100%',
        alignItems: 'center',
    },
})