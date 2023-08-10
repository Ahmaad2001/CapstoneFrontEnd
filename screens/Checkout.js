import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Checkout() {
  const navigation = useNavigation();

  const [items, setItems] = useState([
    { id: 1, name: "Shirt", price: 10, quantity: 1 },
    { id: 2, name: "Pants", price: 15, quantity: 1 },
    { id: 3, name: "Socks", price: 5, quantity: 1 },
    { id: 4, name: "Shirt", price: 10, quantity: 1 },
    { id: 5, name: "Pants", price: 15, quantity: 1 },
    { id: 6, name: "Socks", price: 5, quantity: 1 },
    { id: 7, name: "Shirt", price: 10, quantity: 1 },
    { id: 8, name: "Pants", price: 15, quantity: 1 },
    { id: 9, name: "Socks", price: 5, quantity: 1 },
  ]);

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <ScrollView>
      <View style={styles.itemContainer}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() =>
              handleUpdateQuantity(item.id, Math.max(item.quantity - 1, 1))
            }
          >
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}
          >
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveItem(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={28}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <Text style={styles.header}>Checkout</Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ marginBottom: 200 }}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${totalPrice}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Confirm Order"
            onPress={() => console.log("Order confirmed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    marginBottom: 6,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#007AFF",
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  removeButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#FFF",
  },
  totalContainer: {
    alignItems: "flex-end",
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
