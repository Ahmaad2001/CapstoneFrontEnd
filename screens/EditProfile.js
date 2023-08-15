import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import {
  MaterialIcons,
  Feather,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BottomSheet } from "@rneui/themed";

const EditProfile = ({ navigation }) => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    password: "",
    showBottomSheet: false,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const { fullName, email, mobileNo, password, showBottomSheet } = state;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {profilePicWithChangeInfo()}
          {fullNameInfo()}
          {emailInfo()}
          {mobileNumberInfo()}
          {passwordInfo()}
        </ScrollView>
        {saveButton()}
        {changeProfilePicOptionsSheet()}
      </View>
    </SafeAreaView>
  );

  function changeProfilePicOptionsSheet() {
    return (
      <BottomSheet
        isVisible={showBottomSheet}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.50, 0, 0.50)" }}
        onBackdropPress={() => {
          updateState({ showBottomSheet: false });
        }}
      >
        <TouchableOpacity
          activeOpacity={0.99}
          onPress={() => updateState({ showBottomSheet: false })}
          style={styles.changeProfilePicBottomSheetStyle}
        >
          <Text style={{ ...Fonts.blackColor16SemiBold }}>Choose Option</Text>
          <View
            style={{ marginTop: Sizes.fixPadding + 2.0, flexDirection: "row" }}
          >
            {changeProfilePicOptionsSort({
              bgColor: "#009688",
              icon: (
                <Entypo name="camera" size={22} color={Colors.whiteColor} />
              ),
              option: "Camera",
            })}
            <View style={{ marginHorizontal: Sizes.fixPadding * 3.0 }}>
              {changeProfilePicOptionsSort({
                bgColor: "#00A7F7",
                icon: (
                  <MaterialCommunityIcons
                    name="image"
                    size={24}
                    color={Colors.whiteColor}
                  />
                ),
                option: "Gallery",
              })}
            </View>
            {changeProfilePicOptionsSort({
              bgColor: "#DD5A5A",
              icon: (
                <MaterialCommunityIcons
                  name="delete"
                  size={24}
                  color={Colors.whiteColor}
                />
              ),
              option: `Remove\nphoto`,
            })}
          </View>
        </TouchableOpacity>
      </BottomSheet>
    );
  }

  function changeProfilePicOptionsSort({ bgColor, icon, option }) {
    return (
      <View>
        <View
          style={{
            ...styles.changeProfilePicOptionsIconWrapStyle,
            backgroundColor: bgColor,
          }}
        >
          {icon}
        </View>
        <Text
          style={{
            marginTop: Sizes.fixPadding - 5.0,
            ...Fonts.grayColor13Regular,
          }}
        >
          {option}
        </Text>
      </View>
    );
  }

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

  function passwordInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.grayColor13Regular }}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(value) => updateState({ password: value })}
          style={styles.textFieldStyle}
          secureTextEntry={true}
          selectionColor={Colors.primaryColor}
        />
      </View>
    );
  }

  function mobileNumberInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.grayColor13Regular }}>Mobile Number</Text>
        <TextInput
          value={mobileNo}
          onChangeText={(value) => updateState({ mobileNo: value })}
          style={styles.textFieldStyle}
          selectionColor={Colors.primaryColor}
          keyboardType="phone-pad"
        />
      </View>
    );
  }

  function emailInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.grayColor13Regular }}>Email Address</Text>
        <TextInput
          value={email}
          onChangeText={(value) => updateState({ email: value })}
          style={styles.textFieldStyle}
          selectionColor={Colors.primaryColor}
          keyboardType="email-address"
        />
      </View>
    );
  }

  function fullNameInfo() {
    return (
      <View
        style={{
          marginHorizontal: Sizes.fixPadding * 2.0,
          marginBottom: Sizes.fixPadding * 2.0,
        }}
      >
        <Text style={{ ...Fonts.grayColor13Regular }}>Full Name</Text>
        <TextInput
          value={fullName}
          onChangeText={(value) => updateState({ fullName: value })}
          style={styles.textFieldStyle}
          selectionColor={Colors.primaryColor}
        />
      </View>
    );
  }

  function profilePicWithChangeInfo() {
    return (
      <View style={{ alignItems: "center", margin: Sizes.fixPadding * 2.0 }}>
        <Image
          source={require("../assets/images/users/user.png")}
          style={{ width: 150.0, height: 150.0, borderRadius: 50.0 }}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => updateState({ showBottomSheet: true })}
          style={styles.changeInfoWrapStyle}
        >
          <Feather name="camera" size={14} color={Colors.whiteColor} />
          <Text
            style={{
              marginLeft: Sizes.fixPadding - 5.0,
              ...Fonts.whiteColor12SemiBold,
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
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
          Edit Profile
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
  changeInfoWrapStyle: {
    backgroundColor: Colors.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding + 3.0,
    borderRadius: Sizes.fixPadding * 3.0,
    borderColor: Colors.whiteColor,
    borderWidth: 2.0,
    position: "absolute",
    bottom: 0.0,
    elevation: 2.0,
  },
  textFieldStyle: {
    ...Fonts.blackColor14Medium,
    height: 26.0,
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1.0,
    paddingBottom: Sizes.fixPadding - 7.0,
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
  changeProfilePicBottomSheetStyle: {
    backgroundColor: Colors.whiteColor,
    padding: Sizes.fixPadding * 2.0,
  },
  changeProfilePicOptionsIconWrapStyle: {
    width: 50.0,
    height: 50.0,
    borderRadius: 25.0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProfile;
