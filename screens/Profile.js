import React, { useCallback, useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { Feather } from "@expo/vector-icons";
import { Overlay } from "@rneui/themed";
import UserContext from "../context/UserContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { signout } from "../api/laundries";

const ProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    signout();
    setUser(false);
    navigation.navigate("Home");
  };

  useFocusEffect(
    useCallback(() => {
      console.log(user);
      if (!user) {
        navigation.navigate("Signin");
        return null;
      }
    }, [user])
  );
  const navigation = useNavigation();

  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  if (!user) {
    navigation.navigate("Signin");
    return null;
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
          {profileInfo()}
          {mainProfileOptions()}
        </ScrollView>
        {logoutDialog()}
      </View>
    </SafeAreaView>
  );

  function logoutDialog() {
    return (
      <Overlay
        isVisible={showLogoutDialog}
        onBackdropPress={() => setShowLogoutDialog(false)}
        overlayStyle={{
          padding: 0.0,
          width: "80%",
          borderRadius: Sizes.fixPadding - 5.0,
        }}
      >
        <View style={styles.dialogWrapStyle}>
          <Text style={{ ...Fonts.grayColor16Medium }}>
            Sure you want to logout?
          </Text>
          <View style={styles.logoutNoYesWrapStyle}>
            <Text
              onPress={() => setShowLogoutDialog(false)}
              style={{ ...Fonts.primaryColor17SemiBold }}
            >
              No
            </Text>
            <Text
              onPress={() => {
                setShowLogoutDialog(false);

                handleLogout();
              }}
              style={{
                marginLeft: Sizes.fixPadding * 2.0,
                ...Fonts.primaryColor17SemiBold,
              }}
            >
              Yes
            </Text>
          </View>
        </View>
      </Overlay>
    );
  }

  function logoutOption() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          setShowLogoutDialog(true);
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: Sizes.fixPadding,
        }}
      >
        <Feather name="log-out" size={22} color={Colors.primaryColor} />
        <Text
          style={{
            marginLeft: Sizes.fixPadding + 5.0,
            ...Fonts.blackColor14Medium,
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    );
  }

  function mainProfileOptions() {
    return (
      <View
        style={{
          ...styles.whiteBoxStyle,
          paddingVertical: Sizes.fixPadding * 2.0,
        }}
      >
        {profileOptionSort({
          option: "Account Info",
          iconName: "user",
          navigateTo: "EditProfile",
        })}
        {divider()}
        {profileOptionSort({
          option: "Saved Addresses",
          iconName: "map-pin",
          navigateTo: "SavedAddresses",
        })}
        {divider()}
        {logoutOption()}
      </View>
    );
  }

  function profileOptionSort({ option, iconName, navigateTo }) {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.push(navigateTo)}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: Sizes.fixPadding,
        }}
      >
        <Feather name={iconName} size={22} color={Colors.primaryColor} />
        <Text
          style={{
            marginLeft: Sizes.fixPadding + 5.0,
            ...Fonts.blackColor14Medium,
          }}
        >
          {option}
        </Text>
      </TouchableOpacity>
    );
  }

  function divider() {
    return (
      <View
        style={{
          backgroundColor: "#E6E6E6",
          height: 1.0,
          marginVertical: Sizes.fixPadding + 10.0,
        }}
      />
    );
  }

  function profileInfo() {
    return (
      <View style={{ ...styles.profileInfoWrapStyle, ...styles.whiteBoxStyle }}>
        <Image
          source={require("../assets/images/users/user.png")}
          style={{ width: 60.0, height: 60.0, borderRadius: 30.0 }}
        />
        <View style={{ marginLeft: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.blackColor13Medium }}>Welcome,</Text>
          <Text style={{ ...Fonts.blackColor15SemiBold }}>Ahmad</Text>
        </View>
      </View>
    );
  }

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <Text style={{ ...Fonts.blackColor18SemiBold }}>Profile</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    padding: Sizes.fixPadding * 2.0,
    backgroundColor: Colors.whiteColor,
  },
  whiteBoxStyle: {
    backgroundColor: Colors.whiteColor,
    elevation: 2.0,
    borderRadius: Sizes.fixPadding - 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
  },
  profileInfoWrapStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Sizes.fixPadding * 2.0,
    padding: Sizes.fixPadding,
  },
  dialogWrapStyle: {
    borderRadius: Sizes.fixPadding - 5.0,
    backgroundColor: Colors.whiteColor,
    padding: Sizes.fixPadding * 2.0,
  },
  logoutNoYesWrapStyle: {
    marginTop: Sizes.fixPadding * 2.0,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileScreen;

// ============>{XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}<================ //

// import React, { useCallback, useContext } from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import UserContext from "../context/UserContext";
// import { useFocusEffect, useNavigation } from "@react-navigation/native";
// import { signout } from "../api/laundries";

// export default Profile = () => {
//   const navigation = useNavigation();

//   const { user, setUser } = useContext(UserContext);

//   const handleLogout = () => {
//     signout();
//     setUser(false);
//     navigation.navigate("Home");
//   };

//   useFocusEffect(
//     useCallback(() => {
//       console.log(user);
//       if (!user) {
//         navigation.navigate("Signin");
//         return null;
//       }
//     }, [user])
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.body}>
//         <View style={styles.bodyContent}>
//           <TouchableOpacity style={styles.buttonContainer}>
//             <Text style={styles.buttonText}>Favorite Laundries</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.buttonContainer}>
//             <Text style={styles.buttonText}>My Locations</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.buttonContainer}>
//             <Text style={styles.buttonText}>Past Orders</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buttonContainer}
//             onPress={handleLogout}
//           >
//             <Text>Log Out</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   header: {
//     height: 200,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     marginBottom: 10,
//   },
//   body: {
//     marginTop: 40,
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: "center",
//     padding: 30,
//   },
//   name: {
//     fontSize: 22,
//     color: "#FFFFFF",
//     fontWeight: "600",
//   },
//   info: {
//     fontSize: 16,
//     color: "#00BFFF",
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#696969",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   buttonContainer: {
//     marginTop: 20,
//     height: 45,
//     width: "105%",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#00BFFF",
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// ============>{XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}<================ //

