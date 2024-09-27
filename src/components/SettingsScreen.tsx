import { View, Text, Button } from "react-native";

export default function SettingsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to My Page"
        onPress={() => navigation.navigate("MyPage")}
      />
    </View>
  );
}
