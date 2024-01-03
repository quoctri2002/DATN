import { Image } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';

export const Article = ({ title, children, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image style={styles.image} source={icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 26,
    flexDirection: 'column',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#5F5F63',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  image: {
    width: 26,
    height: 26,
  },
  heading: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
  },
});
