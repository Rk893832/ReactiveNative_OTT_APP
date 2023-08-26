import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HeaderScreen = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.profileContainer}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        }}
        style={styles.profilePhoto}
      />
      <Text style={styles.usernameText}>John Doe</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items on the opposite sides
    alignItems: 'center',
    backgroundColor: '#0bbefe',
    padding: 16,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  usernameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25, // To create a circular photo
    marginRight: 10,
  },
});

export default HeaderScreen;
