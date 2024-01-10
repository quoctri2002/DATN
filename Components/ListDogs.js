import { Avatar, ListItem } from '@rneui/themed';
import { FlatList, StyleSheet } from 'react-native';

const ListDogsData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tri husky',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Duc Minh',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tri giau',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Tri giau',
  },
];

export const ListDogs = () => {
  const renderItem = ({ item }) => (
    <ListItem containerStyle={styles.item}>
      <Avatar size={90} containerStyle={styles.imageContainer} avatarStyle={styles.image} source={{ uri: item.image }} />
      <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
    </ListItem>
  );

  return <FlatList horizontal keyExtractor={(item) => item.id} data={ListDogsData} renderItem={renderItem} showsHorizontalScrollIndicator={false} />;
};

const styles = StyleSheet.create({
  item: { flexDirection: 'column', flexShrink: 0 },
  image: { borderRadius: 15, objectFit: 'cover', flexShrink: 0 },
  title: { color: '#5F5F63', fontWeight: '400', fontSize: 14 },
});
