import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./AppNavigation";
import Orders from "../screens/Orders";
import Checkout from "../screens/Checkout";

const Stack = createStackNavigator();

export function OrderNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
