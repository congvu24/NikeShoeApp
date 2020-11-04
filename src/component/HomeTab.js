import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, BackHandler } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import DrawerHome from "../component/DrawerHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Product, { Product1 } from "./Product";
import Animated from "react-native-reanimated";
import category from "../data/categories";
import collection from "../data/collections";
import product from "../data/products";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  navbar: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  navbarButton: {
    display: "flex",
    padding: 10,
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
});

export default function HomeTab({ handleClickDrawer, isOpenDrawer }) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={isOpenDrawer == true ? false : true}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navbarButton} onPress={handleClickDrawer}>
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
        <View pointerEvents={!isOpenDrawer == true ? "auto" : "none"}>
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
            {category.slice(0, 8).map((item, index) => (
              <TouchableOpacity style={styles.listTypeBox} key={index}>
                <Image source={item.picture} style={styles.listTypeImage} />
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
              data={collection}
              renderItem={({ item }) => {
                return (
                  <View style={styles.groupWrap} key={item.id}>
                    <Image style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }, styles.groupImage]} source={item.picture} />
                    <View style={[StyleSheet.absoluteFillObject, styles.groupTopLayer]}></View>
                    <Text style={styles.groupText}>{item.name}</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
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
              renderItem={({ item }) => <Product item={item} />}
              keyExtractor={(item) => item.id}
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
              renderItem={({ item }) => <Product item={item} />}
              keyExtractor={(item) => item.id}
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
            renderItem={({ item }) => <Product1 item={item} />}
            keyExtractor={(item) => item.id}
            horizontal={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
