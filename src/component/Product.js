import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { render } from "react-dom";
import { Dimensions, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Text, View, Animated } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const { width, height } = Dimensions.get("window");

export default function Product({ item, addToCart }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.productWrap} onPress={() => navigation.push("Detail", { item })}>
      <TouchableOpacity style={styles.productSave}>
        <Image source={require("../images/bookmark.png")} />
      </TouchableOpacity>
      <SharedElement id={`product.${item.id}.picture`} style={[StyleSheet.absoluteFillObject]}>
        <Image source={item.picture} style={styles.productImage} />
      </SharedElement>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.productBuy} onPress={()=>addToCart ? addToCart(item.id) : {}}>
        <Image source={require("../images/addcart.png")} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export function Product1({ item, addToCart }) {
  const navigation = useNavigation();
  

  return (
    <TouchableOpacity
      style={[styles.productWrap, { width: width / 2 - 20, margin: 5, marginRight: 5 }]}
      onPress={() => navigation.push("Detail", { item })}
    >
      <TouchableOpacity style={styles.productSave}>
        <Image source={require("../images/bookmark.png")} />
      </TouchableOpacity>
      <SharedElement id={`product.${item.name}.picture`} style={[StyleSheet.absoluteFillObject]}>
        <Image source={item.picture} style={[styles.productImage, { width: "90%" }]} />
      </SharedElement>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <TouchableOpacity style={styles.productBuy} onPress={()=>addToCart ? addToCart(item.id) : {}}>
        <Image source={require("../images/addcart.png")} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function WishlistProduct({ item, y, index }) {
  const navigation = useNavigation();
  const animation = new Animated.Value(0);

  Animated.timing(animation, {
    toValue: 1,
    delay: 0.1 * index,
    useNativeDriver: true,
  }).start();

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });
  const product = item;
  return (
    <TouchableOpacityAnimated onPress={() => navigation.push("Detail", { item })}>
      <Animated.View style={[styles.productWishlistWrap, { margin: 5 }, { transform: [{ translateX }] }, { opacity }]}>
        <SharedElement id={`product.${item.id}.picture`}>
          <Image source={item.picture} style={{ resizeMode: "center", alignSelf: "center", width: 100 }} />
        </SharedElement>
        <View>
          <Text style={styles.productName}>
            {item.name}
            {index}
          </Text>
          <Text style={styles.productWishlistPrice}>${item.price}</Text>
        </View>
      </Animated.View>
    </TouchableOpacityAnimated>
  );
}

const styles = StyleSheet.create({
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
  productWishlistWrap: {
    height: 100,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#4D79D720",
    overflow: "hidden",
    flexDirection: "row",
    position: "relative",
  },
  productWishlistImage: {
    width: "30%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  productWishlistPrice: {
    position: "absolute",
    left: 10,
    bottom: 20,
    fontSize: 20,
    color: "#282C40",
    fontWeight: "bold",
  },
  productImage: {
    width: "80%",
    alignSelf: "center",
    resizeMode: "contain",
    position: "absolute",
    bottom: 100,
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
