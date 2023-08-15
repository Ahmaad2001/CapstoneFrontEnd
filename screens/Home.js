// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Text,
// } from "react-native";
// import { SearchBar } from "react-native-elements";
// import LaundriesList from "../components/LaundriesList";
// import { useQuery } from "@tanstack/react-query";
// import { getAllLaundries } from "../api/laundries";

// const Home = () => {
//   const navigation = useNavigation();
//   const { data: laundries } = useQuery({
//     queryKey: ["laundries"],
//     queryFn: () => getAllLaundries(),
//   });
//   const handleLaundryPress = (id, laundry) => {
//     navigation.navigate("LaundryDetails", { id, laundry });
//   };

//   const handleCreateBasket = () => {
//     // Handle creating the basket here
//     // For now, let's log a message
//     console.log("Creating basket...");
//   };

//   const [searchTerm, setSearchTerm] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const filteredLaundries = laundries?.filter((laundry) => {
//     const nameMatch =
//       laundry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       searchTerm === "";
//     const locationMatch =
//       laundry.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
//       locationFilter === "";
//     return nameMatch && locationMatch;
//   });

//   if (!laundries) return null;
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.searchBarContainer}>
//         <SearchBar
//           placeholder="Search for a laundry"
//           onChangeText={(text) => setSearchTerm(text)}
//           value={searchTerm}
//           inputContainerStyle={styles.searchBarInputContainer}
//           inputStyle={styles.searchBarInput}
//           containerStyle={styles.searchBarMainContainer}
//           placeholderTextColor="#A0A0A0"
//         />
//       </View>

//       <View style={styles.searchBarContainer}>
//         <SearchBar
//           placeholder="Filter by location"
//           onChangeText={(text) => setLocationFilter(text)}
//           value={locationFilter}
//           inputContainerStyle={styles.searchBarInputContainer}
//           inputStyle={styles.searchBarInput}
//           containerStyle={styles.searchBarMainContainer}
//           placeholderTextColor="#A0A0A0"
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <View style={styles.basketContainer}>
//           <Image
//             source={require("../assets/basket.png")}
//             style={styles.basketImage}
//           />
//         </View>

//         <TouchableOpacity
//           style={styles.createBasketButton}
//           onPress={handleCreateBasket}
//         >
//           <Text style={styles.createBasketText}>Create My Basket</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.spacer} />

//       <View style={styles.container}>
//         <LaundriesList data={filteredLaundries} onPress={handleLaundryPress} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   searchBarContainer: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     margin: 10,
//     elevation: 2,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//   },
//   searchBarMainContainer: {
//     borderRadius: 10,
//     padding: 0,
//     backgroundColor: "white",
//     borderBottomWidth: 0,
//   },
//   searchBarInputContainer: {
//     backgroundColor: "transparent",
//     borderBottomColor: "transparent",
//     borderTopColor: "transparent",
//   },
//   searchBarInput: {
//     color: "#333",
//     fontSize: 16,
//   },
//   spacer: {
//     height: "0%",
//   },
//   listContainer: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginHorizontal: 11,
//     marginVertical: 10,
//   },
//   basketContainer: {
//     alignItems: "center", // Align the basketImage to center
//     marginLeft: 130,
//   },
//   createBasketButton: {
//     backgroundColor: "black",
//     borderRadius: 8,
//     borderWidth: 0,
//     borderColor: "#333",
//     paddingVertical: 10,
//     paddingHorizontal: 4,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   createBasketText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   basketImage: {
//     width: 50,
//     height: 50,
//   },
// });

// export default Home;

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import {
  MaterialIcons,
  Octicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Menu, MenuItem } from "react-native-material-menu";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getAllLaundries } from "../api/laundries";
import LaundriesList from "../components/LaundriesList";
import { SearchBar } from "react-native-elements";
import { TextInput } from "react-native-paper";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
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
    const nameMatch = laundry.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    searchTerm === "";
    const locationMatch = laundry.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());
    locationFilter === "";
    return nameMatch && locationMatch;
  });

  if (!laundries) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 0.3 }}>{header()}</View>

      <ScrollView style={{ flex: 0.7 }}>
        <View style={styles.container}>
          <LaundriesList
            data={filteredLaundries}
            onPress={handleLaundryPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function header() {
  return (
    <LinearGradient
      colors={[Colors.primaryColor, "#C9BEFE"]}
      style={{ padding: Sizes.fixPadding * 2.0 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/users/user.png")}
            style={{ width: 40.0, height: 40.0, borderRadius: 20.0 }}
          />
          <View style={{ flex: 1, marginLeft: Sizes.fixPadding - 5.0 }}>
            <Text style={{ ...Fonts.whiteColor12Regular }}>
              Hello, Ahmad. What do you wanna wash today?
            </Text>
            {/* {locationInfo()} */}
          </View>
        </View>
      </View>
      {searchInfo()}
    </LinearGradient>
  );
}

function searchInfo() {
  const navigation = useNavigation();
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [locationFilter, setLocationFilter] = useState("");
  //   const filteredLaundries = laundries?.filter((laundry) => {
  //     const nameMatch =
  //       laundry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       searchTerm === "";
  //     const locationMatch =
  //       laundry.location.toLowerCase().includes(locationFilter.toLowerCase()) ||
  //       locationFilter === "";
  //     return nameMatch && locationMatch;
  //   });

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Home")}
      style={styles.searchInfoWrapStyle}
    >
      <Feather
        name="search"
        size={15}
        color={Colors.grayColor}
        style={{
          marginRight: Sizes.fixPadding,
          marginTop: Sizes.fixPadding - 12.0,
        }}
      />
      <Text style={{ ...Fonts.grayColor12Regular }}>
        Search Laundry Store by name
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  searchInfoWrapStyle: {
    backgroundColor: Colors.bodyBackColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding,
    marginTop: Sizes.fixPadding * 2.0,
  },
  laundryServiceWrapStyle: {
    flex: 1,
    marginHorizontal: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    marginBottom: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    elevation: 3.0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding + 5.0,
  },
  laundryImageStyle: {
    width: "100%",
    height: 90.0,
    borderTopLeftRadius: Sizes.fixPadding - 5.0,
    borderTopRightRadius: Sizes.fixPadding - 5.0,
  },
  laundryInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    width: width / 1.5,
    marginRight: Sizes.fixPadding,
    elevation: 2.0,
  },
  withViewAllTitleWrapStyle: {
    marginHorizontal: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Sizes.fixPadding + 5.0,
  },
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
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#333",
    paddingVertical: 30,
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

export default HomeScreen;
