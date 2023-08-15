import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { getAllLaundries } from "../api/laundries";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../api";

function NearByLaundries() {
  const navigation = useNavigation();
  const { data: laundry } = useQuery({
    queryKey: ["laundry"],
    queryFn: () => getAllLaundries(),
  });
  const renderItem = ({ item }) => {
    console.log(BASE_URL + item.image);

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate("LaundryDetails", { item: item })}
        style={styles.nearByLaundryWrapStyle}
      >
        <Image
          style={{
            width: 90.0,
            height: 90.0,
            borderRadius: Sizes.fixPadding - 5.0,
          }}
          source={{
            uri: BASE_URL + item.image,
          }}
        />
        <View style={{ flex: 1, marginLeft: Sizes.fixPadding + 5.0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              numberOfLines={1}
              style={{ lineHeight: 17.0, flex: 1, ...Fonts.blackColor15Medium }}
            >
              {item.name}
            </Text>
            <View
              style={{
                marginLeft: Sizes.fixPadding - 5.0,
                flexDirection: "row",
                alignItems: "center",
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
              <Text style={{ ...Fonts.blackColor13Medium }}>{item.rating}</Text>
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
            <Text
              numberOfLines={1}
              style={{ flex: 1, ...Fonts.grayColor13Regular }}
            >
              {item.location}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons
              name="access-time"
              color={Colors.grayColor}
              size={15}
              style={{
                marginTop: Sizes.fixPadding - 13.0,
                marginRight: Sizes.fixPadding - 5.0,
              }}
            />
            <Text style={{ flex: 1, ...Fonts.grayColor13Regular }}>
              {item.workingHours}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <Text
              style={{
                marginBottom: Sizes.fixPadding * 2.0,
                marginHorizontal: Sizes.fixPadding * 2.0,
                ...Fonts.grayColor14Medium,
              }}
            >
              All Laundries
            </Text>
          }
          data={laundry}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: Sizes.fixPadding }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerWrapStyle: {
    padding: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
  },
  searchFieldWrapStyle: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2.0,
    margin: Sizes.fixPadding * 2.0,
    paddingVertical: Sizes.fixPadding + 5.0,
    paddingHorizontal: Sizes.fixPadding,
  },
  nearByLaundryWrapStyle: {
    backgroundColor: Colors.whiteColor,
    marginHorizontal: Sizes.fixPadding - 5.0,
    flexDirection: "row",
    alignItems: "center",
    padding: Sizes.fixPadding + 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    marginBottom: Sizes.fixPadding,
    elevation: 2.0,
  },
  laundryLocationInfoWrapStyle: {
    marginTop: Sizes.fixPadding - 8.0,
    marginBottom: Sizes.fixPadding - 5.0,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default NearByLaundries;
