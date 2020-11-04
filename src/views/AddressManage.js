import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView } from "react-native";
import Constants from "expo-constants";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { Modalize } from "react-native-modalize";
import Backbutton from "../component/BackButton";

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
  addBtn: {
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
  addBtnText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  address: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  addressText: {
    color: "#282C408C",
    fontSize: 16,
    lineHeight: 25,
    width: "70%",
  },
  addressName: {
    color: "#282C40",
    fontSize: 18,
    width: "70%",
    fontWeight: "bold",
  },
  addressDetail: {
    flexDirection: "row",
  },
  addressEditBtn: {
    marginLeft: "auto",
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderColor: "#D0D0D0",
  },
  addressEditBtnText: {
    color: "#5780D9",
    fontWeight: "bold",
    fontSize: 14,
  },
  addressCheck: {
    marginRight: 10,
    marginTop: 5,
  },
  addressCancel: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

const AddressManage = ({ navigation }) => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={{ paddingBottom: 50 }}>
        <ScrollView>
          <View style={styles.navbar}>
            <Backbutton />
          </View>
          <Text style={styles.pageTitle}>Shipping Address</Text>
          <TouchableOpacity style={styles.address}>
            <TouchableOpacity style={styles.addressCancel}>
              <Image source={require("../images/cancel.png")} />
            </TouchableOpacity>
            <View style={styles.addressDetail}>
              <Image style={styles.addressCheck} source={require("../images/address-point.png")} />
              <View>
                <Text style={styles.addressName}>Nami</Text>
                <Text style={styles.addressText}>6/41 Pandurangan Vittal street-2</Text>
                <Text style={styles.addressText}>6/41 Pandurangan Vittal </Text>
                <Text style={styles.addressText}>6/41 Pandurangan </Text>
                <Text style={styles.addressText}>6/41 </Text>
                <Text style={styles.addressText}>Mobile: 12313122 </Text>
              </View>
              <TouchableOpacity style={styles.addressEditBtn}>
                <Text style={styles.addressEditBtnText}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.address}>
            <TouchableOpacity style={styles.addressCancel}>
              <Image source={require("../images/cancel.png")} />
            </TouchableOpacity>
            <View style={styles.addressDetail}>
              <Image style={styles.addressCheck} source={require("../images/address-point-uncheck.png")} />
              <View>
                <Text style={styles.addressName}>Nami</Text>
                <Text style={styles.addressText}>6/41 Pandurangan Vittal street-2</Text>
                <Text style={styles.addressText}>6/41 Pandurangan Vittal </Text>
                <Text style={styles.addressText}>6/41 Pandurangan </Text>
                <Text style={styles.addressText}>6/41 </Text>
                <Text style={styles.addressText}>Mobile: 12313122 </Text>
              </View>
              <TouchableOpacity style={styles.addressEditBtn}>
                <Text style={styles.addressEditBtnText}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.address}>
            <TouchableOpacity style={styles.addressCancel}>
              <Image source={require("../images/cancel.png")} />
            </TouchableOpacity>
            <View style={styles.addressDetail}>
              <Image style={styles.addressCheck} source={require("../images/address-point-uncheck.png")} />
              <View>
                <Text style={styles.addressName}>Nami</Text>
                <Text style={styles.addressText}>6/41 Pandurangan Vittal street-2</Text>
                <Text style={styles.addressText}>6/41 Pandurangan Vittal </Text>
                <Text style={styles.addressText}>6/41 Pandurangan </Text>
                <Text style={styles.addressText}>6/41 </Text>
                <Text style={styles.addressText}>Mobile: 12313122 </Text>
              </View>
              <TouchableOpacity style={styles.addressEditBtn}>
                <Text style={styles.addressEditBtnText}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={() => navigation.push("AddressEdit")}>
        <Text style={styles.addBtnText}>+ Add new address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressManage;
