import { Image, StyleSheet, Text, View, Pressable, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, {useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Detail() {
  const navigation = useNavigation();
  let [count, setCount] = React.useState(0);

  const increase = () => setCount(count+1) 
  const decrease = () => count >= 1 && setCount(count-1) 

  const images = [
    {
      id: 1,
      image: require('../../assets/images/spDetail.png'),
    },
    {
      id: 2,
      image: require('../../assets/images/spDetail.png'),
    },
    {
      id: 3,
      image: require('../../assets/images/spDetail.png'),
    },
    {
      id: 4,
      image: require('../../assets/images/spDetail.png'),
    },
    {
      id: 5,
      image: require('../../assets/images/spDetail.png'),
    },
  ];
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Shop')} style={styles.back}>
          <Feather name="chevron-left" size={30} color="white" />
        </Pressable>
        <Text style={styles.text}>Josi Dog Master Mix</Text>
      </View>

      <View style={styles.view2}>
        <FlatList
          keyExtractor={(item) => item.id}
          style={styles.imageview2}
          data={images}
          renderItem={({ item }) => <Image source={item.image} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
        />
        <View style={styles.view2in}>
          <View style={styles.view2in1a}>
            <Text style={styles.textview2in2a}>Josi Dog Master Mix</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.textview2in2b}>Brand: Josera</Text>
              <Text style={styles.txtPrice}>Price: 1500.00$</Text>
            </View>
            <View style={styles.view2in3}>
              <Text style={styles.textview2in3a}>4.0</Text>
              <Image source={require('../../assets/4sao.png')} />
              <Text>(100 review)</Text>
            </View>
          </View>

          <Text style={styles.view2intexta}>
            Dr. Shehan, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic “Petz & Vetz” Our
            paradise is situated in the heart of the town with a pleasant environment. We are ready to treat your beloved doggos & puppers with love
            and involvement. Book the appointment now !
          </Text>
          <View style={styles.view2in1b}>
            <Text style={styles.view2in1btext}>Recommended For:</Text>
            <View style={styles.view2in1btrong}>
              <Text style={{ fontWeight: '500', color: '#5F5F63', fontSize: 14 }}>Bella</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '45%', paddingTop: '2%' }}>
            <Text style={{ color: '#868889', fontWeight: '500', fontSize: 16 }}>Quantity</Text>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <TouchableOpacity onPress={decrease}>
                <Feather name="minus" size={22} color={count <= 0 ? '#C7C7C7' : '#6CC51D'} />
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 19,
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                  textAlign: 'center',
                  width: 50,
                  borderColor: '#C7C7C7',
                }}>
                {count}
              </Text>
              <TouchableOpacity onPress={increase}>
                <Feather name="plus" size={22} color="#6CC51D" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonbook}>
            <Text style={styles.buttonbooktext}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  txtPrice: {
    color: '#5CB15A',
    fontWeight: '400',
    fontSize: 14,
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
    fontSize: 16,
    paddingLeft: '7%',
    marginVertical: 'auto',
    width: '90%',
    textAlign: 'center',
    marginLeft: '4%',
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

  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F3F2F5',
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
    fontWeight: '500',
  },
  view2: {
    position: 'relative',
    height: '85%', // 787
    width: '100%',
    alignItems: 'center',
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
    height: 'auto',
    width: '48%',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    padding: '2%',
    gap: 5,
  },
  textview2in2a: {
    width: '88%',
    color: '#141415',
    fontSize: 26,
    fontWeight: '900',
  },
  textview2in2b: {
    color: '#064E57',
    fontSize: 18,
    fontWeight: '500',
  },
  view2in3: {
    width: '55%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textview2in3a: {
    color: '#000000',
    fontWeight: '500',
  },
  view2in4: {
    marginTop: 12,
    width: '88%',
    justifyContent: 'space-between',
    height: 16,
    flexDirection: 'row',
  },
  view2in5: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  view2in6: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  view2in6: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  view2in1text: {
    marginLeft: '5%',
    color: '#5CB15A',
    fontWeight: '500',
    fontSize: 17,
  },
  view2intexta: {
    marginTop: '3%',
    width: '50%',
    color: '#191919',
    fontWeight: '400',
    fontSize: 13,
  },
  view2intextb: {
    marginTop: '5%',
    width: '45%',
    color: '#191919',
    fontWeight: '400',
    fontSize: 13,
  },
  view2in1b: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  view2in1btext: {
    fontSize: 16,
    color: '#191919',
    fontWeight: '500',
  },
  view2in1btrong: {
    marginLeft: 6,
    borderRadius: 22,
    width: 55,
    height: 'auto',
    borderColor: '#7A86AE',
    borderWidth: 1,
    alignItems: 'center',
  },
  buttonbook: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '3%',
    height: 60,
    backgroundColor: '#5CB15A',
    width: '50%',
  },
  buttonbooktext: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: '500',
  },
});
