import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { laundries } from "../data/laundriesData";
import LaundriesList from "../components/LaundriesList";
import { useQuery } from "@tanstack/react-query";
import { getAllLaundries } from "../api/laundries";

const Home = () => {
  const navigation = useNavigation();
  const { data: laundries } = useQuery({
    queryKey: ["laundries"],
    queryFn: () => getAllLaundries(),
  });
  const handleLaundryPress = (id, laundry) => {
    navigation.navigate("LaundryDetails", { id, laundry });
  };
  if (!laundries) return null;
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
