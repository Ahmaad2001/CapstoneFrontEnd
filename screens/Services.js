// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { CheckBox } from "react-native-elements"; // Import CheckBox from react-native-elements
// import { SafeAreaView } from "react-native-safe-area-context";

// const Services = () => {
//   const [services, setServices] = useState({
//     wash: false,
//     dryClean: false,
//     iron: false,
//   });

//   const handleServiceToggle = (service) => {
//     setServices((prevServices) => ({
//       ...prevServices,
//       [service]: !prevServices[service],
//     }));
//   };

//   const handleAddToBasket = () => {
//     // Handle adding item to basket with selected services
//     console.log("Added to basket:", services);
//   };

//   return (
//     <SafeAreaView>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Image source={require("../assets/cloth.png")} style={styles.image} />

//         <View style={styles.checklistContainer}>
//           <Text style={styles.heading}>Select Services:</Text>
//           <CheckBox
//             title="Wash"
//             checked={services.wash}
//             onPress={() => handleServiceToggle("wash")}
//             containerStyle={styles.checkboxContainer}
//             textStyle={styles.checkboxText}
//           />
//           <CheckBox
//             title="Dry Clean"
//             checked={services.dryClean}
//             onPress={() => handleServiceToggle("dryClean")}
//             containerStyle={styles.checkboxContainer}
//             textStyle={styles.checkboxText}
//           />
//           <CheckBox
//             title="Iron"
//             checked={services.iron}
//             onPress={() => handleServiceToggle("iron")}
//             containerStyle={styles.checkboxContainer}
//             textStyle={styles.checkboxText}
//           />
//         </View>

//         <TouchableOpacity
//           style={[
//             styles.addButton,
//             {
//               opacity:
//                 services.wash || services.dryClean || services.iron ? 1 : 0.5,
//             },
//           ]}
//           onPress={handleAddToBasket}
//           disabled={!services.wash && !services.dryClean && !services.iron}
//         >
//           <Text style={styles.addButtonText}>Add to Basket</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 20,
//   },
//   image: {
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "grey",
//     width: 350,
//     height: 350,
//     marginBottom: 20,
//   },
//   checklistContainer: {
//     alignItems: "flex-start",
//     width: "100%",
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     alignSelf: "flex-start",
//   },
//   checkboxContainer: {
//     backgroundColor: "transparent",
//     borderWidth: 0,
//     padding: 0,
//     marginLeft: 0,
//     marginRight: 0,
//     alignSelf: "flex-start",
//   },
//   checkboxText: {
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: "#007AFF",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginTop: 20,
//     alignSelf: "flex-end",
//   },
//   addButtonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// // export default Services;

// import React from "react";
// import { View, Text, Image, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import { BASE_URL } from "../api";

// const ServicesPage = () => {
//   const route = useRoute();
//   const selectedItem = route.params.selectedItem;

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: BASE_URL + selectedItem.serviceImage }}
//         style={styles.image}
//       />
//       <Text style={styles.name}>{selectedItem.name}</Text>
//       <Text style={styles.description}>{selectedItem.description}</Text>
//       <Text style={styles.price}>Price: ${selectedItem.price}</Text>
//       {/* Add more details here as needed */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#007AFF",
//     textAlign: "center",
//   },
//   // Add more styles as needed
// });

// // export default ServicesPage;

// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { BASE_URL } from "../api";

// const ServicesPage = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const selectedItem = route.params.selectedItem;

//   const [selectedService, setSelectedService] = useState(null);

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//   };

//   const handleBackToItemPage = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: BASE_URL + selectedItem.serviceImage }}
//         style={styles.image}
//       />
//       <Text style={styles.name}>{selectedItem.name}</Text>
//       <Text style={styles.description}>{selectedItem.description}</Text>
//       <Text style={styles.price}>Price: ${selectedItem.price}</Text>

