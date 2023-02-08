import React, {useEffect} from 'react';
import About from'./src/screens/About/About.js';
import {StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen
          name="about",
          component={About}
          options={{title: 'News App'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
