import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useContext } from "react";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import BaskectContext from "../context/BascketContext";
import { BASE_URL } from "../api";
import { useNavigation } from "@react-navigation/native";

export default function Cart() {
  const navigation = useNavigation();
  const { baskect, setBaskect } = useContext(BaskectContext);
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
          My Cart
        </Text>
      </View>
    );
  }

  function continueButton({ cartItems = [] }) {
    const subTotal = cartItems.reduce(
      (sum, i) => (sum += i.totalCount * i.amount),
      0
    );
    const serviceFee = 1.0;
    const amountToPay = subTotal + serviceFee;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate("Payment", { amountToPay })}
        style={styles.continueButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor17SemiBold }}>Continue</Text>
      </TouchableOpacity>
    );
  }

  function laundryInfo() {
    return (
      <View style={{ ...styles.whiteBoxStyle, ...styles.laundryInfoWrapStyle }}>
        <Image
          source={{ uri: BASE_URL + baskect?.laundry?.image }}
          style={{
            width: 80.0,
            height: 80.0,
            borderRadius: Sizes.fixPadding - 5.0,
          }}
        />
        <View style={{ marginLeft: Sizes.fixPadding, flex: 1 }}>
          <Text style={{ ...Fonts.blackColor15Medium }}>
            {baskect?.laundry?.name}
          </Text>
          <View
            style={{ marginTop: Sizes.fixPadding - 8.0, flexDirection: "row" }}
          >
            <MaterialIcons
              name="location-pin"
              color={Colors.grayColor}
              size={14}
              style={{ marginTop: Sizes.fixPadding - 9.0 }}
            />
            <Text
              style={{
                flex: 1,
                marginLeft: Sizes.fixPadding - 5.0,
                ...Fonts.grayColor13Regular,
              }}
            >
              {baskect?.laundry?.location}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function productsInfo({ cartItems = [] }) {
    return (
      <View
        style={{
          ...styles.whiteBoxStyle,
          paddingHorizontal: Sizes.fixPadding,
          paddingVertical: Sizes.fixPadding * 2.0,
        }}
      >
        {cartItems.map((item, index) => (
          <View key={`${item.id}`}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ ...Fonts.blackColor16Medium }}>
                  {item.productType}
                </Text>
                <Text style={{ ...Fonts.grayColor13Regular }}>
                  {item.washOption}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    ...styles.productsCountWrapStyle,
                    paddingVertical: Sizes.fixPadding - 7.0,
                    marginRight: Sizes.fixPadding * 2.0,
                  }}
                >
                  {/* <Text
                    onPress={() =>
                      updateCartItmesCount({ id: item.id, type: "remove" })
                    }
                    style={
                      item.totalCount == 0
                        ? { ...Fonts.mediumGrayColor16SemiBold }
                        : { ...Fonts.primaryColor16SemiBold }
                    }
                  >
                    -
                  </Text> */}

                  <Text
                    style={{
                      marginHorizontal: Sizes.fixPadding + 3.0,
                      ...(item.totalCount == 0
                        ? { ...Fonts.mediumGrayColor13SemiBold }
                        : { ...Fonts.blackColor13SemiBold }),
                    }}
                  >
                    {item.totalCount}
                  </Text>

                  {/* <Text
                    onPress={() =>
                      updateCartItmesCount({ id: item.id, type: "add" })
                    }
                    style={{ ...Fonts.primaryColor16SemiBold }}
                  >
                    +
                  </Text> */}
                </View>
                <Text style={{ ...Fonts.blackColor14Medium }}>
                  {item.amount.toFixed(2)}
                  {` KD`}
                </Text>
              </View>
            </View>
            {index == cartItems.length - 1 ? null : (
              <View
                style={{
                  marginVertical: Sizes.fixPadding,
                  backgroundColor: Colors.lightGrayColor,
                  height: 1.0,
                }}
              />
            )}
          </View>
        ))}
      </View>
    );
  }

  function instructionInfo() {
    return (
      <View
        style={{ ...styles.whiteBoxStyle, ...styles.instructionInfoWrapStyle }}
      >
        <Feather
          name="edit"
          size={16}
          color={Colors.grayColor}
          style={{ marginTop: Sizes.fixPadding - 5.0 }}
        />
        <TextInput
          placeholder="Any Instruction? E.g Wash white clothes saperatly."
          placeholderTextColor={Colors.grayColor}
          style={{
            marginLeft: Sizes.fixPadding,
            flex: 1,
            ...Fonts.blackColor13Regular,
          }}
          multiline={true}
          numberOfLines={3}
          selectionColor={Colors.primaryColor}
          //   value={instruction}
          onChangeText={(value) => {}}
        />
      </View>
    );
  }

  function paymentInfo({ cartItems = [] }) {
    const subTotal = cartItems.reduce(
      (sum, i) => (sum += i.totalCount * i.amount),
      0
    );
    const serviceFee = 1.0;
    const amountToPay = subTotal + serviceFee;
    return (
      <View
        style={{
          ...styles.whiteBoxStyle,
          paddingHorizontal: Sizes.fixPadding,
          paddingVertical: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding - 5.0,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Payment Info
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...Fonts.blackColor15Medium }}>Sub Total</Text>
          <Text style={{ ...Fonts.blackColor15Medium }}>
            {subTotal.toFixed(2)}
            {` KD`}
          </Text>
        </View>
        <View
          style={{
            marginVertical: Sizes.fixPadding - 5.0,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ ...Fonts.blackColor15Medium }}>Service fee</Text>
          <Text style={{ ...Fonts.blackColor15Medium }}>
            {serviceFee.toFixed(2)}
            {` KD`}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ ...Fonts.blackColor15SemiBold }}>Amount to Pay</Text>
          <Text style={{ ...Fonts.blackColor15SemiBold }}>
            {amountToPay.toFixed(2)}
            {` KD`}
          </Text>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
        >
          {laundryInfo()}
          {productsInfo({ cartItems: baskect.cart })}
          {instructionInfo()}
          {paymentInfo({ cartItems: baskect.cart })}
        </ScrollView>
        {continueButton({ cartItems: baskect.cart })}
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
  laundryInfoWrapStyle: {
    marginVertical: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    padding: Sizes.fixPadding,
  },
  productsCountWrapStyle: {
    backgroundColor: Colors.bodyBackColor,
    borderRadius: Sizes.fixPadding * 3.0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding + 2.0,
  },
  instructionInfoWrapStyle: {
    marginVertical: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding,
    paddingTop: Sizes.fixPadding - 5.0,
    paddingBottom: Sizes.fixPadding + 5.0,
    flexDirection: "row",
  },
  whiteBoxStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
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
