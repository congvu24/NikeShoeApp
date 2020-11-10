import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, BackHandler, Alert } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import DrawerHome from "../component/DrawerHome";
import MainHome from "../component/HomeMain";
import { getData } from "../utils/storage";
import { checkLogined } from "../utils/utils";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     navigation.goBack(null);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

  //   return () => backHandler.remove();
  // }, []);
  // const navigation = useNavigation();
  useEffect(() => {
    async function check() {
      const isLogin = await checkLogined();
      if (!isLogin) navigation.navigate("Login");
    }
    check();
  }, []);
  return (
    <>
      <DrawerHome />
      <MainHome navigation={navigation} />
    </>
  );
}
