import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";

const AddAddress = ({ navigation }) => {
  const [state, setState] = useState({
    selectedAddressTypeIndex: 2,
    areaName: "",
    address: "",
    contactNo: "",
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { selectedAddressTypeIndex, areaName, address, contactNo } = state;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {addressInfo()}
        </ScrollView>
        {saveButton()}
      </View>
    </SafeAreaView>
  );

  function saveButton() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.pop()}
        style={styles.saveButtonStyle}
      >
        <Text style={{ ...Fonts.whiteColor17SemiBold }}>Save</Text>
      </TouchableOpacity>
    );
  }

  function addressInfo() {
    return (
      <View style={styles.addressInfoWrapStyle}>
        {addressTypeInfo()}
        {areaNameInfo()}
        {completeAddressInfo()}
        {contactNoInfo()}
      </View>
    );
  }

  function contactNoInfo() {
    return (
      <View>
        <Text style={{ ...Fonts.grayColor13Regular }}>Contact No</Text>
        <TextInput
          value={contactNo}
          onChangeText={(value) => updateState({ contactNo: value })}
          selectionColor={Colors.primaryColor}
          style={styles.textFieldStyle}
          keyboardType="phone-pad"
        />
      </View>
    );
  }

  function completeAddressInfo() {
    return (
      <View style={{ marginVertical: Sizes.fixPadding * 2.0 }}>
        <Text style={{ ...Fonts.grayColor13Regular }}>Complete Address</Text>
        <TextInput
          value={address}
          onChangeText={(value) => updateState({ address: value })}
          selectionColor={Colors.primaryColor}
          style={styles.textFieldStyle}
          numberOfLines={2}
          multiline
        />
      </View>
    );
  }

  function areaNameInfo() {
    return (
      <View>
        <Text style={{ ...Fonts.grayColor13Regular }}>Area Name</Text>
        <TextInput
          value={areaName}
          onChangeText={(value) => updateState({ areaName: value })}
          selectionColor={Colors.primaryColor}
          style={styles.textFieldStyle}
        />
      </View>
    );
  }

  function addressTypeInfo() {
    return (
      <View style={{ marginBottom: Sizes.fixPadding * 2.0 }}>
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            textAlign: "center",
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Choose your Address Type
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {addressTypeOptionsSort({ index: 0, option: "Home" })}
          {addressTypeOptionsSort({ index: 1, option: "Office" })}
          {addressTypeOptionsSort({ index: 2, option: "Other" })}
        </View>
      </View>
    );
  }

  function addressTypeOptionsSort({ option, index }) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => updateState({ selectedAddressTypeIndex: index })}
        style={{
          ...styles.addressTypeOptionWrapStyle,
          backgroundColor:
            selectedAddressTypeIndex == index
              ? Colors.primaryColor
              : Colors.bodyBackColor,
          marginHorizontal: index == 1 ? Sizes.fixPadding : 0.0,
        }}
      >
        <Text
          style={
            selectedAddressTypeIndex == index
              ? { ...Fonts.whiteColor15Medium }
              : { ...Fonts.blackColor15Medium }
          }
        >
          {option}
        </Text>
      </TouchableOpacity>
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
          Add new Address
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
  addressTypeOptionWrapStyle: {
    borderRadius: Sizes.fixPadding - 5.0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding - 2.0,
  },
  textFieldStyle: {
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1.0,
    ...Fonts.blackColor14Medium,
  },
  saveButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding + 3.0,
    marginHorizontal: Sizes.fixPadding * 7.0,
    marginBottom: Sizes.fixPadding * 2.0,
  },
  addressInfoWrapStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    paddingVertical: Sizes.fixPadding * 2.0,
    paddingHorizontal: Sizes.fixPadding,
    margin: Sizes.fixPadding * 2.0,
  },
});

export default AddAddress;
