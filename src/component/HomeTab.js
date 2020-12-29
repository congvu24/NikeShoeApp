import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, BackHandler } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";

import Product, { Product1 } from "./Product";
import category from "../data/categories";
import collection from "../data/collections";
import product from "../data/products";
import AdsBanner from "./AdsBanner";
import {addCart} from "../redux/index";
import { connect } from "react-redux";

const { width, height } = Dimensions.get("window");

function HomeTab({ handleClickDrawer, isOpenDrawer,navigation, ...props }) {
  const [q, setQ] = useState("");

  addToCart = (id) => {
    props.addCart({ id });
    navigation.push("Checkout");
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={isOpenDrawer == true ? false : true}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navbarButton} onPress={handleClickDrawer}>
            <Image source={require("../images/menu.png")} />
          </TouchableOpacity>
          <Image source={require("../images/logo.png")} style={[styles.navbarButton, styles.navbarLogo]} />
          <View style={styles.navbarGroup}>
            <TouchableOpacity onPress={() => navigation.navigate("Checkout")} style={[styles.navbarButton, styles.navbarButtonMargin]}>
              <Image source={require("../images/bag1.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.navbarButton, styles.navbarButtonMargin]} onPress={() => navigation.push("Profile")}>
              <Image source={require("../images/user.png")} style={{ width: 25, height: 25, resizeMode: "contain" }} />
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
              <TextInput placeholder='"New autumn shoes..."' style={styles.searchInput} onChangeText={(text)=>setQ(text)} value={q} onSubmitEditing={()=>navigation.push("Search", {q})}/>
            </View>
          </View>
          <AdsBanner />
          <View style={styles.listType}>
            {category.slice(0, 8).map((item, index) => (
              <TouchableOpacity style={styles.listTypeBox} key={`category.${index}`} onPress={() => navigation.navigate("CategoryDetail", { item })}>
                <Image source={item.picture} style={styles.listTypeImage} />
                <SharedElement id={`type.${item.id}.name`}>
                  <Text style={styles.listTypeText}>{item.name}</Text>
                </SharedElement>
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
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.groupWrap} key={`collection.${index}`}>
                    <TouchableOpacity onPress={() => navigation.push("CollectionDetail", { collection: item })} style={styles.groupWrap}>
                      <SharedElement id={`collection.${item.name}.picture`} style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }]}>
                        <Image
                          source={item.picture}
                          style={[StyleSheet.absoluteFillObject, { resizeMode: "cover" }, styles.groupImage]}
                          resizeMode="cover"
                        />
                      </SharedElement>
                      <SharedElement id={`collection.${item.name}.text`}>
                        <Text style={styles.groupText}>{item.name}</Text>
                      </SharedElement>
                    </TouchableOpacity>
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
              data={product.slice(0, 5)}
              renderItem={({ item }) => <Product item={item} addToCart={addToCart} />}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
            />
          </View>
          <View style={styles.group}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupHeaderText}>Sale</Text>
              <TouchableOpacity style={styles.groupHeaderButton}>
                <Text>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={product.slice(6, 11)}
              renderItem={({ item }) => <Product item={item} addToCart={addToCart} />}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
            />
          </View>
          <AdsBanner />
          <FlatList
            data={product.slice(0, 15)}
            renderItem={({ item }) => <Product1 item={item} addToCart={addToCart} />}
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
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  addCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeTab)

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
    color: "#000000",
    fontWeight: "700",
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
    // borderRadius: 10,
    // backgroundColor: "red",
    justifyContent: "center",
    overflow: "hidden",
  },
  groupImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.8,
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
