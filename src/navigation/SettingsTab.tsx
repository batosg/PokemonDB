import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../components/SettingsScreen";
import MyPage from "../components/MyPage";

const Stack = createNativeStackNavigator();

function SettingsTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
}

export default SettingsTab;
