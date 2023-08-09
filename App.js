import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./navigation/AppNavigation";
import LaundryDetails from "./screens/Laundrydetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Checkout from "./screens/Checkout";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={new QueryClient()}>
        <Stack.Navigator initialRouteName="Main" headerMode="none">
          <Stack.Screen name="Main" component={AppNavigation} />
          <Stack.Screen name="LaundryDetails" component={LaundryDetails} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
