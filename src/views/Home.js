import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, BackHandler, Alert } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { connect } from "react-redux";
import DrawerHome from "../component/DrawerHome";
import MainHome from "../component/HomeMain";
import { getData } from "../utils/storage";
import { checkLogined } from "../utils/utils";

const { width, height } = Dimensions.get("window");

function Home({ navigation, user, ...props }) {
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
    if (!user) {
      navigation.navigate("Login");
    }
  }, []);
  return (
    <>
      <DrawerHome />
      <MainHome navigation={navigation} />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.general.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
