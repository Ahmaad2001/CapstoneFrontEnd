import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { getLaundryById } from "../api/laundries";
import { useQuery } from "@tanstack/react-query";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BASE_URL } from "../api";

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
  console.log(BASE_URL + laundry.image);
  return (
    <View style={styles.centeredContainer}>
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
          <Button title="Try it" onPress={() => {}} />
          <Button title="Reviews" onPress={() => {}} />
        </View>
      </View>
      <Button title="Go Back" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16, // Increase border radius for a more rounded look
    marginBottom: 20,
    padding: 24, // Increase padding for a bigger card
    width: "90%", // Adjust width to fit the screen better
    backgroundColor: "#fff", // Set background color
    elevation: 4, // Add shadow
    height: "60%",
    gap: 20,
  },
  detailsContainer: {
    marginBottom: 16, // Add more space below details
  },
  name: {
    fontSize: 24, // Increase font size for the name
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
    color: "green", // Customize the color
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16, // Add space above buttons
  },
  image: {
    width: "100%",
    height: "40%",
    borderRadius: 8,
    marginRight: 10,
  },
});
