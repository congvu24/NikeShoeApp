import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import BackButton from "../component/BackButton";

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  logo: {
    padding: 10,
  },
  image: {
    alignSelf: "center",
    marginVertical: 30,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabButton: {
    width: 150,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#FFFFFF66",
  },
  tabText: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    color: "#ACAEB5",
    paddingVertical: 5,
  },
  tabTextActive: {
    color: "#282C40",
    fontWeight: "bold",
  },
  tabLineActive: {
    width: 50,
    backgroundColor: "#5780D9",
    borderRadius: 4,
    height: 4,
  },
  form: {
    backgroundColor: "#FFFFFF66",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  inputField: {
    paddingVertical: 5,
  },
  inputLabel: {
    marginRight: 10,
  },
  submitBtn: {
    backgroundColor: "#5780D9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitBtnText: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  divider: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  dividerLine: {
    flex: 3,
    height: 1,
    backgroundColor: "#7070704D",
  },
  dividerText: {
    flex: 1,
    color: "#7070704D",
    textAlign: "center",
    fontSize: 16,
  },
  more: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    width: 150,
  },
  moreText: {
    marginLeft: 10,
    color: "#696C79",
  },
});

export default function Login() {
  return (
    <ScrollView style={styles.home}>
      <Image source={require("../images/account-image.png")} style={styles.image} />
      <View style={styles.tab}>
        <TouchableOpacity style={[styles.tabButton, styles.tabButtonActive]}>
          <Text style={[styles.tabText, styles.tabTextActive]}>Login</Text>
          <View style={styles.tabLineActive}></View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton]}>
          <Text style={styles.tabText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <SignUpView />
    </ScrollView>
  );
}

const LoginView = () => {
  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Image source={require("../images/email.png")} style={styles.inputLabel} />
        <TextInput placeholder="Email address" style={styles.inputField} />
      </View>
      <View style={styles.input}>
        <Image source={require("../images/lock.png")} style={styles.inputLabel} />
        <TextInput placeholder="Password" style={styles.inputField} />
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine}></View>
      </View>
      <View style={styles.more}>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/google.png")} />
          <Text style={styles.moreText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/facebook.png")} />
          <Text style={styles.moreText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SignUpView = () => {
  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Image source={require("../images/email.png")} style={styles.inputLabel} />
        <TextInput placeholder="Email address" style={styles.inputField} />
      </View>
      <View style={styles.input}>
        <Image source={require("../images/lock.png")} style={styles.inputLabel} />
        <TextInput placeholder="Password" style={styles.inputField} />
      </View>
      <View style={styles.input}>
        <Image source={require("../images/lock.png")} style={styles.inputLabel} />
        <TextInput placeholder="Re password" style={styles.inputField} />
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.divider}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine}></View>
      </View>
      <View style={styles.more}>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/google.png")} />
          <Text style={styles.moreText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/facebook.png")} />
          <Text style={styles.moreText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
