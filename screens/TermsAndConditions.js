import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { MaterialIcons } from "@expo/vector-icons";

const AcceptanceOfTerms = [
  "By accessing or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please refrain from using the App.",
];

const UseOfTheApp = [
  "The App is intended to provide laundry-related services. You agree to use the App for lawful purposes and in a manner consistent with these Terms and any applicable laws and regulations.",
];

const UserAccounts = [
  "Certain features of the App may require you to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for any activities that occur under your account. Promptly inform us of any unauthorized account use or security breaches.",
];

const ServiceAvailability = [
  "While we strive to ensure the availability and reliability of the App, we cannot guarantee uninterrupted access or freedom from errors or harmful elements. We may suspend, withdraw, or limit App availability without notice.",
];

const UserContent = [
  "The App may allow you to submit content such as reviews, feedback, or images. By submitting content, you grant us a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, and display your content in connection with the App.",
];

const Privacy = [
  "Respecting your privacy is crucial to us. Please review our Privacy Policy to comprehend how we gather, use, and disclose your information.",
];

const IntellectualProperty = [
  "The App's content, including text, graphics, logos, and software, is owned by [App Name] or its licensors and is protected by copyright and other intellectual property laws.",
];

const LimitationOfLiability = [
  "To the fullest extent permitted by law, [App Name] and its affiliates shall not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.",
];

const Indemnification = [
  "You agree to indemnify and hold [App Name], its affiliates, officers, directors, and employees harmless from any claims, demands, damages, losses, liabilities, and expenses arising from your App use or breach of these Terms.",
];
const TermsAndConditions = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <View style={{ flex: 1 }}>
        {header()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {AcceptanceOfTermsInfo()}
          {UseOfTheAppInfo()}
          {UserAccountsInfo()}
          {ServiceAvailabilityInfo()}
          {UserContentInfo()}
          {PrivacyInfo()}
          {IntellectualPropertyInfo()}
          {LimitationOfLiabilityInfo()}
          {IndemnificationInfo()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );

  function AcceptanceOfTermsInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Acceptance of Terms
        </Text>
        {AcceptanceOfTerms.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function UseOfTheAppInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Use of the App
        </Text>
        {UseOfTheApp.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function UserAccountsInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          User Accounts
        </Text>
        {UserAccounts.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function ServiceAvailabilityInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Service Availability
        </Text>
        {ServiceAvailability.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function UserContentInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          User Content
        </Text>
        {UserContent.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function PrivacyInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Privacy
        </Text>
        {Privacy.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function IntellectualPropertyInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Intellectual Property
        </Text>
        {IntellectualProperty.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function LimitationOfLiabilityInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Limitation of Liability
        </Text>
        {LimitationOfLiability.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
      </View>
    );
  }

  function IndemnificationInfo() {
    return (
      <View
        style={{
          marginTop: Sizes.fixPadding * 2.0,
          marginHorizontal: Sizes.fixPadding * 2.0,
        }}
      >
        <Text
          style={{
            marginBottom: Sizes.fixPadding,
            ...Fonts.blackColor16SemiBold,
          }}
        >
          Indemnification
        </Text>
        {Indemnification.map((item, index) => (
          <Text
            key={`${index}`}
            style={{
              ...Fonts.grayColor13Regular,
              marginBottom: Sizes.fixPadding - 5.0,
            }}
          >
            {item}
          </Text>
        ))}
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
          Terms & Conditions
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
});

export default TermsAndConditions;
