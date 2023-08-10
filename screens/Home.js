import { useNavigation } from "@react-navigation/native";
// import { laundries } from "../data/laundriesData";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
    height: "20%",
  },
  listContainer: {
    flex: 1,
  },
});

export default Home;

// import React, { useState } from "react";
// import { View, StyleSheet, ScrollView } from "react-native"; // Make sure Picker is imported
// // import { SearchBar, Picker } from "react-native-elements";
// import LaundriesList from "../components/LaundriesList";
// import { useQuery } from "@tanstack/react-query";
// import { getAllLaundries } from "../api/laundries";

// // Define your theme colors
// const theme = {
//   primaryBackground: "#FFFFFF", // White
//   secondaryBackground: "#c3ebf0", // Bebe blue
//   textColor: "#333333", // Dark gray
// };

// const Home = () => {
//   const { data: laundries } = useQuery({
//     queryKey: ["laundries"],
//     queryFn: () => getAllLaundries(),
//   });

//   const handleLaundryPress = (id, laundry) => {
//     navigation.navigate("LaundryDetails", { id, laundry });
//   };

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedArea, setSelectedArea] = useState(""); // Added selectedArea state
//   const areas = ["Area 1", "Area 2", "Area 3"]; // Define your areas

//   const filteredLaundries = laundries?.filter((laundry) => {
//     const nameMatch =
//       laundry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       searchTerm === "";
//     const locationMatch =
//       laundry.location.toLowerCase().includes(selectedArea.toLowerCase()) || // Use selectedArea
//       selectedArea === "";
//     return nameMatch && locationMatch;
//   });

//   if (!laundries) return null;

//   return (
//     <ScrollView
//       style={[styles.container, { backgroundColor: theme.primaryBackground }]}
//     >
//       <View style={styles.searchBarContainer}>
//         <SearchBar
//           placeholder="Search for a laundry"
//           onChangeText={(text) => setSearchTerm(text)}
//           value={searchTerm}
//           inputContainerStyle={styles.searchBarInputContainer}
//           inputStyle={[styles.searchBarInput, { color: theme.textColor }]}
//           containerStyle={[
//             styles.searchBarMainContainer,
//             { backgroundColor: theme.secondaryBackground },
//           ]}
//           placeholderTextColor="#A0A0A0"
//         />
//       </View>

//       <View style={styles.searchBarContainer}>
//         {/* Add Picker component for selecting area */}
//         <Picker
//           selectedValue={selectedArea}
//           onValueChange={(itemValue) => setSelectedArea(itemValue)}
//           style={styles.picker}
//         >
//           <Picker.Item label="Select an area" value="" />
//           {areas.map((area) => (
//             <Picker.Item key={area} label={area} value={area} />
//           ))}
//         </Picker>
//       </View>

//       <View style={styles.spacer} />

//       <View style={styles.container}>
//         <LaundriesList data={filteredLaundries} onPress={handleLaundryPress} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   // ... Your existing styles ...

//   picker: {
//     color: theme.textColor,
//     fontSize: 16,
//   },
// });

// export default Home;
