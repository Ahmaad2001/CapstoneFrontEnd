import React, { useState, useEffect, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import { signup, storeToken } from "../api/laundries";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../context/UserContext";

const Signup = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({});
  const { setUser } = useContext(UserContext);

  const { mutate: signupFunction, error } = useMutation({
    mutationFn: () => signup({ ...userInfo }),
    onSuccess: (data) => {
      storeToken(data.token);
      setUser(true);
      navigation.navigate("Home");
    },
  });

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, username: value });
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, email: value });
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, password: value });
          }}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            signupFunction();
          }}
        >
          <Text style={styles.registerButtonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.loginLinkText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  uploadButton: {
    backgroundColor: "#4169E1",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "white",
  },
  registerButton: {
    backgroundColor: "#4169E1",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginLink: {
    marginTop: 16,
  },
  loginLinkText: {
    color: "white",
    backgroundColor: "black",
    fontSize: 16,
  },
});

export default Signup;
