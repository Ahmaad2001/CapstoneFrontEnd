import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { laundries } from "../data/laundriesData";
import LaundriesList from "../components/LaundriesList";

const Home = () => {
  const navigation = useNavigation();

  const handleLaundryPress = (id, laundry) => {
    navigation.navigate("LaundryDetails", { id, laundry });
  };

  return (
    <View style={styles.container}>
      <LaundriesList data={laundries} onPress={handleLaundryPress} />
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
