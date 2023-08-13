// import React from "react";
// import { View, StyleSheet, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// // import { laundries } from "../data/laundriesData";
// import ItemsList from "../components/ItemsList";
// import { useQuery } from "@tanstack/react-query";
// import { getAllServices } from "../api/laundries";

// const Orders = () => {
//   const navigation = useNavigation();
//   const { data: services } = useQuery({
//     queryKey: ["services"],
//     queryFn: () => getAllServices(),
//   });
//   const handleItemPress = (id, services) => {
//     navigation.navigate("services", { id, services });
//   };
//   if (!services) return null;
//   return (
//     <View style={styles.container}>
//       <ItemsList data={services} onPress={handleItemPress} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

// export default Orders;

import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";

const orderInProcessList = [
  {
    id: "1",
    laundryName: "Xpress Laundry Services",
    orderNo: "11001234",
    amount: 33.0,
    currentOrderStatusStep: 1,
    orderStatus: "Confirmed",
  },
  {
    id: "2",
    laundryName: "Sparkle Dry Cleaners",
    orderNo: "12349874",
    amount: 20.0,
    currentOrderStatusStep: 2,
    orderStatus: "Pickup",
  },
  {
    id: "3",
    laundryName: "My Laundry Masters",
    orderNo: "98746328",
    amount: 22.0,
    currentOrderStatusStep: 2,
    orderStatus: "Shipped",
  },
];

const pastOrdersList = [
  {
    id: "1",
    laundryName: "Sparkle Dry Cleaners",
    orderNo: "11001234",
    amount: 33.0,
  },
  {
    id: "2",
    laundryName: "Fiesta Laundromat",
    orderNo: "12349874",
    amount: 20.0,
  },
  {
    id: "3",
    laundryName: "My Laundry Masters",
    orderNo: "98746328",
    amount: 22.0,
  },
];

const OrdersScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <FlatList
          ListHeaderComponent={
            <>
              {orderInProcessInfo()}
              {pastOrdersInfo()}
            </>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: Sizes.fixPadding }}
        />
      </View>
    </SafeAreaView>
  );

  function pastOrdersInfo() {
    const renderItem = ({ item }) => (
      <View style={styles.orderInfoWrapStyle}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
              {item.laundryName}
            </Text>
            <Text style={{ ...Fonts.blackColor13Regular }}>
              Order No - {item.orderNo}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ ...Fonts.blackColor16SemiBold }}>
              {`$`}
              {item.amount.toFixed(2)}
            </Text>
            <Text style={{ ...Fonts.primaryColor14Medium }}>Delivered</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.lightGrayColor,
            height: 1.0,
            marginVertical: Sizes.fixPadding + 2.0,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {orderStepsSort({
            step: "Confirmed",
            icon: require("../assets/images/icons/confirm.png"),
            stepNo: 1,
            completedStepNo: 5,
          })}
          {orderStepsSort({
            step: "Pickup",
            icon: require("../assets/images/icons/pickup.png"),
            stepNo: 2,
            completedStepNo: 5,
          })}
          {orderStepsSort({
            step: "InProcess",
            icon: require("../assets/images/icons/inProcess.png"),
            stepNo: 3,
            completedStepNo: 5,
          })}
          {orderStepsSort({
            step: "Shipped",
            icon: require("../assets/images/icons/shipped.png"),
            stepNo: 4,
            completedStepNo: 5,
          })}
          {orderStepsSort({
            step: "Delivered",
            icon: require("../assets/images/icons/delivered.png"),
            stepNo: 5,
            completedStepNo: 5,
          })}
        </View>
      </View>
    );
    return (
      <View style={{ marginTop: Sizes.fixPadding }}>
        <Text
          style={{
            marginBottom: Sizes.fixPadding + 5.0,
            marginHorizontal: Sizes.fixPadding * 2.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Past Orders
        </Text>
        <FlatList
          data={pastOrdersList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          scrollEnabled={false}
          listKey="pastOrder"
        />
      </View>
    );
  }

  function orderInProcessInfo() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push("OrderStatus", { item: item })}
        style={styles.orderInfoWrapStyle}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={{ ...Fonts.blackColor16Medium }}>
              {item.laundryName}
            </Text>
            <Text style={{ ...Fonts.blackColor13Regular }}>
              Order No - {item.orderNo}
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ ...Fonts.blackColor16SemiBold }}>
              {`$`}
              {item.amount.toFixed(2)}
            </Text>
            <Text style={{ ...Fonts.primaryColor14Medium }}>
              {item.orderStatus}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.lightGrayColor,
            height: 1.0,
            marginVertical: Sizes.fixPadding + 2.0,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {orderStepsSort({
            step: "Confirmed",
            icon: require("../assets/images/icons/confirm.png"),
            stepNo: 1,
            completedStepNo: item.currentOrderStatusStep,
          })}
          {orderStepsSort({
            step: "Pickup",
            icon: require("../assets/images/icons/pickup.png"),
            stepNo: 2,
            completedStepNo: item.currentOrderStatusStep,
          })}
          {orderStepsSort({
            step: "InProcess",
            icon: require("../assets/images/icons/inProcess.png"),
            stepNo: 3,
            completedStepNo: item.currentOrderStatusStep,
          })}
          {orderStepsSort({
            step: "Shipped",
            icon: require("../assets/images/icons/shipped.png"),
            stepNo: 4,
            completedStepNo: item.currentOrderStatusStep,
          })}
          {orderStepsSort({
            step: "Delivered",
            icon: require("../assets/images/icons/delivered.png"),
            stepNo: 5,
            completedStepNo: item.currentOrderStatusStep,
          })}
        </View>
      </TouchableOpacity>
    );
    return (
      <View style={{ marginTop: Sizes.fixPadding * 2.0 }}>
        <Text
          style={{
            marginBottom: Sizes.fixPadding + 5.0,
            marginHorizontal: Sizes.fixPadding * 2.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Orders in Process
        </Text>
        <FlatList
          data={orderInProcessList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          scrollEnabled={false}
          listKey="processOrder"
        />
      </View>
    );
  }

  function orderStepsSort({ icon, step, stepNo, completedStepNo }) {
    return (
      <View style={{ alignItems: "center", flex: 1 }}>
        <ImageBackground
          source={icon}
          style={{ width: 25.0, height: 25.0, resizeMode: "contain" }}
        >
          {completedStepNo < stepNo ? (
            <View
              style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.7)" }}
            />
          ) : null}
        </ImageBackground>
        <Text
          numberOfLines={1}
          style={{
            marginTop: Sizes.fixPadding - 5.0,
            lineHeight: 14.0,
            ...(completedStepNo < stepNo
              ? { ...Fonts.mediumGrayColor12Medium }
              : { ...Fonts.blackColor12Medium }),
          }}
        >
          {step}
        </Text>
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <Text style={{ ...Fonts.blackColor18SemiBold }}>My Orders</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    padding: Sizes.fixPadding * 2.0,
    backgroundColor: Colors.whiteColor,
  },
  orderInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    padding: Sizes.fixPadding + 2.0,
    marginBottom: Sizes.fixPadding,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
});

export default OrdersScreen;
