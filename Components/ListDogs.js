import { Avatar, ListItem } from '@rneui/themed';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const ListDogs = () => {
  const myPetList = useSelector((state) => state.myPets.pets);

  const renderItem = ({ item }) => (
    <ListItem containerStyle={styles.item}>
      <Avatar size={90} avatarStyle={styles.image} source={{ uri: item.image }} />
      <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
    </ListItem>
  );

  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.id}
      data={myPetList}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: { flexDirection: 'column', flexShrink: 0 },
  image: { borderRadius: 15, objectFit: 'cover', flexShrink: 0 },
  title: { color: '#5F5F63', fontWeight: '400', fontSize: 14 },
});
