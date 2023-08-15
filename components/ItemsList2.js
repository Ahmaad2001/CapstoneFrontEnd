import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { TabView, TabBar } from "react-native-tab-view";
import { BottomSheet } from "@rneui/themed";
import BaskectContext from "../context/BascketContext";
import { useNavigation } from "@react-navigation/native";

const washOptionsList = [
  {
    id: "1",
    option: "Wash Only",
    amount: 5.0,
  },
  {
    id: "2",
    option: "Iron Only",
    amount: 3.0,
  },
  {
    id: "3",
    option: "Wash & Iron",
    amount: 6.0,
  },
  {
    id: "4",
    option: "Dry Clean",
    amount: 3.0,
  },
];

const ItemsList2 = ({ data }) => {
  // const item = route.params.item;
  const navigation = useNavigation();
  const { baskect, setBaskect } = useContext(BaskectContext);
  const menProductsList = [
    {
      id: "1",
      productImage: require("../assets/images/cloths/tshirt.png"),
      productType: "T-shirt",
      amount: 5.0,
      washOption: washOptionsList[0].option,
      totalCount: 0,
    },
    {
      id: "2",
      productImage: require("../assets/images/cloths/suit.png"),
      productType: "Suit",
      amount: 5.0,
      washOption: washOptionsList[0].option,
      totalCount: 0,
    },
    {
      id: "3",
      productImage: require("../assets/images/cloths/shirt.png"),
      productType: "Shirt",
      amount: 5.0,
      washOption: washOptionsList[0].option,
      totalCount: 0,
    },
    {
      id: "4",
      productImage: require("../assets/images/cloths/jeans.png"),
      productType: "Jeans",
      amount: 5.0,
      washOption: washOptionsList[0].option,
      totalCount: 0,
    },
    {
      id: "5",
      productImage: require("../assets/images/cloths/jacket.png"),
      productType: "Jackets",
      amount: 5.0,
      washOption: washOptionsList[0].option,
      totalCount: 0,
    },
    {
      id: "6",
      productImage: require("../assets/images/cloths/trouser.png"),
      productType: "Trouser",
      amount: 3.0,
      washOption: washOptionsList[1].option,
      totalCount: 0,
    },
    {
      id: "7",
      productImage: require("../assets/images/cloths/bathRobe.png"),
      productType: "Bath Robe",
      amount: 5.0,
      washOption: washOptionsList[0].option,
      totalCount: 0,
    },
    {
      id: "8",
      productImage: require("../assets/images/cloths/shorts.png"),
      productType: "Shorts",
      amount: 3.0,
      washOption: washOptionsList[1].option,
      totalCount: 0,
    },
    {
      id: "9",
      productImage: require("../assets/images/cloths/socks.png"),
      productType: "Socks",
      amount: 5.0,
      washOption: washOptionsList[0].option,
      totalCount: 0,
    },
  ];
  const [otherProducts, setOtherProducts] = useState(menProductsList);

  function updateProducts({
    updatedList,
    id,
    selectedWashOption,
    selectedOptionAmount,
    category,
  }) {
    const newList = updatedList.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          washOption: selectedWashOption,
          amount: selectedOptionAmount,
        };
        return updatedItem;
      }
      return item;
    });
    category == "men"
      ? setMenProducts(newList)
      : category == "women"
      ? setWomenProducts(newList)
      : category == "household"
      ? setHouseholdProducts(newList)
      : category == "kids"
      ? setKidsProducts(newList)
      : setOtherProducts(newList);
  }

  function updateProductsCount({ updatedList, category, id, type }) {
    const newList = updatedList.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          totalCount:
            type == "remove"
              ? item.totalCount > 0
                ? item.totalCount - 1
                : item.totalCount
              : item.totalCount + 1,
        };
        return updatedItem;
      }
      return item;
    });

    category == "men"
      ? setMenProducts(newList)
      : category == "women"
      ? setWomenProducts(newList)
      : category == "household"
      ? setHouseholdProducts(newList)
      : category == "kids"
      ? setKidsProducts(newList)
      : setOtherProducts(newList);
  }

  const ProductsInfo = ({
    productsList,
    updateProducts,
    category,
    setProducts,
    updateProductsCount,
  }) => {
    const [state, setState] = useState({
      showWashOptionsSheet: false,
      selectedWashOption: null,
      selectedProduct: null,
      selectedOptionAmount: null,
    });

    const updateState = (data) => setState((state) => ({ ...state, ...data }));

    const {
      showWashOptionsSheet,
      selectedWashOption,
      selectedProduct,
      selectedOptionAmount,
    } = state;

    const renderItem = ({ item }) => (
      <View style={styles.productsWrapStyle}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={item.productImage}
            style={{ width: 50.0, height: 50.0, resizeMode: "contain" }}
          />
          <View style={{ marginLeft: Sizes.fixPadding }}>
            <Text style={{ ...Fonts.blackColor16Medium }}>
              {item.productType}
            </Text>
            <Text style={{ ...Fonts.grayColor14Medium }}>
              {`$`}
              {item.amount.toFixed(2)}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              updateState({
                selectedWashOption: item.washOption,
                selectedProduct: item,
                selectedOptionAmount: item.amount,
                showWashOptionsSheet: true,
              });
            }}
            style={{
              ...styles.washOptionAndCountInfoWrapStyle,
              paddingVertical: Sizes.fixPadding - 5.0,
            }}
          >
            <Text style={{ ...Fonts.blackColor13Medium }}>
              {item.washOption}
            </Text>
            <Octicons
              name="chevron-down"
              size={14}
              color={Colors.primaryColor}
              style={{ marginLeft: Sizes.fixPadding }}
            />
          </TouchableOpacity>
          <View
            style={{
              ...styles.washOptionAndCountInfoWrapStyle,
              paddingVertical: Sizes.fixPadding - 7.0,
              marginLeft: Sizes.fixPadding + 5.0,
            }}
          >
            <Text
              onPress={() => {
                updateProductsCount({
                  id: item.id,
                  type: "remove",
                  updatedList: productsList,
                  category: category,
                });
              }}
              style={
                item.totalCount == 0
                  ? { ...Fonts.mediumGrayColor16SemiBold }
                  : { ...Fonts.primaryColor16SemiBold }
              }
            >
              -
            </Text>
            <Text
              style={{
                marginHorizontal: Sizes.fixPadding + 3.0,
                ...(item.totalCount == 0
                  ? { ...Fonts.mediumGrayColor13SemiBold }
                  : { ...Fonts.blackColor13SemiBold }),
              }}
            >
              {item.totalCount}
            </Text>
            <Text
              onPress={() => {
                updateProductsCount({
                  id: item.id,
                  type: "add",
                  updatedList: productsList,
                  category: category,
                });
              }}
              style={{ ...Fonts.primaryColor16SemiBold }}
            >
              +
            </Text>
          </View>
        </View>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={productsList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingTop: Sizes.fixPadding * 2.0,
            paddingBottom: Sizes.fixPadding * 8.0,
          }}
          showsVerticalScrollIndicator={false}
        />
        {washOptionsSheet()}
      </View>
    );

    function updateProductWashOption() {
      const newList = productsList.map((item) => {
        if (item.id === selectedProduct.id) {
          const updatedItem = {
            ...item,
            washOption: selectedWashOption,
            amount: selectedOptionAmount,
          };
          return updatedItem;
        }
        return item;
      });
      setProducts(newList);
    }

    function washOptionsSheet() {
      return (
        <BottomSheet
          isVisible={showWashOptionsSheet}
          containerStyle={{ backgroundColor: "rgba(0.5, 0.50, 0, 0.50)" }}
          onBackdropPress={() => {
            updateState({ showWashOptionsSheet: false });
          }}
        >
          <View
            style={{
              backgroundColor: Colors.whiteColor,
              paddingTop: Sizes.fixPadding * 2.0,
              paddingHorizontal: Sizes.fixPadding * 2.0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={{ ...Fonts.blackColor17SemiBold }}>
                  {selectedProduct ? selectedProduct.productType : "T-shirt"}
                </Text>
                <Text style={{ ...Fonts.grayColor13Medium }}>Select Task</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  updateProducts({
                    updatedList: productsList,
                    id: selectedProduct.id,
                    selectedWashOption: selectedWashOption,
                    selectedOptionAmount: selectedOptionAmount,
                    category: category,
                  });
                  updateState({ showWashOptionsSheet: false });
                }}
                style={styles.addButtonStyle}
              >
                <Text style={{ ...Fonts.whiteColor17SemiBold }}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: Sizes.fixPadding + 5.0 }}>
              {washOptionsList.map((item, index) => (
                <View
                  key={`${item.id}`}
                  style={styles.bottomSheetWashOptionsWrapStyle}
                >
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      updateState({
                        selectedWashOption: item.option,
                        selectedOptionAmount: item.amount,
                      });
                    }}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <View
                      style={{
                        ...styles.checkBoxStyle,
                        backgroundColor:
                          selectedWashOption == item.option
                            ? Colors.primaryColor
                            : Colors.whiteColor,
                        borderColor:
                          selectedWashOption == item.option
                            ? Colors.primaryColor
                            : Colors.mediumGrayColor,
                      }}
                    >
                      {selectedWashOption == item.option ? (
                        <MaterialIcons
                          name="check"
                          color={Colors.whiteColor}
                          size={16}
                        />
                      ) : null}
                    </View>
                    <Text
                      style={{
                        marginLeft: Sizes.fixPadding,
                        ...Fonts.blackColor15Regular,
                      }}
                    >
                      {item.option}
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ ...Fonts.blackColor15Regular }}>
                    {`$`}
                    {item.amount.toFixed(2)}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </BottomSheet>
      );
    }
  };

  function itemCountAndPriceAndAddCartButtonInfo() {
    return (
      <View style={styles.itemCountTotalPriceAndAddCartButtonWrapStyle}>
        <View>
          <Text style={{ ...Fonts.blackColor15Medium }}>
            {/* {totalItemCount} */}
            Items
          </Text>
          <Text style={{ ...Fonts.blackColor16SemiBold }}>
            {otherProducts
              .reduce((sum, i) => (sum += i.totalCount * i.amount), 0)
              .toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate("Cart")}
          style={styles.viewCartButtonStyle}
        >
          <Text style={{ ...Fonts.whiteColor17SemiBold }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
  console.log(baskect);
  useEffect(() => {
    setBaskect({
      laundry: data,
      cart: otherProducts.filter((product) => {
        return product.totalCount > 0;
      }),
    });
  }, [otherProducts]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
      <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
      <ProductsInfo
        productsList={otherProducts}
        updateProductsCount={updateProductsCount}
        updateProducts={updateProducts}
        setProducts={setOtherProducts}
      />
      {itemCountAndPriceAndAddCartButtonInfo()}
    </SafeAreaView>
  );

  function header() {
    return (
      <View style={styles.headerWrapStyle}>
        <MaterialIcons
          name="arrow-back"
          color={Colors.blackColor}
          size={22}
          onPress={() => navigation.pop()}
          style={{ marginTop: Sizes.fixPadding - 13.0 }}
        />
        <Text
          style={{
            marginLeft: Sizes.fixPadding + 5.0,
            flex: 1,
            ...Fonts.blackColor18SemiBold,
          }}
        >
          {item.serviceName}
        </Text>
      </View>
    );
  }
};

const ProductsInfo = ({
  productsList,
  updateProducts,
  category,
  setProducts,
  updateProductsCount,
}) => {
  const [state, setState] = useState({
    showWashOptionsSheet: false,
    selectedWashOption: null,
    selectedProduct: null,
    selectedOptionAmount: null,
  });

  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  const {
    showWashOptionsSheet,
    selectedWashOption,
    selectedProduct,
    selectedOptionAmount,
  } = state;

  const renderItem = ({ item }) => (
    <View style={styles.productsWrapStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={item.productImage}
          style={{ width: 50.0, height: 50.0, resizeMode: "contain" }}
        />
        <View style={{ marginLeft: Sizes.fixPadding }}>
          <Text style={{ ...Fonts.blackColor16Medium }}>
            {item.productType}
          </Text>
          <Text style={{ ...Fonts.grayColor14Medium }}>
            {`$`}
            {item.amount.toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            updateState({
              selectedWashOption: item.washOption,
              selectedProduct: item,
              selectedOptionAmount: item.amount,
              showWashOptionsSheet: true,
            });
          }}
          style={{
            ...styles.washOptionAndCountInfoWrapStyle,
            paddingVertical: Sizes.fixPadding - 5.0,
          }}
        >
          <Text style={{ ...Fonts.blackColor13Medium }}>{item.washOption}</Text>
          <Octicons
            name="chevron-down"
            size={14}
            color={Colors.primaryColor}
            style={{ marginLeft: Sizes.fixPadding }}
          />
        </TouchableOpacity>
        <View
          style={{
            ...styles.washOptionAndCountInfoWrapStyle,
            paddingVertical: Sizes.fixPadding - 7.0,
            marginLeft: Sizes.fixPadding + 5.0,
          }}
        >
          <Text
            onPress={() => {
              updateProductsCount({
                id: item.id,
                type: "remove",
                updatedList: productsList,
                category: category,
              });
            }}
            style={
              item.totalCount == 0
                ? { ...Fonts.mediumGrayColor16SemiBold }
                : { ...Fonts.primaryColor16SemiBold }
            }
          >
            -
          </Text>
          <Text
            style={{
              marginHorizontal: Sizes.fixPadding + 3.0,
              ...(item.totalCount == 0
                ? { ...Fonts.mediumGrayColor13SemiBold }
                : { ...Fonts.blackColor13SemiBold }),
            }}
          >
            {item.totalCount}
          </Text>
          <Text
            onPress={() => {
              updateProductsCount({
                id: item.id,
                type: "add",
                updatedList: productsList,
                category: category,
              });
            }}
            style={{ ...Fonts.primaryColor16SemiBold }}
          >
            +
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={productsList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingTop: Sizes.fixPadding * 2.0,
          paddingBottom: Sizes.fixPadding * 8.0,
        }}
        showsVerticalScrollIndicator={false}
      />
      {washOptionsSheet()}
    </View>
  );

  function updateProductWashOption() {
    const newList = productsList.map((item) => {
      if (item.id === selectedProduct.id) {
        const updatedItem = {
          ...item,
          washOption: selectedWashOption,
          amount: selectedOptionAmount,
        };
        return updatedItem;
      }
      return item;
    });
    setProducts(newList);
  }

  function washOptionsSheet() {
    return (
      <BottomSheet
        isVisible={showWashOptionsSheet}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.50, 0, 0.50)" }}
        onBackdropPress={() => {
          updateState({ showWashOptionsSheet: false });
        }}
      >
        <View
          style={{
            backgroundColor: Colors.whiteColor,
            paddingTop: Sizes.fixPadding * 2.0,
            paddingHorizontal: Sizes.fixPadding * 2.0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ ...Fonts.blackColor17SemiBold }}>
                {selectedProduct ? selectedProduct.productType : "T-shirt"}
              </Text>
              <Text style={{ ...Fonts.grayColor13Medium }}>Select Task</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                updateProducts({
                  updatedList: productsList,
                  id: selectedProduct.id,
                  selectedWashOption: selectedWashOption,
                  selectedOptionAmount: selectedOptionAmount,
                  category: category,
                });
                updateState({ showWashOptionsSheet: false });
              }}
              style={styles.addButtonStyle}
            >
              <Text style={{ ...Fonts.whiteColor17SemiBold }}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: Sizes.fixPadding + 5.0 }}>
            {washOptionsList.map((item, index) => (
              <View
                key={`${item.id}`}
                style={styles.bottomSheetWashOptionsWrapStyle}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    updateState({
                      selectedWashOption: item.option,
                      selectedOptionAmount: item.amount,
                    });
                  }}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <View
                    style={{
                      ...styles.checkBoxStyle,
                      backgroundColor:
                        selectedWashOption == item.option
                          ? Colors.primaryColor
                          : Colors.whiteColor,
                      borderColor:
                        selectedWashOption == item.option
                          ? Colors.primaryColor
                          : Colors.mediumGrayColor,
                    }}
                  >
                    {selectedWashOption == item.option ? (
                      <MaterialIcons
                        name="check"
                        color={Colors.whiteColor}
                        size={16}
                      />
                    ) : null}
                  </View>
                  <Text
                    style={{
                      marginLeft: Sizes.fixPadding,
                      ...Fonts.blackColor15Regular,
                    }}
                  >
                    {item.option}
                  </Text>
                </TouchableOpacity>
                <Text style={{ ...Fonts.blackColor15Regular }}>
                  {`$`}
                  {item.amount.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </BottomSheet>
    );
  }
};

