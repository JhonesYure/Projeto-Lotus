import React, {Component} from 'react';
import {
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NativeBaseProvider, Box, Center} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import ProfileScreen from './screens/ProfileScreen';
/* import CameraComponent from './components/Camera'; */
import EditAccount from './screens/EditAccount';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              tabBarStyle: {display: 'none'},
              headerShown: false,
              tabBarVisible: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              tabBarStyle: {display: 'none'},
              headerShown: false,
              tabBarVisible: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarStyle: {display: 'none'},
              headerShown: false,
              tabBarVisible: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarStyle: {display: 'none'},
              headerShown: false,
              tabBarVisible: false,
            }}
          />
          <Stack.Screen
            name="Create"
            component={CreateAccount}
            options={{
              tabBarStyle: {display: 'none'},
              headerShown: false,
              tabBarVisible: false,
            }}
          />
          <Stack.Screen
            name="Edit"
            component={EditAccount}
            options={{
              tabBarStyle: {display: 'none'},
              headerShown: false,
              tabBarVisible: false,
            }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
