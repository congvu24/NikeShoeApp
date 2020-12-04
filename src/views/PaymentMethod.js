import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import BackButton from "../component/BackButton";
import { connect } from "react-redux";
import { checkout } from "../redux/index";
import PriceDetail from "../component/PriceDetail";
import allProducts from "../data/products";

const { width, height } = Dimensions.get("window");

function findProductById(id) {
  let index = -1;
  index = allProducts.findIndex((item) => item.id == id);
  return index;
}

function calcTotal(data) {
  let sum = 0;
  data.forEach((item) => (sum = sum + item.price * item.number));
  return sum;
}

const PaymentMethod = ({ navigation, cart, selectedCoupon, selectedCard, selectedAddress, ...props }) => {
  const cartList = Object.keys(cart)
    .map((key) => {
      return {
        // ...cart[key].number,
        number: cart[key].number,
        ...allProducts[findProductById(key)],
      };
    })
    .filter((item) => item.number > 0);
  let cardSource;
  switch (selectedCard) {
    case 1:
      cardSource = require("../images/card1.png");
      break;
    case 2:
      cardSource = require("../images/card2.png");
      break;
    case 3:
      cardSource = require("../images/card3.png");
      break;
    case 4:
      cardSource = require("../images/card4.png");
      break;
    case 5:
      cardSource = require("../images/card5.png");
      break;
    case 6:
      cardSource = require("../images/card6.png");
      break;
    default:
      cardSource = require("../images/card6.png");
  }
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={{ paddingBottom: 50 }}>
        <ScrollView>
          <View style={styles.navbar}>
            <BackButton />
          </View>
          <Text style={styles.pageTitle}>Payment method</Text>
          <View style={styles.card} elevation={5}>
            <Image style={[StyleSheet.absoluteFillObject, { resizeMode: "contain" }, styles.cardBackground]} source={cardSource} />
          </View>
          <TouchableOpacity style={styles.addBtn} onPress={() => navigation.push("AddCard")}>
            <Text style={styles.addBtnText}>Select other card</Text>
          </TouchableOpacity>
          <PriceDetail cartList={cartList} selectedCoupon={selectedCoupon} />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() =>
          props.checkout(
            {
              cart,
              selectedCoupon,
              selectedAddress,
              total: selectedCoupon ? calcTotal(cartList) - calcTotal(cartList) * selectedCoupon.cost : calcTotal(cartList),
            },
            () => navigation.navigate("CheckoutResult")
          )
        }
      >
        <Text style={styles.nextBtnText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  selectedCoupon: state.general.selectedCoupon,
  selectedCard: state.general.selectedCard,
  selectedAddress: state.general.selectedAddress,
});

const mapDispatchToProps = {
  checkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);

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
