import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../components/AboutScreen";
import DetailsScreen from "../components/DetailsScreen";
import HomeScreen from "../components/HomeScreen";
import PokemonDetailScreen from "../components/PokemonDetailScreen";
import NewScreen from "../components/NewScreen";

const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreen}
      />
      <Stack.Screen name="NewScreen" component={NewScreen} />
    </Stack.Navigator>
  );
}

export default HomeTab;
