import React, { useRef, useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, FlatList, ScrollView, TextInput } from "react-native";
import Constants from "expo-constants";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { Modalize } from "react-native-modalize";
import BackButton from "../component/BackButton";
import { connect } from "react-redux";
import { addCart, removeCart, clearCart, setCoupon, checkout, removeItemFromCart } from "../redux/index";
import allProducts from "../data/products";
import NumberTicker from "../component/NumberTicker";
import coupons from "../data/coupons";
import { showMessage, hideMessage } from "react-native-flash-message";
import PriceDetail from "../component/PriceDetail";
import CheckoutProduct from "../component/CheckoutProduct";

const { width, height } = Dimensions.get("window");

function findProductById(id) {
  let index = -1;
  index = allProducts.findIndex((item) => item.id == id);
  return index;
}

const Checkout = ({ navigation, cart, addresses, selectedAddress, selectedCoupon, user, ...props }) => {
  const modalizeRef = useRef(null);
  const [code, setCode] = useState("");

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  function addOneMore(id) {
    console.log(id);
    props.addCart({ id });
  }

  function removeOne(id) {
    props.removeCart({
      id,
    });
  }

  function submitCoupon(code) {
    const index = coupons.findIndex((item) => item.key.toLocaleUpperCase() == code.toLocaleUpperCase());
    if (index > -1) {
      props.setCoupon(coupons[index]);
      setCode(String(code).toUpperCase());
    } else {
      showMessage({
        message: "Code is not valid!",
        description: "Check your code and try again.",
        icon: "warning",
        type: "danger",
        titleStyle: {
          fontSize: 16,
          fontWeight: "700",
        },
      });
    }
  }

  function handleRemoveItemFromCart(id) {
    props.removeItemFromCart(id);
  }

  const cartList = Object.keys(cart)
    .map((key) => {
      return {
        // ...cart[key].number,
        number: cart[key].number,
        ...allProducts[findProductById(key)],
      };
    })
    .filter((item) => item.number > 0);

  if (!user) {
    navigation.navigate("Login");
    return null;
  }
  return (
    <>
      {cartList.length > 0 ? (
        <View style={[StyleSheet.absoluteFill, styles.home]}>
          <View style={{ paddingBottom: 50 }}>
            <ScrollView>
              <Text style={styles.pageTitle}>Checkout</Text>

              <View style={styles.productList}>
                <FlatList
                  data={cartList}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item, index }) => {
                    return (
                      <CheckoutProduct
                        handleRemoveItemFromCart={handleRemoveItemFromCart}
                        item={item}
                        removeOne={removeOne}
                        addOneMore={addOneMore}
                      />
                    );
                  }}
                />
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Shipping address</Text>
                <View style={styles.shipping}>
                  <Image style={styles.shippingPicure} source={require("../images/delivery-truck.png")} />
                  <Text style={styles.shippingAddress}>{selectedAddress.address}</Text>
                  <TouchableOpacity style={styles.shippingButton} onPress={props.clearCart}>
                    <Text style={styles.shippingButtonText} onPress={() => navigation.navigate("Address")}>
                      Change
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Coupons</Text>
                <TouchableOpacity style={styles.coupon} onPress={onOpen}>
                  <Image style={styles.shippingPicure} source={require("../images/coupon.png")} />
                  <View style={styles.couponDetail}>
                    <Text style={styles.couponTitle}>Apply coupon</Text>
                    <Text style={styles.couponText}>{selectedCoupon ? selectedCoupon.name : "SAVE UPTO $25 FOR YOUR FIRST ORDER"}</Text>
                  </View>
                  <Image style={styles.rightArrow} source={require("../images/left-arrow.png")} />
                </TouchableOpacity>
              </View>
              <PriceDetail cartList={cartList} selectedCoupon={selectedCoupon} />
            </ScrollView>
          </View>
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => {
              navigation.navigate("PaymentMethod");
            }}
          >
            <Text style={styles.nextBtnText}>Continue</Text>
          </TouchableOpacity>
          <Modalize ref={modalizeRef} modalStyle={styles.modal} adjustToContentHeight={true}>
            <KeyboardAvoidingView>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Coupons</Text>
                <View style={styles.couponInput}>
                  <TextInput placeholder="Enter coupon code" style={styles.couponInputField} onChangeText={(text) => setCode(text)} />
                  <TouchableOpacity style={styles.couponApplyBtn}>
                    <Text style={styles.couponApplyBtnText} onPress={() => submitCoupon(code)}>
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Best coupon for you</Text>
              <View style={styles.bestCoupon}>
                <View style={styles.bestCouponDetail}>
                  <Text style={styles.bestCouponText}>{coupons[0].key}</Text>
                  <TouchableOpacity style={styles.bestCouponApply} onPress={() => submitCoupon(coupons[0].key)}>
                    <Text style={styles.bestCouponApplyText}>Apply</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.bestCouponMoney}>{coupons[0].name}</Text>
                <View style={styles.bestCouponExp}>
                  <Text style={styles.bestCouponExpText}>Expires on</Text>
                  <Text style={styles.bestCouponExpDate}>{coupons[0].exp}</Text>
                </View>
              </View>
            </View>
          </Modalize>
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <Image source={require("../images/empty-cart.png")} style={{ width: "50%", resizeMode: "contain" }} />
          <Text style={{ marginTop: 20, fontSize: 16 }}>Your shopping cart is empty 😤 !</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginVertical: 10, borderRadius: 3, borderColor: "#cccc", borderWidth: 1, paddingHorizontal: 8, paddingVertical: 4 }}
          >
            <Text style={{ fontWeight: "700", opacity: 0.7 }}>Go Buy</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  selectedAddress: state.general.selectedAddress,
  addresses: state.general.addresses,
  selectedCoupon: state.general.selectedCoupon,
  user: state.general.user,
});

