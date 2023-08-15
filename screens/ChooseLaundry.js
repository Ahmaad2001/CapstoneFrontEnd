import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import LaundriesList from "../components/LaundriesList";
import { useQuery } from "@tanstack/react-query";
import { getAllLaundries } from "../api/laundries";
import { FlatList } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { BASE_URL } from "../api";
import { useNavigation } from "@react-navigation/native";
import BaskectContext from "../context/BascketContext";

export default function ChooseLaundry() {
  const { data: filteredLaundries } = useQuery({
    queryKey: ["choosingLaundry"],
    queryFn: () => getAllLaundries(),
  });

  const { setBaskect } = useContext(BaskectContext);
  const navigation = useNavigation();

  if (!filteredLaundries) return null;
  return (
    <SafeAreaView>
      <FlatList
        data={filteredLaundries}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setBaskect((a) => {
                  return { ...a, laundry: item };
                });
                navigation.navigate("Cart");
              }}
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
                    style={{
                      lineHeight: 17.0,
                      flex: 1,
                      ...Fonts.blackColor15Medium,
                    }}
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
                    <Text style={{ ...Fonts.blackColor13Medium }}>
                      {item.rating}
                    </Text>
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
        }}
      />
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
