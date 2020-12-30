import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, PanResponder, Animated, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 90;
const TRANSFORM_X_DRAWER = width * 0.8;

function clamp(value, min, max) {
  return min < max ? (value < min ? min : value > max ? max : value) : value < max ? max : value > min ? min : value;
}

export default function CheckoutProduct({ item, removeOne, addOneMore, handleRemoveItemFromCart }) {
  const animation = useRef(new Animated.ValueXY(0)).current;
  const animation2 = useRef(new Animated.Value(1)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderGrant: () => {
        //bat dau click vao de hanh dong
        animation.flattenOffset();
      },
      onPanResponderMove: (e, { dx, dy }) => {
        animation.setValue({
          x: dx,
          y: 0,
          useNativeDriver: true,
        });
      },
      onPanResponderRelease: (e, { dx, dy }) => {
        if (Math.abs(dx) > SWIPE_THRESHOLD && dx < 0) {
          Animated.timing(animation, {
            toValue: { x: -width, y: 0 },
            useNativeDriver: true,
          }).start(() =>
            Animated.timing(animation2, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }).start(() => handleRemoveItemFromCart(item.id))
          );
        } else {
          Animated.timing(animation, {
            toValue: {
              x: 0,
              y: 0,
            },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  const panHandlers = panResponder.panHandlers;
  const translateX = animation.x.interpolate({
    inputRange: [-width, 0],
    outputRange: [-width, 0],
    extrapolate: "clamp",
  });
  const disappearStyle = {
    opacity: animation2.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };
  return (
    <Animated.View style={[styles.product]}>
      <Animated.View style={[styles.productNav, StyleSheet.absoluteFill, { opacity: animation2 }]}>
        <Image source={require("../images/delete.png")} style={{ marginRight: 30 }} />
      </Animated.View>
      <Animated.View {...panHandlers} style={[styles.productContent, { transform: [{ translateX }] }]}>
        <Animated.Image style={[styles.productBackground]} source={require("../images/checkout-circle.png")} />
        <Image style={styles.productPicture} source={item.picture} />
        <View style={styles.productDetail}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
        <View style={styles.edit}>
          <TouchableOpacity style={[styles.editSubtract]} onPress={() => removeOne(item.id)}>
            <Text style={styles.editBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.editText}>{item.number}</Text>
          <TouchableOpacity style={styles.editAdd} onPress={() => addOneMore(item.id)}>
            <Text style={styles.editBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  productContent: {
    backgroundColor: "#E8EBF2",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    // transform: [{ translateX: -100 }],
  },
  productNav: {
    backgroundColor: "#D9576D",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  productBackground: {
    position: "absolute",
    width: 150,
    height: 120,
    left: "-25%",
    top: 0,
  },
  productPicture: {
    width: 100,
    height: 120,
    marginRight: 20,
    marginLeft: 10,
    resizeMode: "contain",
  },
  productName: {
    color: "#282C40",
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.7,
  },
  productPrice: {
    color: "#282C40",
    fontSize: 20,
    fontWeight: "bold",
  },
  edit: {
    position: "absolute",
    width: 100,
    right: 10,
    bottom: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
  },
  editAdd: {
    backgroundColor: "#4D79D7",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  editSubtract: {
    backgroundColor: "#BECEF0",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  editBtnText: {
    color: "#fff",
    fontSize: 20,
  },
  editText: {
    color: "#282C40",
    fontSize: 16,
    fontWeight: "bold",
  },
});
