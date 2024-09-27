import * as React from "react";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { createClient } from "@supabase/supabase-js";

// Create a single Supabase client for interacting with your database
const supabase = createClient(
  "https://dqkucpsuytkkmhqenqmd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxa3VjcHN1eXRra21ocWVucW1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MTk2OTUsImV4cCI6MjA0Mjk5NTY5NX0.nFy84t5YR2As5nupx1diDIGUR1YXmVyf2LFpE8BY21k"
);

function PokemonDetailScreen({ route }: { route: any }) {
  const { url } = route.params;
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Pokémon data
        const response = await fetch(url);
        const data = await response.json();
        setPokemonData(data);

        // Insert Pokémon name into Supabase
        const { error } = await supabase
          .from("pokemon") // Replace with your table name
          .upsert([
            {
              pokemon_name: data.name,
              ability1: data.abilities[0].ability.name,
              ability2: data.abilities[1].ability.name,
            },
          ]); // Adjust the key if your column name is different

        if (error) {
          console.error("Error inserting data:", error);
        }
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 16,
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        pokemonData && (
          <>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Name: {pokemonData.name}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Height: {pokemonData.height}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Abilities:{" "}
              {pokemonData.abilities
                ?.map((ability: any) => ability.ability.name)
                .join(", ")}
            </Text>
          </>
        )
      )}
    </View>
  );
}

export default PokemonDetailScreen;
