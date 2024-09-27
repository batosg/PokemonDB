import * as React from "react";
import { Button, View, Text } from "react-native";

function AboutScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
export default AboutScreen;

// ... other code from the previous section