// import React, { useState, useRef } from "react";
// import { StyleSheet, View, TextInput, Button, Text } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

// function TryMsgScreen() {
//   const [Comments, SetComments] = useState([]);
//   const [commentValue, setCommentValue] = useState("");
//   const InputRef = useRef();

//   // Function to add comments to array
//   const AddToComments = () => {
//     let temp = {
//       id: GenerateUniqueID(),
//       commentValue: commentValue,
//     };
//     SetComments([...Comments, temp]); // Adds comment to Array
//     InputRef.current.clear(); // This clears the TextInput Field
//   };

//   // Function to Generate a Unique ID for array elements
//   const GenerateUniqueID = () => {
//     return Math.floor(Math.random() * Date.now()).toString();
//   };

//   return (
//     <View style={styles.container}>
//       <FontAwesome name="commenting" size={64} color="#2C3E50" />

//       <View style={styles.commentContainer}>
//         <TextInput
//           style={styles.inputText}
//           onChangeText={(text) => setCommentValue(text)}
//           placeholder="Type something..."
//           ref={InputRef}
//         />
//         <Button title="Send" onPress={() => AddToComments()} />
//       </View>

//       <View style={styles.commentsList}>
//         {Comments.map((c) => (
//           <View style={styles.commentItem} key={c.id}>
//             <Text style={styles.commentText}>{c.commentValue}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// export default TryMsgScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ECF0F1",
//   },
//   commentContainer: {
//     width: "80%",
//     flexDirection: "row",
//     marginTop: 30,
//     marginBottom: 20,
//   },
//   inputText: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#34495E",
//     padding: 10,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   commentsList: {
//     width: "80%",
//   },
//   commentItem: {
//     backgroundColor: "#F39C12",
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   commentText: {
//     color: "white",
//     fontSize: 16,
//   },
// });

// ============>{XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX}<================ //

// import React, { useState } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
// } from "react-native";

// export default function Profile() {
//   const [defaultRating, setdefaultRating] = useState(2);
//   const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

//   const starImgFilled =
//     "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
//   const starImgCorner =
//     "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

//   const CustomRatingBar = () => {
//     return (
//       <View style={styles.customRatingBarStyle}>
//         {maxRating.map((item, key) => {
//           return (
//             <TouchableOpacity
//               activeOpacity={0.7}
//               key={item}
//               onPress={() => setdefaultRating(item)}
//             >
//               <Image
//                 style={styles.starImgStyle}
//                 source={
//                   item <= defaultRating
//                     ? { uri: starImgFilled }
//                     : { uri: starImgCorner }
//                 }
//               />
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.textStyle}>Rate us</Text>
//       <CustomRatingBar />
//       <Text style={styles.textStyle}>
//         {defaultRating + "/" + maxRating.length}
//       </Text>
//       <TouchableOpacity
//         activeOpacity={0.7}
//         style={styles.buttonStyle}
//         onPress={() => alert(defaultRating)}
//       >
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F9F9F9",
//   },
//   textStyle: {
//     fontSize: 23,
//     marginTop: 20,
//   },
//   customRatingBarStyle: {
//     justifyContent: "center",
//     flexDirection: "row",
//     marginTop: 30,
//   },
//   starImgStyle: {
//     width: 40,
//     height: 40,
//     resizeMode: "cover",
//   },
//   buttonStyle: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 30,
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     backgroundColor: "#FF5733",
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
