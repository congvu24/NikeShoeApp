import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { getMyCart } from "../redux/index";

function MyOrder({ order, ...props }) {
  useEffect(() => {
    props.getMyCart();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", marginBottom: 20 }}>
        <Text style={styles.pageTitle}>My Orders</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.headerCol}>
          <Text style={styles.headerText}>Order ID</Text>
        </View>
        <View style={styles.headerCol}>
          <Text style={styles.headerText}>Date</Text>
        </View>
        <View style={styles.headerCol}>
          <Text style={styles.headerText}>Items</Text>
        </View>
        <View style={styles.headerCol}>
          <Text style={styles.headerText}>Total</Text>
        </View>
        <View style={styles.headerCol}>
          <Text style={styles.headerText}>Status</Text>
        </View>
      </View>
      <ScrollView>
        {order.length > 0 &&
          order.map((item, index) => (
            <View style={styles.order} key={`order-${index}`}>
              <View style={styles.headerCol}>
                <Text style={[styles.orderText, { color: "rgb(0, 127, 240)" }]}>
                  #{item.key}
                </Text>
              </View>
              <View style={styles.headerCol}>
                <Text style={styles.orderText}>
                  {new Date(item.createAt).toLocaleDateString()}
                </Text>
              </View>
              <View style={styles.headerCol}>
                <Text style={styles.orderText}>{item.cart.length}</Text>
              </View>
              <View style={styles.headerCol}>
                <Text style={styles.orderText}>${item.total}</Text>
              </View>
              <View style={styles.headerCol}>
                <Text style={[styles.orderText, { opacity: 0.5 }]}>
                  Pending
                </Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => ({
  order: state.general.order,
});

const mapDispatchToProps = {
  getMyCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: "#0000004D",
    borderBottomWidth: 0.5,
  },
  headerCol: {
    flex: 1,
  },
  headerText: {
    textAlign: "center",
    color: "black",
    opacity: 0.8,
    fontWeight: "500",
  },
  order: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 5,
    borderBottomColor: "#0000004D",
    borderBottomWidth: 0.3,
    marginBottom: 5,
  },
  orderText: {
    textAlign: "center",
    color: "black",
    opacity: 1,
    fontWeight: "bold",
    fontSize: 13,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#282C40",
    paddingHorizontal: 10,
  },
});
