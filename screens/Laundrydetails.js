// import React from "react";
// import { View, Text, StyleSheet, Image, Button } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useQuery } from "@tanstack/react-query";
// import { getLaundryById } from "../api/laundries";
// import { BASE_URL } from "../api";
// import { MaterialIcons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Laundrydetails() {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { id } = route.params;
//   const { data: laundry } = useQuery({
//     queryKey: ["laundry"],
//     queryFn: () => getLaundryById(id),
//   });

//   if (!laundry) {
//     return <Text>details</Text>;
//   }

//   return (
//     <View style={styles.centeredContainer}>
//       <View style={styles.header}>
//         <SafeAreaView>
//           <MaterialIcons
//             name="arrow-back"
//             size={50}
//             color="black"
//             onPress={() => navigation.navigate("Home")}
//           />
//         </SafeAreaView>
//       </View>
//       <View style={styles.cardContainer}>
//         <Image
//           source={{ uri: BASE_URL + laundry.image }}
//           style={styles.image}
//         />
//         <View style={styles.detailsContainer}>
//           <Text style={styles.name}>{laundry.name}</Text>
//           <Text style={styles.location}>{laundry.location}</Text>
//           <Text style={styles.description}>{laundry.description}</Text>
//           <Text style={styles.reviews}>{laundry.reviews}</Text>
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="Try it"
//             onPress={() => navigation.navigate("Checkout")}
//           />
//           <Button title="Reviews" onPress={() => {}} />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   centeredContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     position: "absolute",
//     top: 40,
//     left: 20,
//     zIndex: 1,
//   },
//   cardContainer: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 16,
//     marginBottom: 20,
//     padding: 24,
//     width: "90%",
//     backgroundColor: "#fff",
//     elevation: 4,
//     height: "60%",
//     gap: 20,
//   },
//   detailsContainer: {
//     marginBottom: 16,
//   },
//   name: {
//     textAlign: "center",
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   location: {
//     textAlign: "center",
//     color: "#666",
//     marginBottom: 8,
//   },
//   description: {
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   reviews: {
//     textAlign: "center",
//     color: "green",
//     fontWeight: "bold",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 16,
//   },
//   image: {
//     width: "100%",
//     height: "60%",
//     borderRadius: 8,
//     marginRight: 10,
//   },
// });

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import CollapsingToolbar from "../components/silverAppBarScreen";
import MapView, { Marker } from "react-native-maps";
import ItemsList2 from "../components/ItemsList2";
import ItemsList from "../components/ItemsList";
import { useQuery } from "@tanstack/react-query";
import { getLaundryById } from "../api/laundries";
import { BASE_URL } from "../api";

const { width } = Dimensions.get("window");

const reviewsList = [
  [
    {
      id: "1",
      userImage: require("../assets/images/users/user2.png"),
      userName: "Jane Cooper",
      rating: 4.2,
      reviewDate: "20 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
    {
      id: "2",
      userImage: require("../assets/images/users/user3.png"),
      userName: "Wade Warren",
      rating: 4.3,
      reviewDate: "18 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
    {
      id: "3",
      userImage: require("../assets/images/users/user4.png"),
      userName: "Brooklyn Simmons",
      rating: 4.0,
      reviewDate: "15 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
  ],
  [
    {
      id: "1",
      userImage: require("../assets/images/users/user2.png"),
      userName: "Jane fdsiojflisdjfkl",
      rating: 4.2,
      reviewDate: "20 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
    {
      id: "2",
      userImage: require("../assets/images/users/user3.png"),
      userName: "Wade Warren",
      rating: 4.3,
      reviewDate: "18 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
    {
      id: "3",
      userImage: require("../assets/images/users/user4.png"),
      userName: "Brooklyn Simmons",
      rating: 4.0,
      reviewDate: "15 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
  ],
  [
    {
      id: "1",
      userImage: require("../assets/images/users/user2.png"),
      userName: "Jane Cooper",
      rating: 4.2,
      reviewDate: "20 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
    {
      id: "2",
      userImage: require("../assets/images/users/user3.png"),
      userName: "Wade Warren",
      rating: 4.3,
      reviewDate: "18 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
    {
      id: "3",
      userImage: require("../assets/images/users/user4.png"),
      userName: "Brooklyn Simmons",
      rating: 4.0,
      reviewDate: "15 March 2021",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sit sit Mauris habitant in donec in viverra pellentesquised felis sit orci, ipsum nulla integer ipsum.",
    },
  ],
];

const servicesList = [
  {
    id: "1",
    serviceImage: require("../assets/images/services/service1.png"),
    serviceName: "Wash & Fold",
    serviceHours: 48,
  },
  {
    id: "2",
    serviceImage: require("../assets/images/services/service2.png"),
    serviceName: "Ironing & Fold",
    serviceHours: 48,
  },
  {
    id: "3",
    serviceImage: require("../assets/images/services/service3.png"),
    serviceName: "Dry Cleaning",
    serviceHours: 48,
  },
  {
    id: "4",
    serviceImage: require("../assets/images/services/service4.png"),
    serviceName: "Household Cleaning",
    serviceHours: 48,
  },
];

const Laundrydetails = ({ navigation, route }) => {
  const item = route.params.item;

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const { data } = useQuery({
    queryKey: ["Laundry", item._id],
    queryFn: () => getLaundryById(item._id),
  });
  if (!data) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        <CollapsingToolbar
          leftItem={
            <MaterialIcons
              name="arrow-back"
              color={Colors.whiteColor}
              size={22}
              onPress={() => navigation.pop()}
              style={{
                marginTop: Sizes.fixPadding * 2.0,
                marginHorizontal: Sizes.fixPadding * 2.0,
              }}
            />
          }
          toolbarColor={Colors.primaryColor}
          toolbarMinHeight={70}
          toolbarMaxHeight={220}
          src={{ uri: BASE_URL + data.image }}
          element={<>{laundryInfo({ data })}</>}
        >
          <View style={{ paddingBottom: Sizes.fixPadding * 2.0 }}>
            {contactDetail({ data })}
            {divider()}
            {tabBar()}
            {selectedTabIndex == 0 ? aboutInfo({ data }) : itemsInfo({ data })}
          </View>
        </CollapsingToolbar>
      </View>
    </SafeAreaView>
  );

  function itemsInfo({ data }) {
    return (
      <View>
        <ItemsList2 data={data} />
      </View>
    );
    // return (
    //   <View style={{ marginTop: Sizes.fixPadding * 2.0 }}>
    //     {servicesList.map((item) => (
    //       <TouchableOpacity
    //         activeOpacity={0.9}
    //         onPress={() =>
    //           navigation.push("LaundryServiceDetail", { item: item })
    //         }
    //         key={`${item.id}`}
    //         style={{ ...styles.whiteBoxStyle, ...styles.serviceInfoWrapStyle }}
    //       >
    //         <View
    //           style={{
    //             flex: 1,
    //             alignItems: "center",
    //             justifyContent: "center",
    //           }}
    //         >
    //           <Text style={{ ...Fonts.blackColor15Medium }}>
    //             {item.serviceName}
    //           </Text>
    //           <View style={styles.serviceHoursWrapStyle}>
    //             <Text style={{ ...Fonts.blackColor13SemiBold }}>
    //               {item.serviceHours} Hours
    //             </Text>
    //           </View>
    //         </View>
    //         <View style={styles.serviceImageAndArrowIconWrapStyle}>
    //           <Image
    //             source={item.serviceImage}
    //             style={{ width: 80.0, height: 80.0, resizeMode: "contain" }}
    //           />
    //           <View style={styles.arrowForwardWrapStyle}>
    //             <MaterialIcons
    //               name="arrow-forward-ios"
    //               color={Colors.primaryColor}
    //               size={15}
    //             />
    //           </View>
    //         </View>
    //       </TouchableOpacity>
    //     ))}
    //   </View>
    // );
  }

  function aboutInfo({ data }) {
    return (
      <View>
        {aboutDetail({ data })}
        {addressInfo({ data })}
        {openingHoursInfo()}
        {reviewsInfo(1)}
      </View>
    );
  }

  function reviewsInfo(number) {
    return (
      <View style={{ ...styles.whiteBoxStyle, ...styles.reviewsInfoWrapStyle }}>
        <Text
          style={{
            marginBottom: Sizes.fixPadding - 3.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Reviews
        </Text>
        {reviewsList[number].map((item, index) => (
          <View key={`${item.id}`}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={item.userImage}
                style={{ width: 50.0, height: 50.0, borderRadius: 25.0 }}
              />
              <View style={{ marginLeft: Sizes.fixPadding, flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      lineHeight: 17.0,
                      flex: 1,
                      ...Fonts.blackColor15Medium,
                    }}
                  >
                    {item.userName}
                  </Text>
                  <Text style={{ ...Fonts.grayColor12Regular }}>
                    {item.reviewDate}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons
                    name="star"
                    color={Colors.yellowColor}
                    size={16.0}
                    style={{
                      marginTop: Sizes.fixPadding - 14.0,
                      marginRight: Sizes.fixPadding - 5.0,
                    }}
                  />
                  <Text style={{ ...Fonts.blackColor13Medium }}>
                    {item.rating.toFixed(1)}
                  </Text>
                </View>
              </View>
            </View>
            <Text
              style={{
                marginTop: Sizes.fixPadding - 5.0,
                textAlign: "justify",
                ...Fonts.grayColor13Regular,
              }}
            >
              {item.review}
            </Text>
            {index == reviewsList.length - 1 ? null : (
              <View
                style={{
                  backgroundColor: "#E6E6E6",
                  height: 1.0,
                  marginVertical: Sizes.fixPadding + 5.0,
                }}
              />
            )}
          </View>
        ))}
      </View>
    );
  }

  function openingHoursInfo() {
    return (
      <View style={{ ...styles.whiteBoxStyle, padding: Sizes.fixPadding }}>
        <Text style={{ ...Fonts.blackColor16SemiBold }}>Opening Hours</Text>
        <View
          style={{
            marginTop: Sizes.fixPadding - 5.0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ ...Fonts.grayColor13Regular }}>• {}</Text>
          <Text
            numberOfLines={1}
            style={{ width: 60.0, ...Fonts.grayColor13Regular }}
          >
            Mon - Fri
          </Text>
          <Text
            style={{
              marginHorizontal: Sizes.fixPadding,
              ...Fonts.grayColor13Regular,
            }}
          >
            :
          </Text>
          <Text style={{ ...Fonts.grayColor13Regular }}>
            8:00 AM to 8:00 PM
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ ...Fonts.grayColor13Regular }}>• {}</Text>
          <Text
            numberOfLines={1}
            style={{ width: 60.0, ...Fonts.grayColor13Regular }}
          >
            Sat - Sun
          </Text>
          <Text
            style={{
              marginHorizontal: Sizes.fixPadding,
              ...Fonts.grayColor13Regular,
            }}
          >
            :
          </Text>
          <Text style={{ ...Fonts.grayColor13Regular }}>
            8:00 AM to 1:00 PM
          </Text>
        </View>
      </View>
    );
  }

  function addressInfo({ data }) {
    return (
      <View style={{ ...styles.whiteBoxStyle, ...styles.addressInfoWrapStyle }}>
        <View style={{ flex: 1, marginRight: Sizes.fixPadding * 5.0 }}>
          <Text style={{ ...Fonts.blackColor16SemiBold }}>Address</Text>
          <Text
            style={{
              marginTop: Sizes.fixPadding - 5.0,
              marginBottom: Sizes.fixPadding,
              ...Fonts.grayColor13Regular,
            }}
          >
            {data.location}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather
              name="send"
              size={16}
              color={Colors.primaryColor}
              style={{ marginTop: Sizes.fixPadding - 12.0 }}
            />
            <Text
              style={{
                marginLeft: Sizes.fixPadding - 3.0,
                ...Fonts.primaryColor12SemiBold,
              }}
            >
              Get Directions - 2.0 km
            </Text>
          </View>
        </View>
        <View
          style={{
            marginRight: Sizes.fixPadding - 5.0,
            borderRadius: Sizes.fixPadding - 5.0,
            overflow: "hidden",
          }}
        >
          <MapView
            style={{
              height: 90,
              width: 90.0,
              borderRadius: Sizes.fixPadding - 5.0,
            }}
            initialRegion={{
              longitude: 48.1239894,
              latitude: 29.1070609,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            <Marker
              coordinate={{ latitude: 37.33233141, longitude: -122.0312186 }}
            >
              <Image
                source={require("../assets/images/icons/marker.png")}
                style={{ width: 18.0, height: 18.0 }}
              />
            </Marker>
          </MapView>
        </View>
      </View>
    );
  }

  function aboutDetail({ data }) {
    return (
      <View
        style={{
          ...styles.whiteBoxStyle,
          padding: Sizes.fixPadding,
          marginTop: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.blackColor16SemiBold }}>About us</Text>
        <Text style={{ textAlign: "justify", ...Fonts.grayColor13Regular }}>
          {data.description}
        </Text>
        <View style={{ height: 10 }}></View>
        <Text> Call us: {data.number}</Text>
      </View>
    );
  }

  function divider() {
    return <View style={{ backgroundColor: "#E6E6E6", height: 1.0 }} />;
  }

  function tabBar() {
    return (
      <View style={styles.tabBarWrapStyle}>
        {tabBarOptionsSort({ option: "About", index: 0 })}
        {tabBarOptionsSort({ option: "Items", index: 1 })}
      </View>
    );
  }

  function tabBarOptionsSort({ option, index }) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setSelectedTabIndex(index)}
        style={{ width: width / 2.0 }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding - 5.0,
            textAlign: "center",
            ...(selectedTabIndex == index
              ? { ...Fonts.primaryColor14SemiBold }
              : { ...Fonts.mediumGrayColor14SemiBold }),
          }}
        >
          {option}
        </Text>
        <View
          style={{
            backgroundColor:
              selectedTabIndex == index ? Colors.primaryColor : "transparent",
            height: 2.0,
          }}
        />
      </TouchableOpacity>
    );
  }

  function contactDetail({ data }) {
    return (
      <View style={styles.contactDetailWrapStyle}>
        {contactOptionsSort({ iconName: "phone-in-talk", option: "Call" })}
        {contactOptionsSort({
          iconName: "map-marker-outline",
          option: "Direction",
        })}
        {contactOptionsSort({ iconName: "share-variant", option: "Share" })}
      </View>
    );
  }

  function contactOptionsSort({ iconName, option }) {
    return (
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name={iconName}
          size={26}
          color={Colors.primaryColor}
        />
        <Text
          style={{
            marginTop: Sizes.fixPadding - 5.0,
            ...Fonts.grayColor12Medium,
          }}
        >
          {option}
        </Text>
      </View>
    );
  }

  function laundryInfo({ data, distance = "2 km away" }) {
    console.log(data);
    return (
      <View style={styles.laundryInfoWrapStyle}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...Fonts.whiteColor17Medium }}>{data.name}</Text>
          <Text
            numberOfLines={2}
            style={{ ...Fonts.whiteColor14Regular }}
          ></Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {showRating({ number: Math.floor(5) })}
            <Text
              style={{
                marginLeft: Sizes.fixPadding - 5.0,
                ...Fonts.whiteColor12Regular,
              }}
            >
              (90 Reviews)
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: Sizes.fixPadding + 5.0,
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              marginBottom: Sizes.fixPadding - 7.0,
              ...Fonts.whiteColor12SemiBold,
            }}
          >
            {distance}
          </Text>
          <View style={styles.openButtonStyle}>
            <Text style={{ ...Fonts.whiteColor13SemiBold }}>Open</Text>
          </View>
        </View>
      </View>
    );
  }

  function showRating({ number }) {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {number == 5.0 ||
        number == 4.0 ||
        number == 3.0 ||
        number == 2.0 ||
        number == 1.0 ? (
          <MaterialIcons name="star" size={16} color={Colors.yellowColor} />
        ) : null}
        {number == 5.0 || number == 4.0 || number == 3.0 || number == 2.0 ? (
          <MaterialIcons name="star" size={16} color={Colors.yellowColor} />
        ) : null}
        {number == 5.0 || number == 4.0 || number == 3.0 ? (
          <MaterialIcons name="star" size={16} color={Colors.yellowColor} />
        ) : null}
        {number == 5.0 || number == 4.0 ? (
          <MaterialIcons name="star" size={16} color={Colors.yellowColor} />
        ) : null}
        {number == 5.0 ? (
          <MaterialIcons name="star" size={16} color={Colors.yellowColor} />
        ) : null}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  laundryInfoWrapStyle: {
    flexDirection: "row",
    flex: 1,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding - 3.0,
    justifyContent: "space-between",
  },
  openButtonStyle: {
    alignSelf: "center",
    backgroundColor: Colors.greenColor,
    borderRadius: Sizes.fixPadding * 3.0,
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding + 5.0,
  },
  tabBarWrapStyle: {
    paddingTop: Sizes.fixPadding + 5.0,
    backgroundColor: Colors.whiteColor,
    elevation: 1.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactDetailWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.whiteColor,
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingTop: Sizes.fixPadding * 2.0,
    paddingBottom: Sizes.fixPadding,
  },
  addressInfoWrapStyle: {
    padding: Sizes.fixPadding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding,
  },
  whiteBoxStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  reviewsInfoWrapStyle: {
    paddingHorizontal: Sizes.fixPadding,
    paddingTop: Sizes.fixPadding,
    paddingBottom: Sizes.fixPadding * 2.0,
    marginVertical: Sizes.fixPadding,
  },
  serviceInfoWrapStyle: {
    flexDirection: "row",
    paddingHorizontal: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding,
  },
  serviceHoursWrapStyle: {
    marginTop: Sizes.fixPadding,
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding * 3.0,
    borderColor: Colors.lightGrayColor,
    borderWidth: 1.0,
    paddingHorizontal: Sizes.fixPadding + 5.0,
    paddingVertical: Sizes.fixPadding - 5.0,
  },
  arrowForwardWrapStyle: {
    width: 24.0,
    height: 24.0,
    borderRadius: 12.0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.whiteColor,
    elevation: 3.0,
    marginLeft: Sizes.fixPadding * 2.5,
  },
  serviceImageAndArrowIconWrapStyle: {
    flex: 0.9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  priceInfoWrapStyle: {
    paddingRight: Sizes.fixPadding,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingLeft: Sizes.fixPadding + 5.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Sizes.fixPadding,
  },
});

export default Laundrydetails;
