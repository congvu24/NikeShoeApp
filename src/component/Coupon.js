import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Coupon({ item }) {
  return (
    <View style={styles.couponWrap} onPress={() => navigation.push("Detail")}>
      <View style={styles.couponDetail}>
        <Image source={require("../images/voucher.png")} />
        <View style={styles.couponGroup}>
          <Text style={styles.couponName}>{item.name}</Text>
          <Text style={styles.couponExp}>{item.exp}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.couponUse}>
        <Text style={styles.couponUseText}>Use</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  couponWrap: { marginVertical: 10, flexDirection: "row", marginHorizontal: 20 },
  couponDetail: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 7,
    borderLeftColor: "#2A5CC8",
    borderLeftWidth: 7,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  couponGroup: {
    marginLeft: 10,
    paddingLeft: 5,
  },
  couponUse: {
    width: "20%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderRadius: 7,
  },
  couponName: {
    fontWeight: "700",
    fontSize: 16,
  },
  couponExp: {
    opacity: 0.7,
  },
  couponUseText: {
    color: "#2A5CC8",
    fontWeight: "700",
  },
});
