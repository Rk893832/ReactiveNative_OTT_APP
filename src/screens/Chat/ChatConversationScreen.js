import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ChatConversationScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there!", sender: 'user' },
    { id: 2, text: "Hello! How can I help you?", sender: 'other' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessageContainer : styles.otherMessageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    userMessageContainer: {
      backgroundColor: '#DCF8C5',
      alignSelf: 'flex-end',
      borderRadius: 8,
      padding: 8,
      marginVertical: 4,
    },
    otherMessageContainer: {
      backgroundColor: '#E0E0E0',
      alignSelf: 'flex-start',
      borderRadius: 8,
      padding: 8,
      marginVertical: 4,
    },
    messageText: {
      fontSize: 16,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    sendButton: {
      marginLeft: 8,
      backgroundColor: '#007BFF',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    sendButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default ChatConversationScreen;
