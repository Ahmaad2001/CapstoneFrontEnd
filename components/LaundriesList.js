import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../api";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const LaundriesList = ({ data }) => {
  const navigation = useNavigation();

  const handleLaundryPress = (id) => {
    navigation.navigate("LaundryDetails", { id: id });
  };

  const renderItem = ({ laundry }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.push("LaundryStoreDetail", { laundry: laundry })
      }
      style={styles.nearByLaundryWrapStyle}
    >
      <Image
        source={laundry.image}
        style={{
          width: 90.0,
          height: 90.0,
          borderRadius: Sizes.fixPadding - 5.0,
        }}
      />
      <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
        <View
          style={{
            flexDirection: "row",
            alignlaundrys: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            numberOfLines={1}
            style={{ lineHeight: 17.0, flex: 1, ...Fonts.blackColor15Medium }}
          >
            {laundry.name}
          </Text>
          <View
            style={{
              marginLeft: Sizes.fixPadding - 5.0,
              flexDirection: "row",
              alignlaundrys: "center",
            }}
          >
            <MaterialIcons
              name="star"
              color={Colors.yellowColor}
              size={16}
              style={{
                marginTop: Sizes.fixPadding - 13.0,
                marginRight: Sizes.fixPadding - 5.0,
              }}
            />
            {/* <Text style={{ ...Fonts.blackColor13Medium }}>
              {laundry.rating.toFixed(2)}
            </Text> */}
          </View>
        </View>
        <View style={styles.laundryLocationInfoWrapStyle}>
          <MaterialIcons
            name="location-pin"
            color={Colors.grayColor}
            size={16}
            style={{
              marginTop: Sizes.fixPadding - 11.0,
              marginRight: Sizes.fixPadding - 5.0,
            }}
          />
          {/* <Text
            numberOfLines={1}
            style={{ flex: 1, ...Fonts.grayColor13Regular }}
          >
            {laundry.distance} | {laundry.location}
          </Text> */}
        </View>
        <View style={{ flexDirection: "row", alignlaundrys: "center" }}>
          <MaterialIcons
            name="access-time"
            color={Colors.grayColor}
            size={15}
            style={{
              marginTop: Sizes.fixPadding - 13.0,
              marginRight: Sizes.fixPadding - 5.0,
            }}
          />
          {/* <Text style={{ flex: 1, ...Fonts.grayColor13Regular }}>
            {laundry.openTime} to {laundry.closeTime}
          </Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      ListHeaderComponent={
        <Text
          style={{
            marginBottom: Sizes.fixPadding * 2.0,
            marginHorizontal: Sizes.fixPadding * 2.0,
            ...Fonts.grayColor14Medium,
          }}
        >
          {data.length} Stores Found
        </Text>
      }
      data={data}
      keyExtractor={(laundry) => `${laundry.id}`}
      renderlaundry={renderItem}
      contentContainerStyle={{ paddingBottom: Sizes.fixPadding }}
      showsVerticalScrollIndicator={false}
    />
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

// const SearchScreen = ({ navigation }) => {
//   const [search, setSearch] = useState("");

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
//       <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
//       <View style={{ flex: 1 }}>
//         {header()}
//         {searchField()}
//         {nearByLaundries()}
//       </View>
//     </SafeAreaView>
//   );

//   function nearByLaundries() {
//     const renderItem = ({ item }) => (
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={() => navigation.push("LaundryStoreDetail", { item: item })}
//         style={styles.nearByLaundryWrapStyle}
//       >
//         <Image
//           source={item.laundryImage}
//           style={{
//             width: 90.0,
//             height: 90.0,
//             borderRadius: Sizes.fixPadding - 5.0,
//           }}
//         />
//         <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Text
//               numberOfLines={1}
//               style={{ lineHeight: 17.0, flex: 1, ...Fonts.blackColor15Medium }}
//             >
//               {item.laundryName}
//             </Text>
//             <View
//               style={{
//                 marginLeft: Sizes.fixPadding - 5.0,
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <MaterialIcons
//                 name="star"
//                 color={Colors.yellowColor}
//                 size={16}
//                 style={{
//                   marginTop: Sizes.fixPadding - 13.0,
//                   marginRight: Sizes.fixPadding - 5.0,
//                 }}
//               />
//               <Text style={{ ...Fonts.blackColor13Medium }}>
//                 {item.rating.toFixed(2)}
//               </Text>
//             </View>
//           </View>
//           <View style={styles.laundryLocationInfoWrapStyle}>
//             <MaterialIcons
//               name="location-pin"
//               color={Colors.grayColor}
//               size={16}
//               style={{
//                 marginTop: Sizes.fixPadding - 11.0,
//                 marginRight: Sizes.fixPadding - 5.0,
//               }}
//             />
//             <Text
//               numberOfLines={1}
//               style={{ flex: 1, ...Fonts.grayColor13Regular }}
//             >
//               {item.distance} | {item.location}
//             </Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <MaterialIcons
//               name="access-time"
//               color={Colors.grayColor}
//               size={15}
//               style={{
//                 marginTop: Sizes.fixPadding - 13.0,
//                 marginRight: Sizes.fixPadding - 5.0,
//               }}
//             />
//             <Text style={{ flex: 1, ...Fonts.grayColor13Regular }}>
//               {item.openTime} to {item.closeTime}
//             </Text>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//     return (
//       <FlatList
//         ListHeaderComponent={
//           <Text
//             style={{
//               marginBottom: Sizes.fixPadding * 2.0,
//               marginHorizontal: Sizes.fixPadding * 2.0,
//               ...Fonts.grayColor14Medium,
//             }}
//           >
//             {nearByLaundriesList.length} Stores Found
//           </Text>
//         }
//         data={nearByLaundriesList}
//         keyExtractor={(item) => `${item.id}`}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingBottom: Sizes.fixPadding }}
//         showsVerticalScrollIndicator={false}
//       />
//     );
//   }

// const styles = StyleSheet.create({
//   headerWrapStyle: {
//     padding: Sizes.fixPadding * 2.0,
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: Colors.whiteColor,
//   },
//   searchFieldWrapStyle: {
//     backgroundColor: Colors.whiteColor,
//     borderRadius: Sizes.fixPadding - 5.0,
//     flexDirection: "row",
//     alignItems: "center",
//     elevation: 2.0,
//     margin: Sizes.fixPadding * 2.0,
//     paddingVertical: Sizes.fixPadding + 5.0,
//     paddingHorizontal: Sizes.fixPadding,
//   },
//   nearByLaundryWrapStyle: {
//     backgroundColor: Colors.whiteColor,
//     marginHorizontal: Sizes.fixPadding - 5.0,
//     flexDirection: "row",
//     alignItems: "center",
//     padding: Sizes.fixPadding + 5.0,
//     marginHorizontal: Sizes.fixPadding * 2.0,
//     borderRadius: Sizes.fixPadding - 5.0,
//     marginBottom: Sizes.fixPadding,
//     elevation: 2.0,
//   },
//   laundryLocationInfoWrapStyle: {
//     marginTop: Sizes.fixPadding - 8.0,
//     marginBottom: Sizes.fixPadding - 5.0,
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });

// export default SearchScreen;
