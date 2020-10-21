import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, ImageBackground } from "react-native";
import Constants from "expo-constants";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    position: "absolute",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    marginTop: 10,
  },
  message: {
    backgroundColor: "#FFFFFF17",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  messageTitle: {
    color: "#FFFFFF4D",
    fontWeight: "bold",
    fontSize: 16,
  },
  messageValue: {
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    right: 20,
  },
});

const CheckoutResult = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("../images/background-result-fail.png")} />
      <TouchableOpacity style={styles.closeBtn}>
        <Image source={require("../images/close.png")} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Image source={require("../images/checkout-success.png")} />
        <Text style={styles.title}>Order Placed</Text>
        <View style={styles.message}>
          <Text style={styles.messageTitle}>Expected delivery</Text>
          <Text style={styles.messageValue}>10 DEC</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckoutResult;
