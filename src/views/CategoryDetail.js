import React from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../component/BackButton";
import { useRoute } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

const { width, height } = Dimensions.get("window");

const product = [
  { name: "Nike Air 19", picture: require("../images/product3.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
];

export default function CategoryDetail() {
  const route = useRoute();
  const { collection } = route.params;

  return (
    <ScrollView style={styles.home}>
      <View style={[styles.banner]}>
        <SharedElement id={`collection.${collection.name}.picture`}>
          <Image
            source={collection.picture}
            style={[{ width: width, height: 200, position: "absolute", top: 0, left: 0 }, styles.bannerImage]}
            resizeMode="cover"
          />
        </SharedElement>
        <SharedElement id={`collection.${collection.name}.text`} style={{ fontSize: 40, color: "#fff", alignSelf: "center", fontWeight: "bold" }}>
          <Text style={{ fontSize: 40, color: "#fff", alignSelf: "center", fontWeight: "bold" }}>{collection.name}</Text>
        </SharedElement>
      </View>
      <View style={styles.header}>
        <View style={styles.search}>
          <Image source={require("../images/search.png")} />
          <TextInput placeholder="Search shoes" style={styles.searchInput} />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Man shoes</Text>
          <TouchableOpacity style={styles.filter}>
            <Image source={require("../images/settings.png")} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={product}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.productWrap, { width: width / 2 - 20, margin: 5, marginRight: 5 }]}
            onPress={() => navigation.push("Detail")}
          >
            <TouchableOpacity style={styles.productSave}>
              <Image source={require("../images/bookmark.png")} />
            </TouchableOpacity>
            <Image source={item.picture} style={[styles.productImage, { width: "90%" }]} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.productBuy}>
              <Image source={require("../images/addcart.png")} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.title}
        horizontal={false}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  banner: {
    width: "100%",
    height: 200,
  },
  bannerImage: {
    opacity: 0.8,
  },
  header: {
    padding: 10,
    borderBottomColor: "#7070701A",
    borderBottomWidth: 1,
    paddingBottom: 30,
    marginBottom: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    color: "#8F919B80",
    fontWeight: "100",
    marginLeft: 20,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#282C40",
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D0D0D0",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  filterText: {
    marginLeft: 5,
    textTransform: "uppercase",
    color: "#5780D9",
    fontWeight: "700",
    fontSize: 12,
  },
  productWrap: {
    height: 270,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#4D79D720",
    overflow: "hidden",
    flexDirection: "column",
    position: "relative",
  },
  productImage: {
    width: "80%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  productSave: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  productName: {
    position: "absolute",
    left: 10,
    bottom: 50,
    color: "#282C40",
    fontWeight: "700",
    fontSize: 17,
    opacity: 0.65,
  },
  productPrice: {
    position: "absolute",
    left: 10,
    bottom: 10,
    fontSize: 27,
    color: "#282C40",
    fontWeight: "bold",
  },
  productBuy: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#4D79D7",
    padding: 20,
    borderTopLeftRadius: 20,
  },
});
