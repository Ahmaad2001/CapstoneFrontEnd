import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements"; // Import CheckBox from react-native-elements

const Services = () => {
  const [services, setServices] = useState({
    wash: false,
    dryClean: false,
    iron: false,
  });

  const handleServiceToggle = (service) => {
    setServices((prevServices) => ({
      ...prevServices,
      [service]: !prevServices[service],
    }));
  };

  const handleAddToBasket = () => {
    // Handle adding item to basket with selected services
    console.log("Added to basket:", services);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/cloth.png")} style={styles.image} />

      <View style={styles.checklistContainer}>
        <Text style={styles.heading}>Select Services:</Text>
        <CheckBox
          title="Wash"
          checked={services.wash}
          onPress={() => handleServiceToggle("wash")}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />
        <CheckBox
          title="Dry Clean"
          checked={services.dryClean}
          onPress={() => handleServiceToggle("dryClean")}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />
        <CheckBox
          title="Iron"
          checked={services.iron}
          onPress={() => handleServiceToggle("iron")}
          containerStyle={styles.checkboxContainer}
          textStyle={styles.checkboxText}
        />
      </View>

      <TouchableOpacity
        style={[
          styles.addButton,
          {
            opacity:
              services.wash || services.dryClean || services.iron ? 1 : 0.5,
          },
        ]}
        onPress={handleAddToBasket}
        disabled={!services.wash && !services.dryClean && !services.iron}
      >
        <Text style={styles.addButtonText}>Add to Basket</Text>
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
  },
  image: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  checklistContainer: {
    alignItems: "flex-start",
    width: "100%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    alignSelf: "flex-start",
  },
  checkboxText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "flex-end",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Services;
