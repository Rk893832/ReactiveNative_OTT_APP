import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

const FooterScreen = ({ navigation, state }) => {
  // Define tab icons and labels
  const tabIcons = {
    Home: { icon: 'home', label: 'Home' },
    Chat: { icon: 'message1', label: 'Chat' },
    Profile: { icon: 'user', label: 'Profile' },
  };

  return (
    <View style={styles.footer}>
      {state.routes.map((route, index) => {
        const tabInfo = tabIcons[route.name]; // Retrieve tab info using route name

        if (tabInfo) {
          const isFocused = state.index === index;
          const { icon, label } = tabInfo;

          return (
            <TouchableOpacity
              key={index}
              style={styles.tabButton}
              onPress={() => navigation.navigate(route.name)}
            >
              <View style={styles.iconContainer}>
              {/* <Feather name={icon} size={24}  color={isFocused ? '#0b81fe' : 'gray'} /> */}
                <AntDesign
                  name={icon}
                  size={24}
                  color={isFocused ? '#0b81fe' : 'gray'}
                />
              </View>
              <Text style={isFocused ? styles.labelFocused : styles.label}>{label}</Text>
            </TouchableOpacity>
          );
        }
        return null; // Handle cases where route name is not in tabIcons
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  tabButton: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  label: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  labelFocused: {
    fontSize: 12,
    color: '#0b81fe',
    marginTop: 4,
  },
});

export default FooterScreen;
