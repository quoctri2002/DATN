import { FlatList, StyleSheet, View } from 'react-native';
import { Avatar, ListItem } from '@rneui/themed';

const PetStatusListData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 88,
    mood: 48,
    food: 52,
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 88,
    mood: 48,
    food: 52,
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    health: 88,
    mood: 48,
    food: 52,
  },
];

export default function PetStatusList() {
  const renderItem = ({ item }) => (
    <ListItem containerStyle={styles.itemContainerStyle} bottomDivider>
      <Avatar containerStyle={{ margin: 0 }} size={42} avatarStyle={styles.avatarStyle} source={{ uri: item.image }} />
      <ListItem.Content style={styles.itemContent}>
        {['Health', 'Food', 'Mood'].map((title, index) => (
          <View key={index} style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ListItem.Title style={styles.itemTitle}>{title}</ListItem.Title>
              <View style={styles.line}></View>
              <ListItem.Subtitle style={styles.itemSubTitle}>{`${item[title.toLowerCase()]}%`}</ListItem.Subtitle>
            </View>
          </View>
        ))}
      </ListItem.Content>
    </ListItem>
  );

  return (
    <FlatList
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      data={PetStatusListData}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  itemContainerStyle: { width: 'auto', paddingVertical: 10, marginHorizontal: 12, paddingHorizontal: 0, flex: 1, borderColor: '#000000' },
  avatarStyle: { borderRadius: 15, objectFit: 'cover', flexShrink: 0 },
  itemContent: { flexDirection: 'column' },
  title: { color: '#5F5F63', fontWeight: '400', fontSize: 14 },
  line: { borderRadius: 10, height: 5, width: 20, backgroundColor: '#27AE60' },
  itemTitle: { fontSize: 10 },
  itemSubTitle: { fontSize: 8 },
});
