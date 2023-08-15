import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./navigation/AppNavigation";
import LaundryDetails from "./screens/Laundrydetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import UserContext from "./context/UserContext";

import Checkout from "./screens/Checkout";
import { Text, View } from "react-native";
import Services from "./screens/Services";
import { getToken } from "./api/laundries";
// =========
import { LogBox } from "react-native";
import BaskectContext from "./context/BascketContext";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import ThankYou from "./screens/ThankYou";
import SavedAddresses from "./screens/SavedAddresses";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
// =========

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  const [baskect, setBaskect] = useState({});
  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setUser(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <NavigationContainer>
      <QueryClientProvider client={new QueryClient()}>
        <BaskectContext.Provider value={{ baskect, setBaskect }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Stack.Navigator initialRouteName="Main" headerMode="none">
              <Stack.Screen
                name="Main"
                component={AppNavigation}
                options={{}}
              />
              <Stack.Screen name="LaundryDetails" component={LaundryDetails} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Checkout" component={Checkout} />
              <Stack.Screen name="Services" component={Services} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Thankyou" component={ThankYou} />
              <Stack.Screen name="SavedAddresses" component={SavedAddresses} />
            </Stack.Navigator>
          </UserContext.Provider>
        </BaskectContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
