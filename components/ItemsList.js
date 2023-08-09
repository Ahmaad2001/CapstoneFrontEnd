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

const ItemsList = ({ data }) => {
  const navigation = useNavigation();

  const handleItemPress = (id) => {
    navigation.navigate("ItemsList", { id: id });
  };
  return (
    <ScrollView style={styles.container}>
      {data.map((item) => {
        console.log(BASE_URL + "/" + item.image);

        return (
          <TouchableOpacity
            key={item.id}
            style={styles.itemContainer}
            onPress={() => handleItemPress(item._id)}
          >
            <View style={styles.item}>
              <Image
                source={{ uri: BASE_URL + item.image }}
                style={styles.image}
              />
              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
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
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#6E6E6E",
    marginBottom: 3,
  },
  review: {
    fontSize: 16,
    color: "#007AFF",
  },
});

export default ItemsList;
