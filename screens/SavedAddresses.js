import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

const savedAddressesList = [
  {
    id: "1",
    addressType: "Home",
    address: "Hawalli, Muthanna Street, Street 322",
    latlong: { latitude: 29.3405926, longitude: 48.0253229 },
  },
  {
    id: "2",
    addressType: "Office",
    address: "Nuzha, Akka Street, Street 462",
    latlong: { latitude: 29.337, longitude: 47.9926 },
  },
  {
    id: "3",
    addressType: "Other",
    address:
      "3891 Ranchview Dr. Richardson Dakota Spruce Drive Celina California 62639",
    latlong: { latitude: 37.33233141, longitude: -122.0312186 },
  },
];

const SavedAddresses = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        {addresses()}
      </View>
      {addNewAddressButton()}
    </SafeAreaView>
  );

  function addNewAddressButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("AddAddress")}
        style={styles.addNewAddressButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor17SemiBold }}>Add new Address</Text>
      </TouchableOpacity>
    );
  }

  function addresses() {
    const renderItem = ({ item }) => (
      <View style={styles.addressesInfoWrapStyle}>
        <View
          style={{
            marginRight: Sizes.fixPadding - 5.0,
            borderRadius: Sizes.fixPadding - 5.0,
            overflow: "hidden",
          }}
        >
          <MapView
            style={{
              height: 110,
              width: 88.0,
              borderRadius: Sizes.fixPadding - 5.0,
            }}
            initialRegion={{
              ...item.latlong,
              latitudeDelta: 0.9,
              longitudeDelta: 0.9,
            }}
          >
            <Marker coordinate={item.latlong}>
              <Image
                source={require("../assets/images/icons/marker.png")}
                style={{ width: 18.0, height: 18.0 }}
              />
            </Marker>
          </MapView>
        </View>
        <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.blackColor16Medium }}>
            {item.addressType}
          </Text>
          <Text
            style={{
              marginTop: Sizes.fixPadding - 7.0,
              ...Fonts.grayColor13Regular,
            }}
          >
            {item.address}
          </Text>
        </View>
      </View>
    );
    return (
      <FlatList
        data={savedAddressesList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Sizes.fixPadding * 2.0,
          paddingBottom: Sizes.fixPadding,
        }}
      />
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <MaterialIcons
          name="arrow-back"
          color={Colors.blackColor}
          size={22}
          onPress={() => navigation.pop()}
          style={{ marginTop: Sizes.fixPadding - 13.0 }}
        />
        <Text
          style={{
            marginLeft: Sizes.fixPadding + 5.0,
            flex: 1,
            ...Fonts.blackColor18SemiBold,
          }}
        >
          Saved Addresses
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    padding: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
  },
  addressesInfoWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    padding: Sizes.fixPadding,
    marginBottom: Sizes.fixPadding,
  },
  addNewAddressButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding + 3.0,
    marginHorizontal: Sizes.fixPadding * 7.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
});

export default SavedAddresses;
