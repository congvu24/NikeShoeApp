import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
});

export default ({ type }) => {
  let source;
  switch (type) {
    case 1:
      source = require("../images/card1.png");
      break;
    case 2:
      source = require("../images/card2.png");
      break;
    case 3:
      source = require("../images/card3.png");
      break;
    case 4:
      source = require("../images/card4.png");
      break;
    case 5:
      source = require("../images/card5.png");
      break;
    case 6:
      source = require("../images/card6.png");
      break;
    default:
      source = require("../images/card6.png");
  }
  return <Image style={styles.card} {...{ source }} />;
};
