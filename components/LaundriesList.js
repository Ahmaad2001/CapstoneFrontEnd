import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../api";

const LaundriesList = ({ data }) => {
  const navigation = useNavigation();

  const handleLaundryPress = (id) => {
    navigation.navigate("LaundryDetails", { id: id });
  };

  return (
    <ScrollView style={styles.container}>
      {data.map((item) => {
        console.log("IMG: ", BASE_URL + "" + item.image);

        return (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handleLaundryPress(item._id)}
          >
            <View style={styles.item}>
              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.review}>Review: {item.review}</Text>
              </View>
              <Image
                source={{ uri: BASE_URL + item.image }}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Aligns items to the center and places image on the right
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginLeft: 10, // Adjusted to align the image on the right
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    textAlign: "center",
    fontSize: 14,
    color: "#6E6E6E",
    marginBottom: 3,
  },
  review: {
    textAlign: "center",
    fontSize: 16,
    color: "#007AFF",
  },
});

export default LaundriesList;
