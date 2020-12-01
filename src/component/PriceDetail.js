import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import NumberTicker from "./NumberTicker";

function calcTotal(data) {
  let sum = 0;
  data.forEach((item) => (sum = sum + item.price * item.number));
  return sum;
}

export default function PriceDetail({ cartList, selectedCoupon }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Price details</Text>
      <View style={styles.priceList}>
        <FlatList
          data={cartList}
          keyExtractor={(item) => `pricelist.${item.id}`}
          renderItem={({ item }) => (
            <View style={styles.price}>
              <Text style={styles.priceName}>{item.name}</Text>
              <Text style={styles.priceNumber}>${item.price * item.number}</Text>
            </View>
          )}
        />
        {selectedCoupon ? (
          <View style={styles.price}>
            <Text style={styles.priceName}>Coupon</Text>
            <Text style={[styles.priceNumber, { opacity: 0.7 }]}>{`-$${Math.round(calcTotal(cartList) * selectedCoupon.cost)}`}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.priceTotal}>
        <Text style={styles.priceTotalText}>Total</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>$</Text>
        <NumberTicker
          number={selectedCoupon ? calcTotal(cartList) - calcTotal(cartList) * selectedCoupon.cost : calcTotal(cartList)}
          fontSize={18}
          wrapHeight={23}
          preFix="$"
          textStyle={{
            color: "#282C40",
            opacity: 1,
            fontWeight: "bold",
            borderTopColor: "#70707029",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: "#282C40",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    paddingVertical: 20,
    marginHorizontal: 10,
    borderBottomColor: "#7070701A",
    borderBottomWidth: 1,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  priceName: {
    color: "#282C40",
    opacity: 0.4,
    fontSize: 13,
  },
  priceNumber: {
    color: "#282C40",
    opacity: 1,
    fontSize: 14,
    fontWeight: "bold",
  },
  priceTotal: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
  },
  priceTotalText: {
    color: "#696C79",
    fontSize: 14,
    marginRight: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  priceTotalNumber: {
    color: "#282C40",
    opacity: 1,
    fontSize: 18,
    fontWeight: "bold",
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    borderTopColor: "#70707029",
  },
});
