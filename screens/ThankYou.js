import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../api/laundries";
import BaskectContext from "../context/BascketContext";

export default function ThankYou({ route }) {
  const { amountToPay } = route.params;
  const navigation = useNavigation();
  const { baskect, setBaskect } = useContext(BaskectContext);
  const { mutate: createOrderFn } = useMutation({
    mutationFn: () => createOrder({ ...baskect, amountToPay }),
    onSuccess: () => {
      navigation.navigate("Orders");
    },
  });
  function successInfo() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../assets/images/icons/success.png")}
          style={{ width: 80.0, height: 80.0, resizeMode: "contain" }}
        />
        <Text style={styles.successfullyTextStyle}>
          Order Placed Successfully !
        </Text>
        <Text
          style={{
            marginHorizontal: Sizes.fixPadding * 4.0,
            textAlign: "center",
            ...Fonts.grayColor13Regular,
          }}
        >
          Thank you for choosing us. You can check your order status in my order
          section
        </Text>
      </View>
    );
  }
  function myOrdersButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => createOrderFn()}
        style={styles.myOrdersButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor17SemiBold }}>My Orders</Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {successInfo()}
        {myOrdersButton()}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  successfullyTextStyle: {
    marginBottom: Sizes.fixPadding - 5.0,
    textAlign: "center",
    marginTop: Sizes.fixPadding * 2.0,
    ...Fonts.blackColor18SemiBold,
  },
  myOrdersButtonStyle: {
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding + 3.0,
  },
});
