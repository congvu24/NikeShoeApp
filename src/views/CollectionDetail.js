import React, { useState } from "react";
import { Image, View, TextInput, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import BackButton from "../component/BackButton";
import { useRoute } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import allProduct from "../data/products";
import { Product, Product1 } from "../component/Product";
import collections from "../data/collections";

const { width, height } = Dimensions.get("window");

function findProductById(id) {
  let index = -1;
  index = allProduct.findIndex((item) => item.id == id);
  return index;
}

export default function CollectionDetail({ route }) {
  // const route = useRoute();
  const { collection } = route.params;
  const [keyword, setKeyword] = useState("");

  const data = collection.products.map((id) => allProduct[findProductById(id)]);
  return (
    <ScrollView style={styles.home}>
      <View style={[styles.banner, { width: width, height: 200, position: "relative", justifyContent: "center", alignItems: "center" }]}>
        <SharedElement
          id={`collection.${collection.name}.picture`}
          style={[{ position: "absolute", top: 0, left: 0 }, StyleSheet.absoluteFillObject]}
        >
          <Image source={collection.picture} style={[{ resizeMode: "cover", width: "100%", height: "100%", opacity: 0.8 }]} resizeMode="cover" />
        </SharedElement>
        <SharedElement id={`collection.${collection.name}.text`} style={{ alignSelf: "center", fontWeight: "bold" }}>
          <Text style={{ fontSize: 40, color: "#fff", alignSelf: "center", fontWeight: "bold" }}>{collection.name}</Text>
        </SharedElement>
      </View>
      <View style={styles.header}>
        <View style={styles.search}>
          <Image source={require("../images/search.png")} />
          <TextInput placeholder="Search shoes" style={styles.searchInput} onChangeText={(text) => setKeyword(text)} />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>{collection.name} Collections</Text>
          <TouchableOpacity style={styles.filter}>
            <Image source={require("../images/settings.png")} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>

      <FlatList
        data={data}
        columnWrapperStyle={{ paddingLeft: 5 }}
        renderItem={({ item }) => <Product1 item={item} />}
        keyExtractor={(item) => item.id}
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
