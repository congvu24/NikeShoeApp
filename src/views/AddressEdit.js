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
    fontSize: 20,
    color: "#fff",
    textTransform: "uppercase",
  },
  input: {
    marginHorizontal: 20,
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
  gap: {
    backgroundColor: "#CBCBCB33",
    height: 10,
    marginVertical: 20,
  },
});

const AddressEdit = ({ navigation }) => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.home]}>
      <View style={{ paddingBottom: 50 }}>
        <ScrollView>
          <View style={styles.navbar}>
            <TouchableOpacity style={styles.navbarButton} onPress={() => navigation.push("Home")}>
              <Image source={require("../images/back-button.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.pageTitle}>Edit Address</Text>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput style={styles.inputField} placeholder="Elena" />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput style={styles.inputField} placeholder="092991XXXX" />
          </View>
          <View style={styles.gap}></View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Pin code</Text>
            <TextInput style={styles.inputField} placeholder="722209" />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput style={styles.inputField} placeholder="So 29 Hoang Hoa Tham, Gia Ray..." />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Town/City</Text>
            <TextInput style={styles.inputField} placeholder="Ha Dong" />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>State</Text>
            <TextInput style={styles.inputField} placeholder="Ha Noi" />
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.addBtnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressEdit;
