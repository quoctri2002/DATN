import { StyleSheet, Text, View, Pressable, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from '@rneui/base';
import { useDispatch } from 'react-redux';
import { setAddress } from '../../store/test/actionsAddproductcart';
import { useSelector } from 'react-redux';

export function Adress({ action }) {
    const navigation = useNavigation();
    // const { setModalVisible } = action;
    const [selectedProvince, setSelectedProvince] = React.useState("");
    const [selectedCity, setSelectedCity] = React.useState("");
    const [streetAddress, setStreetAddress] = React.useState("");
    const [phoneAddress, setphoneAddress] = React.useState("");
    const [nameAddress, setnameAddress] = React.useState("");
    const [addAdress, setAddAdress] = React.useState(false);
    const [dataAddress, setdataAddress] = React.useState([]);

    const dispatch = useDispatch();


    let fullAddress = "";
    if (streetAddress) {
        fullAddress += streetAddress + ", ";
    }
    if (selectedCity) {
        fullAddress += selectedCity + ", ";
    }

    if (selectedProvince) {
        fullAddress += selectedProvince;
    }


    const getCityNameById = (id) => {
        const cityObject = dataCity.find(city => city.key === id);
        return cityObject ? cityObject.value : ""; // Trả về giá trị value nếu tìm thấy đối tượng, ngược lại trả về chuỗi rỗng
    };
    const getProvinceNameById = (id) => {
        const ProvinceObject = dataTinh.find(city => city.key === id);
        return ProvinceObject ? ProvinceObject.value : ""; // Trả về giá trị value nếu tìm thấy đối tượng, ngược lại trả về chuỗi rỗng
    };

    const profile = useSelector((state) => state.user.profile.CUSTOMER_ID); // chuyển qua id người dùng

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://206.189.45.141/api/getinfoaddress.php?id=${profile}`); // chuyển qua id người dùng
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const resJson = await response.json();
                setdataAddress(resJson.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddAddress = async () => {
        try {
            // Send a POST request to add-infoaddress.php with the new address data
            const response = await fetch('http://206.189.45.141/api/add-infoaddress.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    addressdetail: fullAddress,
                    addressphone: phoneAddress,
                    addresname: nameAddress,
                    customerid: profile // chuyển qua id người dùng.
                }),
            });
            const updatedResponse = await fetch(`http://206.189.45.141/api/getinfoaddress.php?id=${profile}`);
            if (!updatedResponse.ok) {
                throw new Error('Failed to fetch updated data');
            }
            const updatedResJson = await updatedResponse.json();
            setdataAddress(updatedResJson.data);

            // Set addAdress to false to hide the form
            alert("Add Address Successfully");
            setAddAdress(false);

            if (!response.ok) {
                alert(response.message);
                throw new Error('Failed to add address');
            }

        } catch (error) {
            console.error('Error adding address:', error);
        }
    };
    const handleItemPress = (item) => {
        dispatch(setAddress(item));
        navigation.navigate('Pay');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Pay')} style={styles.back}>
                    <Feather name="chevron-left" size={25} color="white" />
                </Pressable>
                <Text style={styles.text}>Adress</Text>
            </View>
            <ScrollView>


                <View style={{ width: '80%', alignSelf: 'center', paddingTop: '5%' }}>

                    <FlatList
                        keyExtractor={(item) => item.ADDRESS_ID}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => handleItemPress(item)}>
                                <View style={styles.boxAdress}>
                                    <Text style={styles.txtTitleAdress}>Adress {item.ADDRESS_ID}</Text>
                                    <Text>
                                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Recipient: </Text>
                                        {item.ADDRESS_NAME}
                                    </Text>
                                    <Text>
                                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Phone: </Text>
                                        {item.ADDRESS_PHONE}
                                    </Text>
                                    <Text>
                                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Address:</Text>
                                        {item.ADDRESS_DETAIL}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }
                        pagingEnabled
                        snapToAlignment="center"
                        data={dataAddress}
                    />


                    {
                        !addAdress ?
                            <Button buttonStyle={{ backgroundColor: '#5CB15A', borderRadius: 20, paddingVertical: 10, marginTop: 10, width: '40%', alignSelf: 'flex-end' }} onPress={() => setAddAdress(true)}>
                                Add Adress
                            </Button> :
                            <View>
                                <Text style={styles.txtTitle}>Recipient:</Text>
                                <Input
                                    placeholder=""
                                    style={styles.input}
                                    inputContainerStyle={styles.inputContainer}
                                    onChangeText={(text) => setnameAddress(text)}
                                />

                                <Text style={styles.txtTitle}>Phone:</Text>
                                <Input
                                    placeholder=""
                                    style={styles.input}
                                    inputContainerStyle={styles.inputContainer}
                                    onChangeText={(text) => setphoneAddress(text)}
                                />
                                <Text style={styles.txtTitle}>Province/City</Text>
                                <SelectList
                                    setSelected={(val) => {
                                        const Province = getProvinceNameById(val); // Lấy chuỗi tương ứng từ mảng dataCity
                                        setSelectedProvince(Province); // Truyền chuỗi đã lấy vào state selectedCity
                                    }}
                                    data={dataTinh}
                                    save="selectedProvince"
                                    placeholder='Province'
                                    boxStyles={{ borderRadius: 20, elevation: 5, borderWidth: 0.5, backgroundColor: '#FFFFFF' }}
                                />

                                <Text style={styles.txtTitle}>City/Distric</Text>
                                <SelectList
                                    setSelected={(val) => {
                                        const cityName = getCityNameById(val); // Lấy chuỗi tương ứng từ mảng dataCity
                                        setSelectedCity(cityName); // Truyền chuỗi đã lấy vào state selectedCity
                                    }}
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
                                    onChangeText={(text) => setStreetAddress(text)}
                                />
                                <View style={styles.button}>
                                    <Button onPress={handleAddAddress} buttonStyle={{ width: '90%', backgroundColor: '#5CB15A', borderRadius: 20, paddingVertical: 10, marginTop: 10 }}>
                                        Add Adress
                                    </Button>
                                    <Button onPress={() => setAddAdress(false)} buttonStyle={{ width: '100%', backgroundColor: '#5CB15A', borderRadius: 20, paddingVertical: 10, marginTop: 10 }}>
                                        Cancel
                                    </Button>
                                </View>
                            </View>
                    }
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    txtTitleAdress: {
        fontWeight: '700',
        fontSize: 16,
        color: '#484848'
    },
    button: {
        marginTop: 5,
        width: '78%',
        flexDirection: 'row',
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
        paddingTop: '8%',
        paddingHorizontal: '4%',
        paddingBottom: '4%',
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