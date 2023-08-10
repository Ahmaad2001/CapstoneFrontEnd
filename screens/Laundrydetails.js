import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getLaundryById } from "../api/laundries";
import { BASE_URL } from "../api";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Laundrydetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const { data: laundry } = useQuery({
    queryKey: ["laundry"],
    queryFn: () => getLaundryById(id),
  });

  if (!laundry) {
    return <Text>details</Text>;
  }

  return (
    <View style={styles.centeredContainer}>
      <View style={styles.header}>
        <SafeAreaView>
          <MaterialIcons
            name="arrow-back"
            size={50}
            color="black"
            onPress={() => navigation.navigate("Home")}
          />
        </SafeAreaView>
      </View>
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: BASE_URL + laundry.image }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{laundry.name}</Text>
          <Text style={styles.location}>{laundry.location}</Text>
          <Text style={styles.description}>{laundry.description}</Text>
          <Text style={styles.reviews}>{laundry.reviews}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Try it"
            onPress={() => navigation.navigate("Checkout")}
          />
          <Button title="Reviews" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    marginBottom: 20,
    padding: 24,
    width: "90%",
    backgroundColor: "#fff",
    elevation: 4,
    height: "60%",
    gap: 20,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  location: {
    color: "#666",
    marginBottom: 8,
  },
  description: {
    marginBottom: 20,
  },
  reviews: {
    color: "green",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  image: {
    width: "100%",
    height: "40%",
    borderRadius: 8,
    marginRight: 10,
  },
});
