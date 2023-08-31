import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />

        
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


