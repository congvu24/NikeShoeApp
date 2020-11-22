import React, { useEffect } from "react";
import { Animated, Text, View } from "react-native";
import { WishlistProduct } from "./Product";
import { FlatList } from "react-native-gesture-handler";
import product from "../data/products";
import { connect } from "react-redux";
import allProduct from "../data/products";

const FlatListAnimated = Animated.createAnimatedComponent(FlatList);

function BookMarkTab({ bookmark, ...props }) {
  const bookmarkList = Object.keys(bookmark).filter((key) => bookmark[key] == true);
  const bookMarkProduct = allProduct.filter((item) => bookmarkList.includes(String(item.id)));
  return (
    <View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#2A5CC8" }}>Wishlist</Text>
      </View>
      <FlatListAnimated
        data={bookMarkProduct}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => <WishlistProduct item={item} index={index} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  bookmark: state.general.bookmark,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BookMarkTab);
