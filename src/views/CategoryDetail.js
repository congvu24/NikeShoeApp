import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import allCategories from "../data/categories";
import allProduct from "../data/products";

function getProductOfCategory(categoryId) {
  //   return allProduct.filter((product) => product.category == categoryId);
  return allProduct.filter((product) => product);
}

const listColor = ["#fcf876", "#cee397", "#8bcdcd", "#3797a4"];

const { width, height } = Dimensions.get("window");

export default function CategoryDetail({ route }) {
  const flatListRef = useRef();
  const navigation = useNavigation();
  const { item } = route.params;
  const [tab, setTab] = useState(item.id);
  useEffect(() => {
    if (flatListRef) {
      setTimeout(() => {
        const index = allCategories.findIndex((cate) => item.id == cate.id);
        flatListRef.current.scrollToIndex({ animated: true, index });
      }, 900);
    }
  }, [flatListRef]);

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
      {/* <View> */}
      <View>
        <FlatList
          data={allCategories}
          ref={flatListRef}
          keyExtractor={(item) => `category.${item.id}`}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          getItemLayout={(data, index) => ({ length: 120, offset: 100 * index, index })}
          contentContainerStyle={{ padding: 10 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => setTab(item.id)} key={`tab.${index}`}>
              <View style={[styles.tab, { backgroundColor: tab == item.id ? "#5780D9" : "transparent" }]}>
                <SharedElement id={`type.${item.id}.name`}>
                  <Text style={[styles.tabName, { color: tab == item.id ? "white" : "black" }]}>{item.name}</Text>
                </SharedElement>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <FlatList
          // data={allProduct.filter((product) => product.category == item.id)}
          data={allProduct.slice(0, 5)}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={`bigProduct.${index}`}
                onPress={() => navigation.navigate("BigProductDetail", { item, color: listColor[index % listColor.length] })}
              >
                <View style={[styles.bigProduct, { backgroundColor: listColor[index % listColor.length] }]}>
                  <SharedElement id={`item.${item.name}.bg`} style={[StyleSheet.absoluteFillObject]}>
                    <View
                      style={[StyleSheet.absoluteFillObject, { backgroundColor: listColor[index % listColor.length] }, { borderRadius: 16 }]}
                    ></View>
                  </SharedElement>
                  <SharedElement id={`item.${item.name}.name`} style={[styles.bigProductName]}>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#060930" }} adjustsFontSizeToFit numberOfLines={1}>
                      {item.name}
                    </Text>
                  </SharedElement>
                  <SharedElement id={`item.${item.name}.price`} style={[styles.bigProductPrice]}>
                    <Text style={{ fontSize: 18, fontWeight: "700", color: "#060930" }}>${item.price}</Text>
                  </SharedElement>
                  <View style={{ width: "100%", height: height * 0.3, justifyContent: "center", alignItems: "center" }}>
                    <SharedElement
                      id={`item.${item.name}.picture`}
                      style={[StyleSheet.absoluteFillObject, { justifyContent: "center", alignItems: "center" }]}
                    >
                      <Image source={item.picture} style={[{ resizeMode: "contain", alignSelf: "center", position: "absolute" }]} />
                    </SharedElement>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => `more-item.${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.8 + 20}
          decelerationRate="fast"
          bouncesZoom={true}
          alwaysBounceHorizontal={true}
        />
      </View>
      <ScrollView>
        {allProduct.slice(0, 5).map((item) => (
          <TouchableOpacity key={`product-${item.id}`}>
            <View style={styles.moreItem}>
              <View style={{ width: width * 0.3, height: "100%", justifyContent: "center", alignItems: "center" }}>
                <Image source={item.picture} resizeMode="center" style={{ alignSelf: "center" }} />
              </View>
              <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
                <Text style={{ fontWeight: "700", fontSize: 16 }}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={require("../images/good-star.png")} />
                  <Text style={{ fontWeight: "700", fontSize: 14, marginLeft: 5 }}>4.5</Text>
                </View>
              </View>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* </View> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

// CategoryDetail.sharedElements = (route, otherRoute, showing) => {
//   const { item } = route.params;
//   return [
//     {
//       id: `type.${item.id}.name`,
//     },
//   ];
// };

const styles = StyleSheet.create({
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
  tab: {
    width: 100,
    marginHorizontal: 10,
    // backgroundColor: "orange",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  tabName: {
    fontSize: 18,
    fontWeight: "700",
    opacity: 0.8,
    textAlign: "center",
  },
  bigProduct: {
    width: width * 0.6,
    height: height * 0.45,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:
  },
  bigProductName: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  bigProductPrice: {
    position: "absolute",
    top: 30,
    left: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  moreItem: {
    flexDirection: "row",
    // backgroundColor: "red",
    alignItems: "center",
    padding: 5,
    height: 80,
    marginVertical: 10,
  },
});
