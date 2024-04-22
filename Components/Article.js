import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Button } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';

export const Article = ({ title, children, icon, containerStyle, asLink }) => {
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <View style={styles.heading}>
        <Image style={styles.image} source={icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
      {children}
      {asLink && (
        <Button
          iconRight
          containerStyle={{ marginTop: 'auto' }}
          buttonStyle={styles.button}
          onPress={() => navigation.navigate(asLink)}
          icon={<MaterialIcons name="chevron-right" size={24} color="black" />}
          titleStyle={{ fontSize: 14, color: 'black' }}>
          Check Pets
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 26,
    flexDirection: 'column',
    width: 'auto',
    height: 'auto',
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    padding: 10,
    width: '100%',
  },
  image: {
    width: 26,
    height: 26,
  },
  heading: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
  },
  button: {
    padding: 5,
    backgroundColor: 'transparent',
    textAlign: 'center',
    borderWidth: 0,
  },
});
