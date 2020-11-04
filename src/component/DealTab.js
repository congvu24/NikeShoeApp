import React from "react";
import { Text, View } from "react-native";
import Coupon from "./Coupon";

const coupons = [
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
];

const DealTab = () => {
  return (
    <View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#2A5CC8" }}>Mã giảm giá</Text>
      </View>
      <View>
        <Coupon item={coupons[0]} />
        <Coupon item={coupons[0]} />
        <Coupon item={coupons[0]} />
        <Coupon item={coupons[0]} />
      </View>
    </View>
  );
};

export default DealTab;
