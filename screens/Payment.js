import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";

export default function Payment({ route }) {
  const { amountToPay } = route.params;
  const navigation = useNavigation();
  const [state, setState] = useState({
    selectedpaymentIndex: 3,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { selectedpaymentIndex } = state;
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
          Select Payment Method
        </Text>
      </View>
    );
  }

  function paymentOptionsSort({ paymentIcon, paymentMethod, index }) {
    return (
      <TouchableOpacity
        activeOpacity={0.99}
        onPress={() => updateState({ selectedpaymentIndex: index })}
        style={styles.paymentOptionWrapStyle}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Image
            source={paymentIcon}
            style={{ width: 45.0, height: 45.0, resizeMode: "contain" }}
          />
          <Text
            style={{
              marginLeft: Sizes.fixPadding + 5.0,
              ...Fonts.blackColor14Medium,
            }}
          >
            {paymentMethod}
          </Text>
        </View>
        <View
          style={{
            ...styles.radioButtonStyle,
            borderColor:
              selectedpaymentIndex == index
                ? Colors.primaryColor
                : Colors.mediumGrayColor,
          }}
        >
          {selectedpaymentIndex == index ? (
            <View
              style={{
                width: 8.0,
                height: 8.0,
                borderRadius: 4.0,
                backgroundColor: Colors.primaryColor,
              }}
            />
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
  function cashInfo() {
    return (
      <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Cash
        </Text>
        {paymentOptionsSort({
          paymentIcon: require("../assets/images/payments/cashOnDelivery.png"),
          paymentMethod: "Cash on Delivery",
          index: 3,
        })}
      </View>
    );
  }

  function continueButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Thankyou", { amountToPay })}
        style={styles.continueButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor17SemiBold }}>Continue</Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {cashInfo()}
        </ScrollView>
        {continueButton()}
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
  radioButtonStyle: {
    width: 18.0,
    height: 18.0,
    borderRadius: 9.0,
    borderWidth: 1.0,
    alignItems: "center",
    justifyContent: "center",
  },
  paymentOptionWrapStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Sizes.fixPadding,
    paddingHorizontal: Sizes.fixPadding + 2.0,
    marginBottom: Sizes.fixPadding,
  },
  continueButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding + 3.0,
    marginHorizontal: Sizes.fixPadding * 7.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
});
