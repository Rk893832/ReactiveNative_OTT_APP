import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Avatar } from 'react-native-paper';


const ChatListScreen = ({ navigation }) => {
  const chatData = [
    { id: 1, contact: 'John', lastMessage: 'Hey, how are you?' },
    { id: 2, contact: 'Jane', lastMessage: 'See you later!' },
    // Add more chat data here
  ];

  const renderItem = ({ item }) => (
    <List.Item
      title={item.contact}
      description={item.lastMessage}
      left={() => <Avatar.Text label={item.contact[0]} />}
      onPress={() => navigation.navigate('ChatScreen', { contact: item.contact })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ChatListScreen;
