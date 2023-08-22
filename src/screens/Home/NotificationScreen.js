import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import NotificationItem from '../components/NotificationItem';

const dummyNotifications = [
  {
    id: 1,
    title: 'New Message',
    message: 'You have a new message from John Doe.',
  },
  {
    id: 2,
    title: 'Event Reminder',
    message: 'Don\'t forget the team meeting at 3 PM.',
  },
  // Add more notification objects here
];

const NotificationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Notifications</Text>
      {dummyNotifications.map(notification => (
        <NotificationItem
          key={notification.id}
          title={notification.title}
          message={notification.message}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default NotificationScreen;
