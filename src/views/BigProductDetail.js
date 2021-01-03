import React from "react";
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import * as Animateable from "react-native-animatable";
// import BackButton from "../component/BackButton";
import { useNavigation } from "@react-navigation/native";

const activity = [require("../images/cash-back.png"), require("../images/cash-back.png"), require("../images/gift-voucher.png")];
const { width, height } = Dimensions.get("window");

const createAnimation = (from) => ({
  0: {
    opacity: 0,
    transform: [{ translateY: -90 }, { translateX: from }],
  },
  1: {
    opacity: 1,
    transform: [{ translateY: 0 }, { translateX: 0 }],
  },
});
const animations = [createAnimation(100), createAnimation(0), createAnimation(-100)];

export default function BigProductDetail({ route }) {
  const navigation = useNavigation();
  const { item, color } = route.params;
  //   console.log(color);

  return (
    <View style={{ flex: 1 }}>
      <SharedElement id={`item.${item.name}.bg`} style={[StyleSheet.absoluteFillObject]}>
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: color }]}></View>
      </SharedElement>

      <SharedElement id={`item.${item.name}.name`}>
        <Text style={{ position: "absolute", top: 10, left: 10, fontSize: 18, fontWeight: "700" }}>{item.name}</Text>
      </SharedElement>
      <SharedElement id={`item.${item.name}.price`}>
        <Text style={{ position: "absolute", top: 30, left: 10, fontSize: 18, fontWeight: "700" }}>${item.price}</Text>
      </SharedElement>
      <SharedElement id={`item.${item.name}.picture`} style={[StyleSheet.absoluteFillObject]}>
        <Image source={item.picture} style={{ position: "absolute", alignSelf: "center", top: height * 0.2, resizeMode: "contain" }} />
      </SharedElement>
      <View style={{ position: "absolute", top: height * 0.4, padding: 10, width: width }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {activity.map((item, index) => (
            <Animateable.View
              animation={animations[index]}
              duration={700}
              delay={1000}
              key={`activity.${index}`}
              style={{
                margin: 20,
                backgroundColor: "#fa7f6854",
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={item} />
            </Animateable.View>
          ))}
        </View>
        <View>
          <Animateable.Text animation="fadeInLeft" delay={500} style={{ fontSize: 23, fontWeight: "700" }}>
            In stock: 99
          </Animateable.Text>
          <Animateable.Text
            animation="fadeInUp"
            delay={500}
            style={{ fontSize: 16, fontWeight: "300", opacity: 0.7 }}
            numberOfLines={7}
            adjustsFontSizeToFit
          >
            {item.description}
          </Animateable.Text>
        </View>
      </View>
      <Animateable.View animation="fadeInUp" delay={700} style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail", { item })}
          style={{ alignSelf: "center", backgroundColor: "#4D79D7", width: width * 0.9, borderRadius: 5 }}
        >
          <Text style={{ fontWeight: "700", fontSize: 22, textAlign: "center", padding: 10, color: "white" }}>BUY NOW</Text>
        </TouchableOpacity>
      </Animateable.View>
    </View>
  );
}
