// screens/Home.js
import React from "react";
import { View, StyleSheet } from "react-native";
import Laundry from "./Laundry"; // Update the path as needed
import { laundries } from "../data/laundriesData"; // Update the path as needed

const Home = () => {
  return (
    <View style={styles.container}>
      <Laundry data={laundries} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Home;
