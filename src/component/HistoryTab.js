import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import allProduct from "../data/products";
import { Product1, WishlistProduct } from "./Product";

const HistoryTab = ({ history, ...props }) => {
  const historyProduct = allProduct.filter((item) => history.includes(item.id));
  return (
    <View>
      <View style={{ paddingVertical: 5 }}>
        <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 18, color: "#2A5CC8" }}>History</Text>
      </View>
      <FlatList
        data={historyProduct}
        renderItem={({ item }) => <Product1 item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  history: state.general.history,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTab);
