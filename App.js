import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./pages/home";
import Profile from "./pages/profile";
import Followers from "./pages/followers";
import Story from "./pages/story";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="PROFILE" component={Profile} />
        {/* //options={{headerShown:true}} for specific screen*/}
        <Stack.Screen  name="FOLLOWERS" component={Followers} />
        <Stack.Screen name="STORY" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};