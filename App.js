import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from './src/screens/Details/Details.js'

const Stack = createNativeStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="details"
          component={Details}
          options={{title: 'News App'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

