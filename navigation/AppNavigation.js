import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Orders from "../screens/Orders";
import Checkout from "../screens/Checkout";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "basket" : "basket-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#007AFF", // Change to your preferred color
        inactiveTintColor: "#A0A0A0", // Change to your preferred color
        labelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        style: {
          backgroundColor: "#F4F4F4", // Change to your preferred color
          borderTopWidth: 1,
          borderTopColor: "#EDEDED", // Change to your preferred color
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
