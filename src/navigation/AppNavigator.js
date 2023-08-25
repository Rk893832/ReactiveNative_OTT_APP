import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/Home/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import SidebarScreen from '../screens/Sidebar/SidebarScreen';

const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Signup" component={SignupScreen} options={{
                    headerTitleStyle: commonHeaderTitleStyle,
                }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sidebar" component={SidebarScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const commonHeaderTitleStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'skyblue', // Customize the color
};

export default AppNavigator;

