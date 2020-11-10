import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";

export default function Loading({ visible, text }) {
  return <OrientationLoadingOverlay visible={visible} color="white" indicatorSize="large" messageFontSize={24} message={text} />;
}
