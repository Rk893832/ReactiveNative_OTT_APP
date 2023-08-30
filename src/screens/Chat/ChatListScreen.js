import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Avatar } from 'react-native-paper';

const ChatListScreen = ({ navigation }) => {
  const chatData = [
    { id: 1, contact: 'John', lastMessage: 'Hey, how are you?' },
    { id: 2, contact: 'Rohit', lastMessage: 'See you later!' },
    // Add more chat data here
  ];

  const renderItem = ({ item }) => (
    <List.Item
      title={item.contact}
      description={item.lastMessage}
      titleStyle={styles.contactTitle}
      descriptionStyle={styles.lastMessage}
      left={() => <Avatar.Text label={item.contact[0]} size={40} style={styles.avatar} />}
      onPress={() => navigation.navigate('ChatConversation', { contact: item.contact })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  listContainer: {
    padding: 16,
  },
  contactTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  lastMessage: {
    color: '#777',
  },
  avatar: {
    backgroundColor: '#007BFF',
  },
});

export default ChatListScreen;
