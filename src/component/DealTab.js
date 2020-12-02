import React from "react";
import { FlatList, Text, View } from "react-native";
import coupons from "../data/coupons";
import Coupon from "./Coupon";

const DealTab = () => {
  return (
    <View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#2A5CC8" }}>Coupons</Text>
      </View>
      <FlatList
        data={coupons}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `coupon.${item.id}`}
        renderItem={({ item, idnex }) => <Coupon item={item} />}
      />
    </View>
  );
};

export default DealTab;
