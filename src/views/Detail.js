import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
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

export default function Home({ navigation }) {
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarButton} onPress={() => navigation.goBack()}>
          <Image source={require("../images/back-button.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navbarButton, styles.navbarButtonMargin]}>
          <Image source={require("../images/bookmark.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.product}>
        <Image style={styles.productBackground} source={require("../images/circle.png")} />
        <View style={styles.productPictureWrap}>
          <Image style={styles.productPicture} source={require("../images/product1.png")} />
        </View>
        <View style={styles.productPrice}>
          <Text style={styles.productPriceText}>$45</Text>
        </View>
      </View>
      <Modalize alwaysOpen={height * 0.4} modalStyle={styles.modal}>
        <View style={styles.name}>
          <Text style={styles.nameText}>Nick Air Max</Text>
          <TouchableOpacity style={styles.addCart}>
            <Text style={styles.addCartText}>ADD TO BAG</Text>
            <Image source={require("../images/small-bag.png")} />
          </TouchableOpacity>
        </View>
        <View style={styles.rating}>
          <View style={styles.ratingList}>
            <Image source={require("../images/good-star.png")} />
            <Image source={require("../images/good-star.png")} />
            <Image source={require("../images/good-star.png")} />
            <Image source={require("../images/good-star.png")} />
            <Image source={require("../images/bad-star.png")} />
          </View>
          <View style={styles.ratingDetail}>
            <Text style={styles.ratingDetailText}>4.1</Text>
            <Image source={require("../images/start.png")} />
            <Text style={styles.ratingDetailGap}></Text>
            <Text style={styles.ratingDetailText}>(340)</Text>
          </View>
        </View>

        <View>
          <Text style={styles.description}>The Nike GTX shoe borrows design lines from The heritage runners the Nike React tech.</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Varity</Text>
          <View style={styles.size}>
            <TouchableOpacity style={[styles.varityBtn, styles.varityBtnSelected]}>
              <Text style={[styles.varityBtnText, styles.varityBtnSelectedText]}>Unlimited</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.varityBtn}>
              <Text style={styles.varityBtnText}>Warrios</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.size}>
            <TouchableOpacity style={styles.sizeBtnsizeBtn}>
              <Text style={styles.sizeBtnTextsizeBtnText}>5.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sizeBtnsizeBtn, styles.sizeBtnsizeBtnSelected]}>
              <Text style={[styles.sizeBtnTextsizeBtnText, styles.sizeBtnTextsizeBtnTextSelected]}>5.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeBtnsizeBtn}>
              <Text style={styles.sizeBtnTextsizeBtnText}>5.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sizeBtnsizeBtn}>
              <Text style={styles.sizeBtnTextsizeBtnText}>5.5</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Color</Text>
          <View style={styles.size}>
            <TouchableOpacity style={[styles.sizeBtnsizeBtn, styles.sizeBtncolorBtnSelected, { backgroundColor: "blue" }]}>
              <Image source={require("../images/check.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.sizeBtnsizeBtn, { backgroundColor: "red" }]}></TouchableOpacity>
            <TouchableOpacity style={[styles.sizeBtnsizeBtn, { backgroundColor: "green" }]}></TouchableOpacity>
            <TouchableOpacity style={[styles.sizeBtnsizeBtn, { backgroundColor: "yellow" }]}></TouchableOpacity>
            <TouchableOpacity style={[styles.sizeBtnsizeBtn, { backgroundColor: "black" }]}></TouchableOpacity>
            <TouchableOpacity style={[styles.sizeBtnsizeBtn, { backgroundColor: "purple" }]}></TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Customer feedbacks</Text>
          <View style={styles.commentList}>
            <View style={styles.comment}>
              <View style={styles.commentHeader}>
                <Image style={styles.commentAvatar} source={require("../images/avatar.png")} />
                <View style={styles.commentOwner}>
                  <Text style={styles.commentName}>Jonh Wicks</Text>
                  <Text style={styles.commentTime}>21 hours ago</Text>
                </View>
              </View>
              <Text style={styles.commentDetail}>Thank you so much Thank you so much Thank you so much Thank you so much</Text>
            </View>
            <View style={styles.comment}>
              <View style={styles.commentHeader}>
                <Image style={styles.commentAvatar} source={require("../images/avatar.png")} />
                <View style={styles.commentOwner}>
                  <Text style={styles.commentName}>Jonh Wicks</Text>
                  <Text style={styles.commentTime}>21 hours ago</Text>
                </View>
              </View>
              <Text style={styles.commentDetail}>Thank you so much Thank you so much Thank you so much Thank you so much</Text>
            </View>
            <View style={styles.comment}>
              <View style={styles.commentHeader}>
                <Image style={styles.commentAvatar} source={require("../images/avatar.png")} />
                <View style={styles.commentOwner}>
                  <Text style={styles.commentName}>Jonh Wicks</Text>
                  <Text style={styles.commentTime}>21 hours ago</Text>
                </View>
              </View>
              <Text style={styles.commentDetail}>Thank you so much Thank you so much Thank you so much Thank you so much</Text>
            </View>
          </View>
        </View>
      </Modalize>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Buy now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
  },
  navbar: {
    padding: 10,
    paddingTop: Constants.statusBarHeight + 20,
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
  addBtn: {
    position: "absolute",
    zIndex: 100000,
    bottom: 0,
    backgroundColor: "#5780D9",
    left: 0,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
  },
  addBtnText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
  productPrice: {
    alignSelf: "center",
    top: 0,
    position: "absolute",
    backgroundColor: "#fff",
    padding: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 140,
  },
  productPriceText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#282C40",
  },
  productBackground: {
    width: 400,
    height: 400,
    left: "-30%",
    top: 0,
    position: "absolute",
  },
  productPictureWrap: {
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  productPicture: {
    alignSelf: "center",
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  modal: {
    padding: 10,
    paddingTop: 20,
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#282C40",
  },
  addCart: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#7070701E",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  addCartText: {
    fontWeight: "700",
    opacity: 0.7,
    fontSize: 12,
    marginRight: 5,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  ratingList: {
    flexDirection: "row",
    marginRight: 20,
    justifyContent: "space-between",
    width: 90,
  },
  ratingDetail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4D79D7",
    padding: 5,
    borderRadius: 3,
  },
  ratingDetailText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 2,
  },
  ratingDetailGap: {
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    height: "80%",
    width: 2,
    marginHorizontal: 4,
  },
  description: {
    color: "#282C405A",
    fontSize: 16,
    lineHeight: 26,
  },

  sectionTitle: {
    color: "#282C40",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  size: {
    flexDirection: "row",
    margin: 10,
  },
  sizeBtnsizeBtn: {
    padding: 5,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#7070701e",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeBtnsizeBtnSelected: {
    backgroundColor: "#4D79D7",
  },
  sizeBtncolorBtnSelected: {
    opacity: 0.7,
  },
  sizeBtnTextsizeBtnText: {
    color: "#70707050",
    fontWeight: "bold",
    fontSize: 14,
  },
  sizeBtnTextsizeBtnTextSelected: {
    color: "#fff",
  },
  varityBtn: {
    marginHorizontal: 5,
    borderWidth: 1,
    padding: 5,
    borderRadius: 2,
    borderColor: "#D0D0D0",
    backgroundColor: "#fff",
  },
  varityBtnSelected: {
    borderColor: "#4D79D7",
  },
  varityBtnText: {
    color: "#D0D0D0",
  },
  varityBtnSelectedText: {
    color: "#4D79D7",
    fontWeight: "700",
  },
  commentList: {
    paddingVertical: 10,
    paddingBottom: 60,
  },
  comment: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,.09)",
    paddingBottom: 10,
  },
  commentAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentOwner: {
    marginLeft: 10,
  },
  commentName: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
  commentTime: {
    fontWeight: "600",
    fontSize: 12,
    color: "#C6C6c6",
    lineHeight: 20,
  },
  commentDetail: {
    marginTop: 5,
    lineHeight: 18,
    color: "#282C40",
    fontWeight: "normal",
  },
});