const styles = StyleSheet.create({
  headerWrapStyle: {
    padding: Sizes.fixPadding * 2.0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
  },
  washOptionAndCountInfoWrapStyle: {
    backgroundColor: Colors.bodyBackColor,
    borderRadius: Sizes.fixPadding * 3.0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Sizes.fixPadding + 2.0,
  },
  productsWrapStyle: {
    backgroundColor: Colors.whiteColor,
    borderRadius: Sizes.fixPadding - 5.0,
    elevation: 2.0,
    padding: Sizes.fixPadding + 5.0,
    marginHorizontal: Sizes.fixPadding * 2.0,
    marginBottom: Sizes.fixPadding,
  },
  addButtonStyle: {
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding * 3.0,
    paddingHorizontal: Sizes.fixPadding * 2.8,
    paddingVertical: Sizes.fixPadding - 5.0,
  },
  checkBoxStyle: {
    width: 20.0,
    height: 20.0,
    borderRadius: Sizes.fixPadding - 8.0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
  bottomSheetWashOptionsWrapStyle: {
    marginBottom: Sizes.fixPadding + 5.0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemCountTotalPriceAndAddCartButtonWrapStyle: {
    position: "absolute",
    bottom: 0.0,
    left: 0.0,
    right: 0.0,
    backgroundColor: Colors.bodyBackColor,
    flexDirection: "row",
    paddingHorizontal: Sizes.fixPadding * 2.0,
    paddingBottom: Sizes.fixPadding * 2.0,
  },
  viewCartButtonStyle: {
    marginLeft: Sizes.fixPadding * 6.0,
    flex: 1,
    backgroundColor: Colors.primaryColor,
    borderRadius: Sizes.fixPadding - 5.0,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: Sizes.fixPadding,
  },
});

export default ItemsList2;
