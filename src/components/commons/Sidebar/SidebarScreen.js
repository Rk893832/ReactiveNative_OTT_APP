import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SidebarScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.app}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleSidebar}>
      <Feather name="sidebar" size={24} color="red" />
      </TouchableOpacity>
      <View style={[styles.sidebar, sidebarVisible && styles.sidebarActive]}>
        <View style={styles.sidebarContent}>
          <Text style={styles.sidebarLink}>Home</Text>
          <Text style={styles.sidebarLink}>Profile</Text>
          <Text style={styles.sidebarLink}>Settings</Text>
          <Text style={styles.sidebarLink}>Messages</Text>
          <Text style={styles.sidebarLink}>Logout</Text>
        </View>
      </View>
      <View style={styles.content}>
        {/* Your app's main content goes here */}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  toggleButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 999,
  },
 
  sidebar: {
    width: 250,
    backgroundColor: '#333',
    color: '#fff',
    transitionProperty: 'transform',
    transitionDuration: 300,
    transform: [{ translateX: -250 }],
    overflowY: 'auto',
  },
  sidebarActive: {
    transform: [{ translateX: 0 }],
  },
  sidebarContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sidebarLink: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
  },
  content: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
});


export default SidebarScreen;
