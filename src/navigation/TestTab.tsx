import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { InfoScreen } from "../components/InfoScreen";
import TestScreen from "../components/TestScreen";

const Stack = createNativeStackNavigator();

export default function TestTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
    </Stack.Navigator>
  );
}
