import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BackButton({ style }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.BackButton, style]} onPress={() => navigation.goBack()}>
      <Image source={require("../images/back-arrow.png")} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  BackButton: {
    backgroundColor: "white",
    padding: 10,
    width: 35,
    height: 35,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    // elevation: 1,
    zIndex: 100,
  },
});
