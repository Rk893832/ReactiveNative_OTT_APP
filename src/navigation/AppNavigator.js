import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import ChatListScreen from '../screens/Chat/ChatListScreen';
import ChatConversationScreen from '../screens/Chat/ChatConversationScreen';
import SidebarScreen from '../components/commons/Sidebar/SidebarScreen';
import HeaderScreen from '../components/commons/Header/HeaderScreen';
import FooterScreen from '../components/commons/Footer/FooterScreen';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



import { View } from 'react-native';
import CommonFooter from '../components/commons/Footer/FooterScreen';


function EmptyScreen() {
  return (
    <View>
    </View>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <CommonFooter {...props} options={{ headerShown: false }} />}
      screenOptions={{ headerShown: false }} >
      <Tab.Screen name="home1" component={HomeScreen} />
      {/* <Tab.Screen name="Chat" component={EmptyScreen} />
      <Tab.Screen name="Profile" component={EmptyScreen} /> */}
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (

    // <Drawer.Navigator drawerContent={CustomDrawerContent}>

    <Drawer.Navigator >
      {/* <Drawer.Screen name="home" component={Home} /> */}
      {/* <Drawer.Screen name="Profile" component={EmptyScreen} /> */}
      {/* <Stack.Screen name="Settings" component={EmptyScreen} /> */}
      </Drawer.Navigator>
  );
}



const StackNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="home">       
      
      <Stack.Screen name="Login" component={LoginScreen} options={getStackScreenOptions()} />
      <Stack.Screen name="Signup" component={SignupScreen} options={getStackScreenOptions()} />
      <Stack.Screen name="home" component={HomeScreen} options={{ header: () => <HeaderScreen title="Home" /> }} />
      <Stack.Screen name="chatList" component={ChatListScreen} options={getStackScreenOptions()}/>
      <Stack.Screen name="chatConversation" component={ChatConversationScreen} options={getStackScreenOptions()}/>
      
     
      {/* <Stack.Screen name="Header" component={() => <HeaderScreen title='Header' />} options={{ headerShown: false }} />
      <Stack.Screen name="Footer" component={FooterScreen} />
      <Stack.Screen name="Sidebar" component={SidebarScreen} /> */}
    </Stack.Navigator>
    // </NavigationContainer>
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

