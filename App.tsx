/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';

const Stack = createNativeStackNavigator();

 function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen name="Weather App" component={HomeScreen}  options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
