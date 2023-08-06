import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const Laundry = ({ data }) => {
  return (
    <ScrollView style={styles.container}>
      {data.map((item) => (
        <View style={styles.itemContainer} key={item.id}>
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.review}>Review: {item.review}</Text>
            </View>
          </View>
        </View>
      ))}
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
    borderColor: "black", // Set border color to black
    borderRadius: 8,
    backgroundColor: "white", // Add background color
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

export default Laundry;
