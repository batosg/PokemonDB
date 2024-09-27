import * as React from "react";
import { useEffect, useState } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";

function HomeScreen({ navigation }: { navigation: any }) {
  const [data, setData] = useState<any>(null);
  const [isReversed, setIsReversed] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData);
      });
  }, []);

  const handlePress = (url: string) => {
    navigation.navigate("PokemonDetailScreen", { url }); // Navigate to PokemonDetailScreen with URL as param
  };

  const toggleReverse = () => {
    setIsReversed((prev) => !prev); // Toggle reverse state
  };

  return (
    <>
      <View style={{ alignItems: "flex-end", margin: 10 }}>
        <Button title="Reverse List" onPress={toggleReverse} />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {data ? (
          data.results
            .slice()
            .sort(() => (isReversed ? -1 : 1))
            .map((pokemon: any, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(pokemon.url)}
              >
                <Text style={{ color: "blue", marginBottom: 10 }}>
                  {pokemon.name}
                </Text>
              </TouchableOpacity>
            ))
        ) : (
          <Text>Loading...</Text>
        )}
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
        <Button
          title="Go to New"
          onPress={() => navigation.navigate("NewScreen")}
        />
      </View>
    </>
  );
}
export default HomeScreen;
