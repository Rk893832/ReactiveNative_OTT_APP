import * as React from 'react';
import { Text, TouchableOpacity,View,StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useWindowDimensions } from 'react-native';


import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import ChatListScreen from '../screens/Chat/ChatListScreen';
import ChatConversationScreen from '../screens/Chat/ChatConversationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import FooterScreen from '../components/commons/Footer/FooterScreen';
import SettingsScreen from '../screens/Setting/SettingScreen';
import ChangePasswordScreen from '../screens/Setting/ChangePasswordScreen';
import OtpVerifyScreen from '../screens/Auth/OtpVerifyScreen';


import SidebarScreen from '../components/commons/Sidebar/SidebarScreen';
import HeaderScreen from '../components/commons/Header/HeaderScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function EmptyScreen() {
  return (
    <View>
    </View>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator  tabBar={props => <FooterScreen {...props}/> } screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      // options={({ route, navigation  }) => ({
      //   header: () => <HeaderScreen route={route} navigation={navigation} />,
      // })}
      />
      <Tab.Screen name="Chat" component={ChatListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="ChatConversation" component={ChatConversationScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}


function DrawerNavigator() {

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator gestureEnabled={true}  
    // drawerContent={ props => CustomDrawerContent(props) }
    // defaultStatus="open"
    screenOptions={{
      drawerStyle: {
        backgroundColor: 'white',
        width: 240,
        drawerType: isLargeScreen ? 'permanent' : 'back',
        drawerStyle: isLargeScreen ? null : { width: '100%' },
        overlayColor: 'transparent',
      },
    }}>
      <Drawer.Screen name="Home1" component={TabNavigator}  />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    

    </Drawer.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={LoginScreen} options={getStackScreenOptions()} />
      <Stack.Screen name="Signup" component={SignupScreen} options={getStackScreenOptions()} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
};

const getStackScreenOptions = (title) => ({
  title,
  headerStyle: {
    backgroundColor: '#0bbefe',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff', // Customize the color
    textTransform: 'uppercase', // Convert text to uppercase
  }
});



const App = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
export default App;

