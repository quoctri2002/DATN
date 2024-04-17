import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function PayMethod() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={console.log("again")} style={{
                    flex: 1,
                    position: 'absolute',
                    alignSelf: 'flex-start',
                    paddingTop: 35,
                }}>
                    <Feather name="chevron-left" size={30} color="black" />
                </Pressable>
                <Text style={styles.text_pay}>Payment_Methods</Text>
            </View>
            <View style={styles.powered}>
                <Text style={{
                    fontSize: 20,
                }}>
                    Powered By DATN</Text>
            </View>
            <View style={styles.linked_method}>
                <Text style={{
                    fontSize: 20,
                    letterSpacing: 2,
                    opacity: 0.5,

                }}>
                    Linked methods
                </Text>
                <View style={styles.link}>
                 <View style={{flexDirection:'row', gap:15,}}>
                 <Icon name='cash'color="#4F8EF7" size={45}/>
                   <Text style={{fontSize:25,paddingTop:5,}}>Cash</Text>
                 </View>
                    <TouchableOpacity style={styles.button} onPress={console.log("pay")}>
                    </TouchableOpacity>
                </View>
                <View style={styles.link}>
                 <View style={{flexDirection:'row', gap:15,}}>
                 <Image source={require('../../assets/momo.png')} style={{width:40 , height:40 , marginLeft:2}}/>
                   <Text style={{fontSize:25,paddingTop:5,}}>MoMo</Text>
                 </View>
                    <TouchableOpacity style={styles.button} onPress={console.log("pay")}>
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
        paddingHorizontal: '7%',
        paddingTop: '6%',
        paddingBottom: '2%',
        alignSelf: 'center',
        width: '100%',

    },
    text_pay: {
        flex: 1,
        paddingBottom: 10,
        fontSize: 30,
        fontWeight: '600',
        letterSpacing: 5,
    },
    linked_method: {
        flexDirection: 'column',
        width: '100%',

    },
    link:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        marginVertical:15,
    },
    button: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2, // Độ dày của viền
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'3%',
    },





});