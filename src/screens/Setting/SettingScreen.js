import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';

const SettingsScreen = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const handleToggle1 = () => setToggle1(!toggle1);
  const handleToggle2 = () => setToggle2(!toggle2);

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Toggle 1</Text>
        <SwitchToggle
          containerStyle={styles.toggleContainer}
          circleStyle={styles.toggleCircle}
          switchOn={toggle1}
          onPress={handleToggle1}
          circleColorOff="white"
          circleColorOn="green"
          backgroundColorOn="gray"
          backgroundColorOff="gray"
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Toggle 2</Text>
        <Switch
          value={toggle2}
          onValueChange={handleToggle2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  toggleContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 5,
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default SettingsScreen;
