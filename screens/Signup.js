import React, { useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
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
      <View style={styles.container}>
        <Text style={styles.logo}>Sign up</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, username: value });
          }}
        />

        {/* Email Input */}
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

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, password: value });
          }}
          secureTextEntry
        />

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            signupFunction();
          }}
        >
          <Text style={styles.registerButtonText}>Signup</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.registerLink}>
            Already have an account?
            <Text style={styles.registerText}> Sign in here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
    color: "#ffa500",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "white",
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: "#ffa500",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerLink: {
    marginTop: 16,
    color: "black",

    fontSize: 16,
  },
  registerText: {
    color: "#ffa500",
    fontWeight: "bold",
  },
  registerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  registerButton: {
    marginTop: 10,
    backgroundColor: "#ffa500",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});

export default Signup;
