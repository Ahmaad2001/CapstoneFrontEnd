import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Main" component={AppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
