import React, { Component, useEffect, useRef } from "react";
import { View, Text, FlatList, Image, Dimensions, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { CommonActions, StackActions } from "@react-navigation/native";

const resetAction = CommonActions.reset({
  index: 1,
  routes: [{ name: "Home" }],
});

const introduces = [
  {
    id: 1,
    title: "Free Shipping",
    description: "We provide shipping service free for all. Don't worry about shipping fee.",
    image: require("../images/introduce-1.png"),
  },
  {
    id: 2,
    title: "Save Money",
    description: "We provide shipping service free for all. Don't worry about shipping fee.",
    image: require("../images/introduce-2.png"),
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "We provide shipping service free for all. Don't worry about shipping fee.",
    image: require("../images/introduce-3.png"),
  },
  {
    id: 4,
    title: "Free Shipping",
    description: "We provide shipping service free for all. Don't worry about shipping fee.",
    image: require("../images/introduce-4.png"),
  },
];
const bgs = ["#ffbdbc", "#a4fcc4", "#e2c4ff", "#b2f0fb"];

const { width, height } = Dimensions.get("window");

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ flexDirection: "row", flex: 0.1, alignItems: "center", justifyContent: "center" }}>
      {introduces.map((item, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const outputRange = [0.6, 1.3, 0.6];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange,
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{ width: 10, height: 10, backgroundColor: "white", borderRadius: 5, margin: 5, transform: [{ scale }] }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ navigation, scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: introduces.map((_, i) => i * width),
    outputRange: [...bgs],
  });
  return <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor }]} />;
};

const Square = ({ scrollX }) => {
  const animation = Animated.modulo(Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)), 1);
  const rotate = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["35deg", "0deg", "35deg"],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height,
        backgroundColor: "white",
        borderRadius: 86,
        position: "absolute",
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [{ rotate }],
      }}
    />
  );
};
const Introduce = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <Backdrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={introduces}
        style={{ flex: 0.7 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={32}
        renderItem={({ item, index }) => (
          <View style={{ width, padding: 10 }}>
            <View style={{ flex: 0.8, alignItems: "center", justifyContent: "center" }}>
              <Image source={item.image} style={{ resizeMode: "contain", width: width / 2, height: width / 2 }} />
            </View>
            <View style={{ flex: 0.2, justifyContent: "flex-end" }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>{item.title}</Text>
              <Text style={{ fontWeight: "800", fontSize: 14, color: "black" }}>{item.description}</Text>
            </View>
          </View>
        )}
      />
      <View style={{ flexDirection: "row", flex: 0.2, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ backgroundColor: "#ffffff99", borderRadius: 5, alignSelf: "center", marginHorizontal: 10 }}
          // onPress={() => navigation.navigate("Login")}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ paddingHorizontal: 16, paddingVertical: 8, fontWeight: "bold", opacity: 0.8 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.dispatch(resetAction)}
          style={{ backgroundColor: "#ffffff99", borderRadius: 5, alignSelf: "center", marginHorizontal: 10 }}
        >
          <Text style={{ paddingHorizontal: 16, paddingVertical: 8, fontWeight: "bold", opacity: 0.8 }}>Shop Now</Text>
        </TouchableOpacity>
      </View>
      <Indicator scrollX={scrollX} />
    </View>
  );
};

export default Introduce;
