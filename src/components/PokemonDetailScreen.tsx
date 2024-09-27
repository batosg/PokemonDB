import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { createClient } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
// Create a single Supabase client for interacting with your database
const supabase = createClient(
  "https://dqkucpsuytkkmhqenqmd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxa3VjcHN1eXRra21ocWVucW1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MTk2OTUsImV4cCI6MjA0Mjk5NTY5NX0.nFy84t5YR2As5nupx1diDIGUR1YXmVyf2LFpE8BY21k"
);

function PokemonDetailScreen({ route }: { route: any }) {
  const { url } = route.params;
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { data, error } = useQuery({
    queryKey: ["pokemon", url],
    queryFn: async () => {
      const response = await fetch(url);
      const data = await response.json();
      // Insert Pokémon name into Supabase
      const { error } = await supabase.from("pokemon").upsert({
        pokemon_name: data.name,
        ability1: data.abilities[0]?.ability.name,
        ability2: data.abilities[1]?.ability.name,
      });

      if (error) {
        console.error("Error inserting data:", error);
      }

      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setPokemonData(data);
      setLoading(false);
    }
    if (error) {
      console.error("Error fetching Pokémon data:", error);
      setLoading(false);
    }
  }, [data, error]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        pokemonData && (
          <View style={styles.card}>
            <Text style={styles.title}>Name: {pokemonData.name}</Text>
            <Text style={styles.subTitle}>Height: {pokemonData.height}</Text>
            <Text style={styles.subTitle}>
              Abilities:{" "}
              {pokemonData.abilities
                ?.map((ability: any) => ability.ability.name)
                .join(", ")}
            </Text>
            <Image
              source={{ uri: pokemonData.sprites.front_default }}
              style={styles.image}
            />
          </View>
        )
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF0000", // Pokémon red
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#000000", // Dark gray for subtitles
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
});

export default PokemonDetailScreen;
