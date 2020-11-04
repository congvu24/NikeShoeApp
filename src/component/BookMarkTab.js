import React, { useEffect } from "react";
import { Animated, Text, View } from "react-native";
import { WishlistProduct } from "./Product";
import { FlatList } from "react-native-gesture-handler";
import product from "../data/products";

const FlatListAnimated = Animated.createAnimatedComponent(FlatList);

function BookMarkTab() {
  const y = new Animated.Value(0);

  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true });
  // const animatedValue = product.map((item) => new Animated.Value(0));
  // const animations = product.map((item) => {
  //   return Animated.timing(animatedValue[item], {
  //     toValue: 1,
  //     duration: 500,
  //     useNativeDriver: true,
  //   });
  // });
  // useEffect(() => {
  //   Animated.stagger(10, animations).start();
  // }, []);
  return (
    <View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#2A5CC8" }}>Wishlist</Text>
      </View>
      <FlatListAnimated
        scrollEventThrottle={16}
        data={product}
        renderItem={({ item, index }) => <WishlistProduct item={item} index={index} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        {...{ onScroll }}
      />
    </View>
  );
}

export default BookMarkTab;
