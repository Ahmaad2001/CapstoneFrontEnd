import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import { laundries } from "../data/laundriesData";
import LaundriesList from "../components/LaundriesList";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const filteredLaundries = laundries.filter((laundry) => {
    const nameMatch =
      laundry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      searchTerm === "";
    const locationMatch =
      laundry.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
      locationFilter === "";
    return nameMatch && locationMatch;
  });

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

      <View style={styles.spacer} />

      <View style={styles.listContainer}>
        <LaundriesList data={filteredLaundries} />
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
    height: "20%",
  },
  listContainer: {
    flex: 1,
  },
});

export default Home;
