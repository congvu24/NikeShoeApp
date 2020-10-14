import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Constants from "expo-constants";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { Modalize } from "react-native-modalize";

const { width, height } = Dimensions.get("window");

const data = [
  { url: require("../images/icon-type-1.png"), name: "Basketball" },
  { url: require("../images/icon-type-2.png"), name: "Soccer" },
  { url: require("../images/icon-type-3.png"), name: "Boots" },
  { url: require("../images/icon-type-4.png"), name: "Sandal" },
  { url: require("../images/icon-type-5.png"), name: "Walking" },
  { url: require("../images/icon-type-6.png"), name: "Old School" },
  { url: require("../images/icon-type-7.png"), name: "Climing" },
  { url: require("../images/icon-type-8.png"), name: "Sneaker" },
];
const group = [
  { url: require("../images/group-1.jpg"), text: "Man" },
  { url: require("../images/group-2.jpg"), text: "Women" },
  { url: require("../images/group-3.jpg"), text: "Young" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
];

const product = [
  {
    name: "Nike Air 19",
    picture: require("../images/product3.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
];

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  navbar: {
    padding: 10,
    paddingTop: Constants.statusBarHeight + 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  navbarButton: {
    display: "flex",
    padding: 0,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  navbarButtonMargin: {
    marginHorizontal: 0,
  },
  navbarGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#282C40",
    paddingHorizontal: 10,
  },
});

export default function Checkout({ navigation }) {
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarButton} onPress={() => navigation.goBack()}>
          <Image source={require("../images/back-button.png")} />
        </TouchableOpacity>
      </View>
      <Text style={styles.pageTitle}>Checkout</Text>
    </View>
  );
}