const mapDispatchToProps = {
  addCart,
  removeCart,
  setCoupon,
  checkout,
  removeItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

const styles = StyleSheet.create({
  home: {
    flex: 1,
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
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },

  sectionTitle: {
    color: "#282C40",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  shipping: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    paddingVertical: 20,
    marginHorizontal: 10,
    borderBottomColor: "#7070701A",
    borderBottomWidth: 1,
  },
  shippingButton: {
    marginLeft: "auto",
    borderWidth: 1,
    borderColor: "#D0D0D0",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  shippingButtonText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#282C40",
  },
  shippingPicure: {
    marginRight: 20,
  },
  shippingAddress: {
    fontSize: 14,
    fontWeight: "100",
    color: "#282C40",
    opacity: 0.41,
    maxWidth: 250,
    width: "70%",
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
  coupon: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightArrow: {
    marginLeft: "auto",
  },
  couponTitle: {
    color: "#282C40",
    opacity: 0.7,
  },
  couponText: {
    color: "#696C79",
    width: "70%",
    fontWeight: "bold",
    fontSize: 13,
  },
  couponInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E6E6E6",
    padding: 8,
    borderRadius: 5,
  },
  couponApplyBtnText: {
    fontSize: 16,
    color: "#5780D9",
    fontWeight: "bold",
  },
  couponInputField: {
    textTransform: "uppercase",
  },
  bestCoupon: {},
  bestCouponDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  bestCouponText: {
    backgroundColor: "#5780D91F",
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: 200,
    textAlign: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#5780D9",
    borderRadius: 5,
  },
  bestCouponApply: {
    backgroundColor: "#5780D9",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  bestCouponApplyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bestCouponMoney: {
    fontWeight: "bold",
    color: "#282C40",
  },
  bestCouponExp: {
    flexDirection: "row",
  },
  bestCouponExpText: {
    fontSize: 14,
    color: "#BDBEC4",
    marginRight: 10,
  },
  bestCouponExpDate: {
    fontWeight: "bold",
    color: "#282C40",
  },
});
