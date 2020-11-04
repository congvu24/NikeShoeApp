import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Product1, WishlistProduct } from "./Product";

const product = [
  { name: "Nike Air 19", picture: require("../images/product3.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
  { name: "Nike Air 19", picture: require("../images/product1.png"), price: "80" },
];

const HistoryTab = () => {
  return (
    <View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#2A5CC8" }}>Lịch sử</Text>
      </View>
      <FlatList
        data={product}
        renderItem={({ item }) => <Product1 item={item} />}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        numColumns={2}
      />
    </View>
  );
};

export default HistoryTab;
