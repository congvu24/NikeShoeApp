import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { interpolateRgb } from "d3-interpolate";
import { interpolatePath } from "d3-interpolate-path";
import Svg, { Path } from "react-native-svg";
import { interpolate } from "flubber";

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

const startPath = `M19.2,129.42c2.5-4.9,14.7-16,35.3-5.9s10.6,32.4,10.6,32.4a118.78,118.78,0,1,0,119.2-66.2v30.8a3.56,3.56,0,0,1-1.8,3,3.74,3.74,0,0,1-3.8,0L80.1,65.42A4.32,4.32,0,0,1,77.9,62c0-1.9,2.2-3.2,2.2-3.2L178.3,1s2.2-1.6,4.2-.8,1.7,3.5,1.7,3.5v33a171.67,171.67,0,0,1,159.2,171.2c0,94.8-76.9,171.7-171.7,171.7S0,302.72,0,207.92A172.47,172.47,0,0,1,19.2,129.42Z`;
const endPath = `M324.2,129.42c-2.5-4.9-14.7-16-35.3-5.9s-10.6,32.4-10.6,32.4a118.78,118.78,0,1,1-119.2-66.2v30.8a3.56,3.56,0,0,0,1.8,3,3.74,3.74,0,0,0,3.8,0l98.6-58.1a4.32,4.32,0,0,0,2.2-3.4c0-1.9-2.2-3.2-2.2-3.2L165.1,1s-2.2-1.6-4.2-.8-1.7,3.5-1.7,3.5v33A171.67,171.67,0,0,0,0,207.92c0,94.8,76.9,171.7,171.7,171.7s171.7-76.9,171.7-171.7A172.47,172.47,0,0,0,324.2,129.42Z`;

export default class Test extends React.Component {
  state = {
    animation: new Animated.ValueXY(0, 0),
  };

  clickHander = () => {
    Animated.timing(this.state.animation.x, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  componentWillMount() {
    const colorInterpolate = interpolateRgb("rgb(255,99,71)", "rgb(99,71,255)");
    const pathInterpolate = interpolate(startPath, endPath, {
      maxSegmentLength: 1,
    });
    this.state.animation.x.addListener(({ value }) => {
      const color = colorInterpolate(value);
      const path = pathInterpolate(value);
      const style = {
        backgroundColor: color,
      };
      //   this.props.vcl = style;
      this._view.setNativeProps({ style });
      this._path.setNativeProps({
        d: path,
      });
    });
  }
  render() {
    const transLateY = this.state.animation.x.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    // const color = interpolateRgb("rgb(255,99,71)", "rgb(99,71,255)");
    const animationStyle = {
      backgroundColor: "blue",
      //   transform: [{ translateY: transLateY }],
    };

    return (
      <>
        <View style={styles.home}>
          <TouchableOpacityAnimated
            style={[styles.box, animationStyle]}
            onPress={this.clickHander}
            ref={(view) => (this._view = view)}
          ></TouchableOpacityAnimated>
        </View>
        <Svg width={512} height={512} sty={{ marginLeft: 50 }}>
          <Path fill="red" d={startPath} stroke="black" ref={(path) => (this._path = path)} />
        </Svg>
      </>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
});
