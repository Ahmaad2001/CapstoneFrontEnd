import React, { useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signin, storeToken } from "../api/laundries";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../context/UserContext";

const Signin = () => {
  const navigation = useNavigation();
  const [userInfo, setuserInfo] = useState({});
  const { setUser } = useContext(UserContext);
  const {
    mutate: signinFunction,
    error,
    isLoading,
  } = useMutation({
    mutationFn: () => signin(userInfo),
    onSuccess: (data) => {
      storeToken(data.token);
      setUser(true);
      navigation.navigate("Home");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleRegisterPress = () => {
    navigation.navigate("Signup"); // Navigate to the "Signup" screen
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")} // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Logo */}
        <Text style={styles.logo}>Sign in</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          onChangeText={(value) => {
            setuserInfo({ ...userInfo, username: value });
          }}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          onChangeText={(value) => {
            setuserInfo({ ...userInfo, password: value });
          }}
        />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            signinFunction();
          }}
        >
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>

        {/* Register Here Link */}

        <TouchableOpacity
          onPress={() => {
            handleRegisterPress();
          }}
        >
          <Text style={styles.registerLink}>
            Don't have an account?
            <Text style={styles.registerText}> Signup here</Text>
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
    color: "#a769f0",
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
    backgroundColor: "#a769f0",
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
    color: "#a769f0",
    fontWeight: "bold",
  },
});

export default Signin;
