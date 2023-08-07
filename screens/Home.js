// screens/Home.js
import React from "react";
import { View, StyleSheet } from "react-native";

import { laundries } from "../data/laundriesData"; // Update the path as needed
import LaundriesList from "../components/LaundriesList";

const Home = () => {
  return (
    <View style={styles.container}>
      <LaundriesList data={laundries} />
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
