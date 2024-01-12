import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Screen1 = () => {
    return (
        <View style={styles.body}>
            <View style={styles.view1}>
                <Image style={styles.iconbackview1} source={require('../../media_phainop/back.png')} />
                <Text style={styles.textview1}>Dr.Nambuvan</Text>
            </View>
            <View style={styles.view2}>
                <Image style={styles.imageview2} source={require('./media/doctorpet.png')} />
                <View style={styles.view2in}>
                    <View style={styles.view2in1a}>
                        <View style={styles.view2in2}>
                            <Text style={styles.textview2in2a}>Dr. Nambuvan</Text>
                            <Text style={styles.textview2in2b}>Bachelor of Veterinary Science</Text>
                            <View style={styles.view2in3}>
                                <Text style={styles.textview2in3a}>4.0</Text>
                                <Image source={require('./media/4sao.png')} />
                                <Text>(100 review)</Text>
                            </View>
                            <View style={styles.view2in4}>
                                <View style={styles.view2in5}>
                                    <Image source={require('./media/clock.png')} />
                                    <Text style={{ marginLeft: 5, fontSize: 12, }}>Monday - Friday at 8.00 am - 5.00pm</Text>
                                </View>
                                <View style={styles.view2in6}>
                                    <Image style={{ width: 12, height: 12 }} source={require('./media/address.png')} />
                                    <Text style={{ marginLeft: 3, fontSize: 12 }}>'2.5km'</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.view2in1text}>1000 LKR for an Appointment</Text>
                    </View>
                    <Text style={styles.view2intexta}>Dr. Shehan, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic “Petz & Vetz” Our paradise is situated in the heart of the town with a pleasant environment. We are ready to treat your beloved doggos & puppers with love and involvement.
                        Book the appointment now !</Text>
                    <View style={styles.view2in1b}>
                        <Text style={styles.view2in1btext}>Recommended For:</Text>
                        <View style={styles.view2in1btrong}>
                            <Text style={{ fontWeight: 500, color: '#5F5F63', fontSize: 14, }}>Bella</Text>
                        </View>
                    </View>
                    <Pressable style={styles.buttonbook}>
                        <Text style={styles.buttonbooktext}>Book an Appointment</Text>
                        <Image style={{position: 'absolute', right: 20,}} source={require('./media/book.png')} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.bottom}>
                <Image style={styles.iconsearchhomeview2a} source={require('../../media_phainop/back.png')} />
                <Text>Screen1</Text>
            </View>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5CB15A',
    },
    view1: {
        marginTop: 20,
        marginLeft: 9,
        flexDirection: 'row',
        // padding: 16,
        height: '3%',
        width: '60%',
        justifyContent: 'space-between',
        marginBottom: 4,
        // backgroundColor: 'white',
    },
    iconbackview1: {
        width: '9%',
        height: '100%',
    },
    textview1: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 500,

    },
    view2: {
        position: 'relative',
        height: '84%',  // 787
        width: '100%',
        alignItems: 'center',
    },
    imageview2: {
        height: '84%',  // 787
        width: '100%',
    },
    view2in: {
        alignItems: 'center',
        position: 'absolute',
        height: '65%',
        width: 700,
        bottom: -4,
        backgroundColor: '#F3F2F5',
        borderTopLeftRadius: 300,
        borderTopRightRadius: 300,
    },
    view2in1a: {
        marginTop: '5%',
        // alignItems: 'center',
        // position: 'absolute',
        height: '35%',
        width: '45%', // 316
        justifyContent: 'space-around',
        // bottom: -4,
        backgroundColor: '#FFFFFF',
        borderRadius: 26,

    },
    view2in2: {
        marginTop: 10,
        marginLeft: '10%',
    },
    textview2in2a: {
        width: '88%',
        // backgroundColor: 'red',
        color: '#141415',
        fontSize: 26,
        fontWeight: 700,
    },
    textview2in2b: {
        width: '88%',
        // backgroundColor: 'red',
        color: '#064E57',
        fontSize: 17,
        fontWeight: 500,
    },
    view2in3: {
        width: '55%',
        justifyContent: 'space-between',
        // marginTop: '7%',
        // alignItems: 'center',
        // position: 'absolute',
        // height: '35%',
        // width: '45%',
        // bottom: -4,
        // backgroundColor: 'red',
        // borderTopLeftRadius: 300,
        // borderTopRightRadius: 300,
        flexDirection: 'row',
    },
    textview2in3a: {
        // width: '88%',
        // backgroundColor: 'red',
        color: '#000000',
        fontWeight: 500,
    },
    view2in4: {
        marginTop: 12,
        width: '88%', // 236
        justifyContent: 'space-between',
        // marginTop: '7%',
        // alignItems: 'center',
        // position: 'absolute',
        height: 16,
        // width: '45%',
        // bottom: -4,
        // backgroundColor: 'red',
        // borderTopLeftRadius: 300,
        // borderTopRightRadius: 300,
        flexDirection: 'row',
    },
    view2in5: {
        alignItems: 'center',
        // width: '78%', // 236
        // marginTop: '7%',
        // alignItems: 'center',
        // position: 'absolute',
        // width: '45%',
        // bottom: -4,
        backgroundColor: 'white',
        // borderTopLeftRadius: 300,
        // borderTopRightRadius: 300,
        flexDirection: 'row',
    },
    view2in6: {
        alignItems: 'center',
        // width: '78%', // 236
        // marginTop: '7%',
        // alignItems: 'center',
        // position: 'absolute',
        // width: '45%',
        // bottom: -4,
        // borderTopLeftRadius: 300,
        // borderTopRightRadius: 300,
        flexDirection: 'row',
    },
    view2in6: {
        alignItems: 'center',
        // width: '78%', // 236
        // marginTop: '7%',
        // alignItems: 'center',
        // position: 'absolute',
        // width: '45%',
        // bottom: -4,
        // borderTopLeftRadius: 300,
        // borderTopRightRadius: 300,
        flexDirection: 'row',
    },
    view2in1text: {
        marginLeft: '5%',
        // width: '50%',
        // backgroundColor: 'red',
        color: '#5CB15A',
        fontWeight: 500,
        fontSize: 17,
    },
    view2intexta: {
        marginTop: '3%',
        width: '45%', // 316
        // width: '50%',
        // backgroundColor: 'red',
        color: '#191919',
        fontWeight: 400,
        fontSize: 13,
    },
    view2intextb: {
        marginTop: '5%',
        width: '45%', // 316
        // width: '50%',
        // backgroundColor: 'red',
        color: '#191919',
        fontWeight: 400,
        fontSize: 13,
    },
    view2in1b: {

        width: '45%', // 316
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 8,
    },
    view2in1btext: {
        // width: '45%', // 316
        // alignItems: 'flex-start',
        // flexDirection: 'row',
        // marginTop: 8,
        fontSize: 16,
        color: '#191919',
        fontWeight: 500,
    },
    view2in1btrong: {
        alignItems: 'center',
        marginLeft: 6,
        borderRadius: 22,
        width: 55,
        height: 16,
        borderColor: '#7A86AE',
        borderWidth: 1,
    },
    buttonbook: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: '3%',
        height: 60,
        backgroundColor: '#5CB15A',
        width: '45%', // 316
        // alignItems: 'center',
        // marginLeft: 6,
        // borderRadius: 22,
        // width: 55,
        // height: 16,
        // borderColor: '#7A86AE',
        // borderWidth: 1,
    },
    buttonbooktext: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 500,
    },
    bottom: {
        width: '100%',
        height: 10,
        backgroundColor: 'red',
    },
})