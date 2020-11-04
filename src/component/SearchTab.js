import React from "react";
import { Text, View } from "react-native";
import Coupon from "./Coupon";
import Search from "../views/Search";

const coupons = [
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
  { name: "Giảm 30% tối đa 10k", exp: "Nov 30,2020" },
];

const SearchTab = () => {
  return (
    <View>
      <Search />
    </View>
  );
};

export default SearchTab;
