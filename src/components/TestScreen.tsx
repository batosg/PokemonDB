import * as React from "react";
import { Button, View, Text } from "react-native";

function TestScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Test Screen</Text>
      <Button title="Go to Info" onPress={() => navigation.navigate("Info")} />
    </View>
  );
}
export default TestScreen;

// ... other code from the previous section
