import { Image } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';

export const Article = ({ title, children, icon, containerStyle }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <View style={styles.heading}>
        {icon && <Image style={styles.image} source={icon} />}
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
    width: 'auto',
    height: 'auto',
    borderStyle: 'solid',
    overflow: 'hidden',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    width: '100%',
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