import { createStackNavigator } from "@react-navigation/stack";
import AppNavigation from "./AppNavigation";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AppNavigation} />
    </Stack.Navigator>
  );
}
