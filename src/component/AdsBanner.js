import React, { useRef } from "react";
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity, Dimensions, Animated } from "react-native";

const allAds = [
  {
    image: require("../images/ads-banner-1.jpg"),
    name: "AIR JORDAN XXXV",
  },

  {
    image: require("../images/ads-banner-2.jpg"),
    name: "AIR FORCE 1 PIXEL",
  },

  {
    image: require("../images/ads-banner-3.jpg"),
    name: "ICON CLASS COLLECTION",
  },

  {
    image: require("../images/ads-banner-4.jpg"),
    name: "ELEVATE YOUR GREATENESS",
  },
];

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH = width * 0.8 - 10 - 20;
const FULL_SIZE = ITEM_WIDTH + 10;

function AdsBanner() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Animated.FlatList
        data={allAds}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
        snapToInterval={FULL_SIZE}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        keyExtractor={(item) => `ads_${item.name}`}
        renderItem={({ item, index }) => {
          const intputRange = [(index - 1) * FULL_SIZE, index * FULL_SIZE, (index + 1) * FULL_SIZE];
          const translateX = scrollX.interpolate({
            inputRange: intputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });

          const scale = scrollX.interpolate({
            inputRange: intputRange,
            outputRange: [0.98, 1.3, 0.98],
          });

          return (
            <Animated.View style={styles.slide}>
              <View style={[StyleSheet.absoluteFillObject, { overflow: "hidden", borderRadius: 10 }]}>
                <Animated.Image
                  source={item.image}
                  resizeMode="cover"
                  style={[
                    StyleSheet.absoluteFillObject,
                    { resizeMode: "cover", width: "100%", height: "100%", borderRadius: 10, transform: [{ scale }] },
                  ]}
                />
              </View>
              <Animated.Text style={[styles.slideText, { transform: [{ translateX }] }]}>{item.name}</Animated.Text>
              <TouchableOpacity style={[styles.moreBtn]}>
                <Text style={styles.moreBtnText}>See more</Text>
              </TouchableOpacity>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}

export default AdsBanner;

const styles = StyleSheet.create({
  slide: {
    color: "#fff",
    width: ITEM_WIDTH,
    height: 200,
    marginRight: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  slideImage: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  slideText: {
    fontSize: 20,
    fontWeight: "700",
    bottom: 45,
    left: 10,
    color: "#fff",
    position: "absolute",
  },
  moreBtn: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  moreBtnText: {
    padding: 6,
    fontWeight: "700",
  },
});
