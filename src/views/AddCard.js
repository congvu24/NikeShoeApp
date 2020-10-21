import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { Modalize } from "react-native-modalize";

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
  input: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  inputLabel: {
    color: "#C6C6C6",
    fontSize: 14,
  },
  inputField: {
    paddingVertical: 10,
    borderBottomColor: "#7070704D",
    borderBottomWidth: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#696C79",
  },
  inputHalf: {
    width: "35%",
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInput: {
    marginBottom: 50,
  },
});

const AddCard = ({ navigation }) => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={{ paddingBottom: 50 }}>
        <ScrollView>
          <View style={styles.navbar}>
            <TouchableOpacity style={styles.navbarButton} onPress={() => navigation.push("Home")}>
              <Image source={require("../images/back-button.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.pageTitle}>Add card</Text>
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
          <View style={styles.cardInput}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Card holder</Text>
              <TextInput style={styles.inputField} placeholder="Elayamanik" />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Card number</Text>
              <TextInput style={styles.inputField} placeholder="8976 - 6789 - 8796 - 3421" />
            </View>
            <View style={styles.inputGroup}>
              <View style={[styles.input, styles.inputHalf]}>
                <Text style={styles.inputLabel}>Expires</Text>
                <TextInput style={styles.inputField} placeholder="5 March" />
              </View>
              <View style={[styles.input, styles.inputHalf]}>
                <Text style={styles.inputLabel}>Cvv</Text>
                <TextInput style={styles.inputField} placeholder="223" />
              </View>
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>City</Text>
              <TextInput style={styles.inputField} placeholder="Ha Noi" />
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={styles.nextBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCard;
