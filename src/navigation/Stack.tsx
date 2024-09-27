import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./HomeTab";
import { TabBarIcon } from "./TabBarIcon";
import SettingsTab from "./SettingsTab";
import TestTab from "./TestTab";

const Tab = createBottomTabNavigator();
function MyStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TestTab"
        component={TestTab}
        options={{
          title: "Test",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code" : "code-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyStack;
