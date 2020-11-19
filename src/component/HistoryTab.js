import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import allProduct from "../data/products";
import { Product1, WishlistProduct } from "./Product";

const HistoryTab = () => {
  return (
    <View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#2A5CC8" }}>Lịch sử</Text>
      </View>
      <FlatList
        data={allProduct}
        renderItem={({ item }) => <Product1 item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        numColumns={2}
      />
    </View>
  );
};

export default HistoryTab;
