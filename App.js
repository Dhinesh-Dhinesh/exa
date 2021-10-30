import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./pages/home";
import Interface from "./pages/interface";
import Datas from "./pages/datas";
import Story from "./pages/story";

import {Provider} from 'react-redux';
import {Store} from './redux/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="INTERFACE" component={Interface} />
        {/* //options={{headerShown:true}} for specific screen*/}
        <Stack.Screen name="DATAS" component={Datas} />
        <Stack.Screen name="STORY" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};