import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const numberArray = Array(10)
  .fill()
  .map((x, i) => i);

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPosition = (value, height) => parseInt(value, 10) * height * -1;
const getTranslateStyle = (position) => ({
  transform: [{ translateY: position }],
});

function parseIntToArr(number) {
  const arr = [];
  while (number > 0) {
    const x = number % 10;
    number = (number - x) / 10;
    arr.push(x);
  }
  return arr.reverse();
}

class Tick extends Component {
  componentWillMount() {
    this.animation = new Animated.Value(getPosition(this.props.value, this.props.height));
  }
  componentDidUpdate(prevProps, prevState) {
    // if (this.props.value !== prevProps.value) {
    Animated.timing(this.animation, {
      toValue: getPosition(this.props.value, this.props.height),
      duration: 500,
      useNativeDriver: true,
    }).start();
    // }
  }
  render() {
    // console.log(this.props.value);
    const transformStyle = getTranslateStyle(this.animation);
    return (
      <Animated.View style={transformStyle}>
        {numberArray.map((v) => (
          <Text key={v} style={[styles.text, { fontSize: this.props.fontSize }, this.props.style]}>
            {v}
          </Text>
        ))}
      </Animated.View>
    );
  }
}

export default class NumberTicker extends Component {
  state = {
    measured: false,
    height: 0,
    value: 0,
  };
  handleLayout = (e) => {
    this.setState({
      measured: true,
      height: e.nativeEvent.layout.height,
    });
  };

  render() {
    const { height, measured } = this.state;
    const { fontSize, wrapHeight, number, style, textStyle } = this.props;
    const wrapStyle = measured ? { height } : styles.measure;
    const numArr = parseIntToArr(number);

    return (
      <>
        <View style={[styles.row, wrapStyle, style, { height: wrapHeight ? wrapHeight : 95 }]}>
          {numArr.map((i, index) => (
            <Tick style={textStyle} fontSize={fontSize ? fontSize : 80} key={index} value={i} height={height} />
          ))}
        </View>
        <Text style={[styles.text, styles.measure, { fontSize: fontSize ? fontSize : 80 }]} onLayout={this.handleLayout}>
          0
        </Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    overflow: "hidden",
    height: 95,
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: 80,
    textAlign: "center",
  },
  measure: {
    opacity: 0,
  },
});
