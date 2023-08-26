import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

const CommonFooter = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigateToScreen('Home')}
      >
        <AntDesign name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigateToScreen('Chat')}
      >
        <Feather name="message-square" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigateToScreen('Profile')}
      >
        <FontAwesome name="user-circle" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    backgroundColor: '#0b81fe',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  option: {
    alignItems: 'center',
  },
});

export default CommonFooter;
