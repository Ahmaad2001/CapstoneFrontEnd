import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { SearchBar } from "react-native-elements";
import LaundriesList from "../components/LaundriesList";
import { useQuery } from "@tanstack/react-query";
import { getAllLaundries } from "../api/laundries";

const Home = () => {
  const navigation = useNavigation();
  const { data: laundries } = useQuery({
    queryKey: ["laundries"],
    queryFn: () => getAllLaundries(),
  });
  const handleLaundryPress = (id, laundry) => {
    navigation.navigate("LaundryDetails", { id, laundry });
  };

  const handleCreateBasket = () => {
    // Handle creating the basket here
    // For now, let's log a message
    console.log("Creating basket...");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const filteredLaundries = laundries?.filter((laundry) => {
    const nameMatch =
      laundry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchTerm === "";
    const locationMatch =
      laundry.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
      locationFilter === "";
    return nameMatch && locationMatch;
  });

  if (!laundries) return null;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Search for a laundry"
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
          containerStyle={styles.searchBarMainContainer}
          placeholderTextColor="#A0A0A0"
        />
      </View>

      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Filter by location"
          onChangeText={(text) => setLocationFilter(text)}
          value={locationFilter}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
          containerStyle={styles.searchBarMainContainer}
          placeholderTextColor="#A0A0A0"
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.basketContainer}>
          <Image
            source={require("../assets/basket.png")}
            style={styles.basketImage}
          />
        </View>

        <TouchableOpacity
          style={styles.createBasketButton}
          onPress={handleCreateBasket}
        >
          <Text style={styles.createBasketText}>Create My Basket</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.spacer} />

      <View style={styles.container}>
        <LaundriesList data={filteredLaundries} onPress={handleLaundryPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBarContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  searchBarMainContainer: {
    borderRadius: 10,
    padding: 0,
    backgroundColor: "white",
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchBarInput: {
    color: "#333",
    fontSize: 16,
  },
  spacer: {
    height: "0%",
  },
  listContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 11,
    marginVertical: 10,
  },
  basketContainer: {
    alignItems: "center", // Align the basketImage to center
    marginLeft: 130,
  },
  createBasketButton: {
    backgroundColor: "black",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  createBasketText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  basketImage: {
    width: 50,
    height: 50,
  },
});

export default Home;
