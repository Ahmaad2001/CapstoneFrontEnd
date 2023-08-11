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

  const handleItemPress = (selectedItem) => {
    navigation.navigate("Services", { selectedItem });
  };

  let currentCategory = null;
  const displayedCategories = [];

  return (
    <ScrollView style={styles.container}>
      {data?.map((item) => {
        if (!displayedCategories.includes(item.categoryName)) {
          displayedCategories.push(item.categoryName);
          currentCategory = item.categoryName;

          return (
            <View key={currentCategory} style={styles.categoryContainer}>
              <Text style={styles.categoryName}>{currentCategory}</Text>
              {data
                .filter(
                  (filteredItem) =>
                    filteredItem.categoryName === currentCategory
                )
                .map((filteredItem) => (
                  <TouchableOpacity
                    key={filteredItem.id}
                    style={styles.itemContainer}
                    onPress={() => handleItemPress(filteredItem)}
                  >
                    <View style={styles.item}>
                      <View style={styles.detailsContainer}>
                        <Text style={styles.name}>{filteredItem.name}</Text>
                      </View>
                      <Image
                        source={{ uri: BASE_URL + filteredItem.serviceImage }}
                        style={styles.image}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          );
        }
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryName: {
    textAlign: "right",
    fontSize: 18,
    fontWeight: "bold",
    color: "#6E6E6E",
    marginBottom: 5,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
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
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ItemsList;
