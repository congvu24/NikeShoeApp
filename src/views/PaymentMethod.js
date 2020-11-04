import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { Modalize } from "react-native-modalize";
import BackButton from "../component/BackButton";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  navbar: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  navbarButton: {
    display: "flex",
    padding: 0,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  navbarButtonMargin: {
    marginHorizontal: 0,
  },
  navbarGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#282C40",
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: "#5780D9",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
    width: "80%",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  addBtnText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },
  nextBtn: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    backgroundColor: "#5780D9",
    left: 0,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
  },
  nextBtnText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase",
  },
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
  card: {
    flexDirection: "row",
    width: width - 40,
    height: 200,
    margin: 20,
    borderRadius: 5,
    overflow: "hidden",
  },
  cardBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cardCompany: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  cardDetail: {
    position: "absolute",
    bottom: 20,
    left: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDetailGroup: {
    marginRight: 20,
  },
  cardDetailTitle: {
    color: "#FFFFFF",
    opacity: 0.3,
    fontSize: 13,
    textTransform: "uppercase",
  },
  cardDetailValue: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 15,
  },
  cardNumber: {
    alignSelf: "center",
    marginLeft: 20,
    fontSize: 16,
    color: "#fff",
    letterSpacing: 5,
  },
});

const PaymentMethod = ({ navigation }) => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={{ paddingBottom: 50 }}>
        <ScrollView>
          <View style={styles.navbar}>
            <BackButton />
          </View>
          <Text style={styles.pageTitle}>Payment method</Text>
          <View style={styles.card} elevation={5}>
            <Image
              style={[StyleSheet.absoluteFillObject, { resizeMode: "contain" }, styles.cardBackground]}
              source={require("../images/card-background.png")}
            />
            <Image style={styles.cardCompany} source={require("../images/visa-pay-logo.png")} />
            <Text style={styles.cardNumber}>**** **** **** 4554</Text>
            <View style={styles.cardDetail}>
              <View style={styles.cardDetailGroup}>
                <Text style={styles.cardDetailTitle}>Card holder</Text>
                <Text style={styles.cardDetailValue}>Vu D Cong</Text>
              </View>
              <View style={styles.cardDetailGroup}>
                <Text style={styles.cardDetailTitle}>Expires</Text>
                <Text style={styles.cardDetailValue}>3 March</Text>
              </View>
              <View style={styles.cardDetailGroup}>
                <Text style={styles.cardDetailTitle}>CVV</Text>
                <Text style={styles.cardDetailValue}>449</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={() => navigation.push("AddCard")}>
            <Text style={styles.addBtnText}>+ Add new card</Text>
          </TouchableOpacity>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Price details</Text>
            <View style={styles.priceList}>
              <View style={styles.price}>
                <Text style={styles.priceName}>Nike Air Max</Text>
                <Text style={styles.priceNumber}>$45</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceName}>Nike Air Max</Text>
                <Text style={styles.priceNumber}>$45</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.priceName}>Coupon</Text>
                <Text style={styles.priceNumber}>-$45</Text>
              </View>
            </View>
            <View style={styles.priceTotal}>
              <Text style={styles.priceTotalText}>Total</Text>
              <Text style={styles.priceTotalNumber}>$69</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.push("CheckoutResult")}>
        <Text style={styles.nextBtnText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethod;