//       <Text style={styles.serviceLabel}>Select a service:</Text>
//       <TouchableOpacity
//         style={[
//           styles.serviceButton,
//           selectedService === "wash" && styles.selectedServiceButton,
//         ]}
//         onPress={() => handleServiceSelect("wash")}
//       >
//         <Text style={styles.serviceButtonText}>Wash</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           styles.serviceButton,
//           selectedService === "dryClean" && styles.selectedServiceButton,
//         ]}
//         onPress={() => handleServiceSelect("dryClean")}
//       >
//         <Text style={styles.serviceButtonText}>Dry Clean</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           styles.serviceButton,
//           selectedService === "iron" && styles.selectedServiceButton,
//         ]}
//         onPress={() => handleServiceSelect("iron")}
//       >
//         <Text style={styles.serviceButtonText}>Iron</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={handleBackToItemPage}
//       >
//         <Text style={styles.backButtonText}>Back to Items</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 10,
//     textAlign: "center",
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#007AFF",
//     textAlign: "center",
//   },
//   serviceLabel: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 20,
//   },
//   serviceButton: {
//     borderWidth: 1,
//     borderColor: "#007AFF",
//     borderRadius: 5,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginTop: 10,
//   },
//   selectedServiceButton: {
//     backgroundColor: "#007AFF",
//   },
//   serviceButtonText: {
//     color: "#007AFF",
//     fontWeight: "bold",
//   },
//   backButton: {
//     marginTop: 20,
//   },
//   backButtonText: {
//     color: "#007AFF",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default ServicesPage;

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BASE_URL } from "../api";
import { MaterialIcons } from "@expo/vector-icons";

const ServicesPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedItem = route.params.selectedItem;

  const [selectedService, setSelectedService] = useState(null);
  const [serviceCounts, setServiceCounts] = useState({
    wash: 0,
    dryClean: 0,
    iron: 0,
  });

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleBackToItemPage = () => {
    navigation.goBack();
  };

  const handleIncreaseServiceCount = (service) => {
    setServiceCounts((prevCounts) => ({
      ...prevCounts,
      [service]: prevCounts[service] + 1,
    }));
  };

  const handleDecreaseServiceCount = (service) => {
    if (serviceCounts[service] > 0) {
      setServiceCounts((prevCounts) => ({
        ...prevCounts,
        [service]: prevCounts[service] - 1,
      }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons
        name="arrow-back"
        size={28}
        color="black"
        style={styles.backButton}
        onPress={handleBackToItemPage}
      />
      <Image
        source={{ uri: BASE_URL + selectedItem.serviceImage }}
        style={styles.image}
      />
      <Text style={styles.name}>{selectedItem.name}</Text>
      <Text style={styles.description}>{selectedItem.description}</Text>
      <Text style={styles.price}>
        Price: ${selectedItem.price * serviceCounts[selectedService]}
      </Text>

      <Text style={styles.serviceLabel}>Select a service:</Text>
      <View style={styles.serviceButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.serviceButton,
            selectedService === "wash" && styles.selectedServiceButton,
          ]}
          onPress={() => handleServiceSelect("wash")}
        >
          <Text style={styles.serviceButtonText}>Wash</Text>
          <Text style={styles.serviceUpdateButton}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.serviceButton,
            selectedService === "dryClean" && styles.selectedServiceButton,
          ]}
          onPress={() => handleServiceSelect("dryClean")}
        >
          <Text style={styles.serviceButtonText}>Dry Clean</Text>
          <Text style={styles.serviceUpdateButton}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.serviceButton,
            selectedService === "iron" && styles.selectedServiceButton,
          ]}
          onPress={() => handleServiceSelect("iron")}
        >
          <Text style={styles.serviceButtonText}>Iron</Text>
          <Text style={styles.serviceUpdateButton}>Update</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.serviceCountContainer}>
        <TouchableOpacity
          style={styles.serviceCountButton}
          onPress={() => handleDecreaseServiceCount(selectedService)}
        >
          <Text style={styles.serviceCountButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.serviceCount}>
          {serviceCounts[selectedService]}
        </Text>
        <TouchableOpacity
          style={styles.serviceCountButton}
          onPress={() => handleIncreaseServiceCount(selectedService)}
        >
          <Text style={styles.serviceCountButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
  },
  serviceLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  serviceButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  serviceButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: "center",
  },
  selectedServiceButton: {
    backgroundColor: "#007AFF",
  },
  serviceButtonText: {
    color: "#007AFF",
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
    textAlign: "center",
  },
  serviceUpdateButton: {
    color: "#007AFF",
    fontSize: 12,
    marginTop: 4,
  },
  serviceCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  serviceCountButton: {
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceCountButtonText: {
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  serviceCount: {
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ServicesPage;
