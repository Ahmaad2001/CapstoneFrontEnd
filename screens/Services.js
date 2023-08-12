import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Services = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState({
    wash: 0,
    dryClean: 0,
    iron: 0,
  });

  const handleIncrement = (service) => {
    setServices((prevServices) => ({
      ...prevServices,
      [service]: prevServices[service] + 1,
    }));
  };

  const handleDecrement = (service) => {
    if (services[service] > 0) {
      setServices((prevServices) => ({
        ...prevServices,
        [service]: prevServices[service] - 1,
      }));
    }
  };

  const handleAddToBasket = () => {
    // Handle adding item to basket with selected services
    console.log("Added to basket:", services);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/cloth.png")} style={styles.image} />

      <View style={styles.serviceContainer}>
        <Text style={styles.heading}>Select Services:</Text>
        <View style={styles.serviceItem}>
          <Text style={styles.serviceText}>Wash</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDecrement("wash")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{services.wash}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleIncrement("wash")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceItem}>
          <Text style={styles.serviceText}>Dry Clean</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDecrement("dryClean")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{services.dryClean}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleIncrement("dryClean")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceItem}>
          <Text style={styles.serviceText}>Iron</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleDecrement("iron")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{services.iron}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleIncrement("iron")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.addButton,
          {
            opacity:
              services.wash > 0 || services.dryClean > 0 || services.iron > 0
                ? 1
                : 0.5,
          },
        ]}
        onPress={handleAddToBasket}
        disabled={
          services.wash === 0 && services.dryClean === 0 && services.iron === 0
        }
      >
        <Text style={styles.addButtonText}>Add to Basket</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Icon name="ios-arrow-back" size={24} color="white" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  image: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  serviceContainer: {
    alignItems: "flex-start",
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 18,
    marginRight: 15,
    flex: 1,
  },
  button: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
  count: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  addButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "flex-end",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    elevation: 2,
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Services;
