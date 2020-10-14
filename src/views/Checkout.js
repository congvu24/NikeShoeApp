import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { Modalize } from "react-native-modalize";

const { width, height } = Dimensions.get("window");

const data = [
  { url: require("../images/icon-type-1.png"), name: "Basketball" },
  { url: require("../images/icon-type-2.png"), name: "Soccer" },
  { url: require("../images/icon-type-3.png"), name: "Boots" },
  { url: require("../images/icon-type-4.png"), name: "Sandal" },
  { url: require("../images/icon-type-5.png"), name: "Walking" },
  { url: require("../images/icon-type-6.png"), name: "Old School" },
  { url: require("../images/icon-type-7.png"), name: "Climing" },
  { url: require("../images/icon-type-8.png"), name: "Sneaker" },
];
const group = [
  { url: require("../images/group-1.jpg"), text: "Man" },
  { url: require("../images/group-2.jpg"), text: "Women" },
  { url: require("../images/group-3.jpg"), text: "Young" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
  { url: require("../images/group-4.jpg"), text: "Unisex" },
];

const product = [
  {
    name: "Nike Air 19",
    picture: require("../images/product3.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
  {
    name: "Nike Air 19",
    picture: require("../images/product1.png"),
    price: "80",
    description: "lorem isurem halo unamwlo asdjasda ajsida asd a asd as",
    varity: [
      { name: "XL", value: "xl" },
      { name: "XS", value: "xs" },
      { name: "M", value: "m" },
    ],
    rating: 3,
  },
];

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
    fontSize: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
  product: {
    backgroundColor: "#E8EBF2",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  productBackground: {
    position: "absolute",
    width: 150,
    height: 150,
    left: "-25%",
    top: 0,
  },
  productPicture: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  productName: {
    color: "#282C40",
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.7,
  },
  productPrice: {
    color: "#282C40",
    fontSize: 20,
    fontWeight: "bold",
  },
  edit: {
    position: "absolute",
    width: 100,
    right: 10,
    bottom: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
  },
  editAdd: {
    backgroundColor: "#4D79D7",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  editSubtract: {
    backgroundColor: "#BECEF0",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  editBtnText: {
    color: "#fff",
    fontSize: 20,
  },
  editText: {
    color: "#282C40",
    fontSize: 16,
    fontWeight: "bold",
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
    fontSize: 16,
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
  },
  priceName: {
    color: "#282C40",
    opacity: 0.4,
    fontSize: 16,
  },
  priceNumber: {
    color: "#282C40",
    opacity: 1,
    fontSize: 16,
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
    fontSize: 24,
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

const Checkout = ({ navigation }) => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={{ paddingBottom: 50 }}>
        <ScrollView>
          <View style={styles.navbar}>
            <TouchableOpacity style={styles.navbarButton} onPress={() => navigation.push("Home")}>
              <Image source={require("../images/back-button.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.pageTitle}>Checkout</Text>
          <View style={styles.productList}>
            <View style={styles.product}>
              <Image style={styles.productBackground} source={require("../images/checkout-circle.png")} />
              <Image style={styles.productPicture} source={require("../images/product1.png")} />
              <View style={styles.productDetail}>
                <Text style={styles.productName}>Nike air max 2019</Text>
                <Text style={styles.productPrice}>$45</Text>
              </View>
              <View style={styles.edit}>
                <TouchableOpacity style={styles.editSubtract}>
                  <Text style={styles.editBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.editText}>1</Text>
                <TouchableOpacity style={styles.editAdd}>
                  <Text style={styles.editBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.product}>
              <Image style={styles.productBackground} source={require("../images/checkout-circle.png")} />
              <Image style={styles.productPicture} source={require("../images/product2.png")} />
              <View style={styles.productDetail}>
                <Text style={styles.productName}>Nike air max 2019</Text>
                <Text style={styles.productPrice}>$45</Text>
              </View>
              <View style={styles.edit}>
                <TouchableOpacity style={styles.editSubtract}>
                  <Text style={styles.editBtnText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.editText}>1</Text>
                <TouchableOpacity style={styles.editAdd}>
                  <Text style={styles.editBtnText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Shipping address</Text>
            <View style={styles.shipping}>
              <Image style={styles.shippingPicure} source={require("../images/delivery-truck.png")} />
              <Text style={styles.shippingAddress}>6/41 Pandurangan Vittal st-2, salem-6.</Text>
              <TouchableOpacity style={styles.shippingButton} onPress={() => navigation.push("Address")}>
                <Text style={styles.shippingButtonText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Coupons</Text>
            <TouchableOpacity style={styles.coupon} onPress={onOpen}>
              <Image style={styles.shippingPicure} source={require("../images/coupon.png")} />
              <View style={styles.couponDetail}>
                <Text style={styles.couponTitle}>Apply coupon</Text>
                <Text style={styles.couponText}>SAVE UPTO $25 FOR YOUR FIRST ORDER</Text>
              </View>
              <Image style={styles.rightArrow} source={require("../images/left-arrow.png")} />
            </TouchableOpacity>
          </View>
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

      <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.push("PaymentMethod")}>
        <Text style={styles.nextBtnText}>Continue</Text>
      </TouchableOpacity>
      <Modalize ref={modalizeRef} modalStyle={styles.modal} adjustToContentHeight={true}>
        <KeyboardAvoidingView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Coupons</Text>
            <View style={styles.couponInput}>
              <TextInput placeholder="Enter coupon code" style={styles.couponInputField} />
              <TouchableOpacity style={styles.couponApplyBtn}>
                <Text style={styles.couponApplyBtnText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best coupon for you</Text>
          <View style={styles.bestCoupon}>
            <View style={styles.bestCouponDetail}>
              <Text style={styles.bestCouponText}>MNYU09OKLHU</Text>
              <TouchableOpacity style={styles.bestCouponApply}>
                <Text style={styles.bestCouponApplyText}>Apply</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.bestCouponMoney}>Save $25</Text>
            <View style={styles.bestCouponExp}>
              <Text style={styles.bestCouponExpText}>Expires on</Text>
              <Text style={styles.bestCouponExpDate}>3 MAR 2020</Text>
            </View>
          </View>
        </View>
      </Modalize>
    </View>
  );
};

export default Checkout;
