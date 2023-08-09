import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import { laundries } from "../data/laundriesData";
import ItemsList from "../components/ItemsList";
import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "../api/laundries";

const Orders = () => {
  const navigation = useNavigation();
  const { data: services } = useQuery({
    queryKey: ["services"],
    queryFn: () => getAllServices(),
  });

  const handleItemPress = (id, services) => {
    navigation.navigate("services", { id, services });
  };
  if (!services) return null;
  return (
    <View style={styles.container}>
      <ItemsList data={services} onPress={handleItemPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Orders;
