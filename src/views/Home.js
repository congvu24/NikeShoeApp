import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, BackHandler } from "react-native";
import Constants from "expo-constants";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";

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
  { name: "Nike Air 19", picture: require("../images/product3.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
];

export default function Home({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      // Alert.alert("Hold on!", "Are you sure you want to go back?", [
      //   {
      //     text: "Cancel",
      //     onPress: () => null,
      //     style: "cancel",
      //   },
      //   { text: "YES", onPress: () => BackHandler.exitApp() },
      // ]);
      navigation.goBack(null);
      return true;
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, []);
  return (
    <ScrollView style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarButton}>
          <Image source={require("../images/menu.png")} />
        </TouchableOpacity>
        <Image source={require("../images/logo.png")} style={[styles.navbarButton, styles.navbarLogo]} />
        <View style={styles.navbarGroup}>
          <TouchableOpacity style={[styles.navbarButton, styles.navbarButtonMargin]}>
            <Image source={require("../images/bookmark.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navbarButton, styles.navbarButtonMargin]}>
            <Image source={require("../images/bag1.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.search}>
        <Text style={styles.searchTextBig}>Discovery your</Text>
        <Text style={styles.searchText}>Favourite Outfit</Text>
        <View style={styles.searchBar}>
          <TouchableOpacity style={styles.searchButton}>
            <Image source={require("../images/search.png")} />
          </TouchableOpacity>
          <TextInput placeholder='"New autumn jacket..."' style={styles.searchInput} />
        </View>
      </View>
      <View>
        <View style={styles.slide}>
          <Image source={require("../images/slideBackground.png")} style={[StyleSheet.absoluteFillObject, styles.slideImage]} />
          <Text style={styles.slideText}>Year end promotion</Text>
          <Text style={styles.slideTextLight}>All goods are for your winter</Text>
          <Text style={styles.slideTextLight}>your winter</Text>
          <Image source={require("../images/shoe1.png")} style={styles.slideItem} />
          <TouchableOpacity style={styles.slideButton}>
            <Image source={require("../images/nextSlide.png")} />
          </TouchableOpacity>
          <View style={styles.slideNavWrap}>
            <View style={styles.slideNav}></View>
            <View style={[styles.slideNav, styles.slideNavActive]}></View>
            <View style={styles.slideNav}></View>
          </View>
        </View>
      </View>
      <View style={styles.listType}>
        {data.map((item) => (
          <TouchableOpacity style={styles.listTypeBox}>
            <Image source={item.url} style={styles.listTypeImage} />
            <Text style={styles.listTypeText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.group}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupHeaderText}>Collection</Text>
          <TouchableOpacity style={styles.groupHeaderButton}>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={group}
          renderItem={({ item }) => (
            <View style={styles.groupWrap}>
              <Image source={item.url} style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }, styles.groupImage]} />
              <View style={[StyleSheet.absoluteFillObject, styles.groupTopLayer]}></View>
              <Text style={styles.groupText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.8 + 20}
          decelerationRate="fast"
          bouncesZoom={true}
          alwaysBounceHorizontal={true}
        />
      </View>
      <View style={styles.group}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupHeaderText}>Popular</Text>
          <TouchableOpacity style={styles.groupHeaderButton}>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={product}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productWrap} onPress={() => navigation.push("Detail")}>
              <TouchableOpacity style={styles.productSave}>
                <Image source={require("../images/bookmark.png")} />
              </TouchableOpacity>
              <Image source={item.picture} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity style={styles.productBuy}>
                <Image source={require("../images/addcart.png")} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
        />
      </View>
      <View style={styles.group}>
        <View style={styles.groupHeader}>
          <Text style={styles.groupHeaderText}>Popular</Text>
          <TouchableOpacity style={styles.groupHeaderButton}>
            <Text>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={product}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productWrap} onPress={() => navigation.push("Detail")}>
              <TouchableOpacity style={styles.productSave}>
                <Image source={require("../images/bookmark.png")} />
              </TouchableOpacity>
              <Image source={item.picture} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <TouchableOpacity style={styles.productBuy}>
                <Image source={require("../images/addcart.png")} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
        />
      </View>
      <View>
        <View style={styles.slide}>
          <Image source={require("../images/slideBackground.png")} style={[StyleSheet.absoluteFillObject, styles.slideImage]} />
          <Text style={styles.slideText}>Year end promotion</Text>
          <Text style={styles.slideTextLight}>All goods are for your winter</Text>
          <Text style={styles.slideTextLight}>your winter</Text>
          <Image source={require("../images/shoe1.png")} style={styles.slideItem} />
          <TouchableOpacity style={styles.slideButton}>
            <Image source={require("../images/nextSlide.png")} />
          </TouchableOpacity>
          <View style={styles.slideNavWrap}>
            <View style={styles.slideNav}></View>
            <View style={[styles.slideNav, styles.slideNavActive]}></View>
            <View style={styles.slideNav}></View>
          </View>
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
    padding: 10,
  },
  navbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  navbarButton: {
    display: "flex",
  },
  navbarButtonMargin: {
    marginHorizontal: 10,
  },
  navbarLogo: {
    marginLeft: 30,
  },
  navbarGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    paddingVertical: 10,
  },
  searchTextBig: {
    fontSize: 22,
    fontWeight: "200",
    opacity: 0.8,
    color: "#282C40",
  },
  searchText: {
    fontSize: 24,
    fontWeight: "700",
    opacity: 1,
    color: "#282C40",
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: "400",
  },
  searchButton: {
    padding: 5,
  },
  slide: {
    color: "#fff",
    width: "100%",
    height: 200,
  },
  slideImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
  },
  slideText: {
    fontSize: 20,
    fontWeight: "700",
    top: 20,
    left: 20,
    color: "#fff",
  },
  slideTextLight: {
    fontSize: 18,
    fontWeight: "500",
    top: 20,
    left: 20,
    color: "#fff",
    opacity: 0.7,
  },
  slideItem: {
    top: 50,
    right: 20,
    position: "absolute",
  },
  slideButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    left: 20,
    width: 30,
    height: 30,
  },
  slideNav: {
    width: 20,
    height: 4,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  slideNavActive: {
    width: 4,
  },
  slideNavWrap: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 20,
    right: 20,
    width: 60,
  },
  listType: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  listTypeImage: {
    width: 50,
    height: 50,
  },
  listTypeText: {
    fontSize: 12,
    color: "#8F919B",
  },
  listTypeBox: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 5,
    flexBasis: "20%",
  },
  groupWrap: {
    width: width * 0.8 + 10,
    height: 150,
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    overflow: "hidden",
  },
  groupImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  group: {
    paddingBottom: 20,
    paddingHorizontal: 5,
    marginTop: 20,
  },
  groupHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  groupHeaderButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 60,
    fontSize: 5,
    opacity: 0.5,
  },
  groupHeaderText: {
    fontSize: 17,
    color: "#282C40",
    fontWeight: "100",
  },
  groupText: {
    fontSize: 40,
    color: "#fff",
    alignSelf: "center",
    fontWeight: "bold",
  },
  groupTopLayer: {
    backgroundColor: "#3C3C3C",
    opacity: 0.42,
    top: 0,
    left: 0,
  },
  productWrap: {
    width: width * 0.5 + 30,
    height: 270,
    marginRight: 30,
    marginVertical: 10,
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
