import React from 'react';
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/screens/Login/Login.js';

const Stack = createNativeStackNavigator();

export default function App( navigation ) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "News App" }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });