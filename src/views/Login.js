import React, { useState, useEffect, createRef, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity, TextInput, ScrollView } from "react-native";
import * as Animateable from "react-native-animatable";
import { Easing } from "react-native-reanimated";
import { connect } from "react-redux";
// import { login } from "../utils/api";
import api from "../utils/fakeApi";
import { login } from "../redux/index";

function UnderLine({ measure, animation }) {
  // console.log(measure, "ben trong");
  // console.log(animation, "animation");
  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: measure.length > 0 ? measure.map((item) => item.x) : [0, 0.01],
  });
  const widthNe = animation.interpolate({
    inputRange: [0, 1],
    outputRange: measure.length > 0 ? measure.map((item) => item.width) : [0, 0.01],
  });

  return (
    <Animated.View
      duration={500}
      style={{
        position: "absolute",
        left: 0,
        top: 40,
        width: widthNe,
        height: 4,
        backgroundColor: "#5780D9",
        borderRadius: 4,
        zIndex: 10000000,
        transform: [{ translateX }],
      }}
    ></Animated.View>
  );
}

function Login({ navigation, user, ...props }) {
  const [isLogin, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginRef = createRef(null);
  const regisRef = createRef(null);
  const containerRef = useRef();
  const [measure, setMeasure] = useState([]);
  const [animation] = useState(new Animated.Value(0));
  const [isRender, setRender] = useState(false);

  useEffect(() => {
    if (isRender == false && loginRef.current != null && regisRef.current != null) {
      const m = [];
      [loginRef, regisRef].forEach((ref) =>
        ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
          m.push({ x, y, width, height });
          if (m.length == 2) {
            setMeasure(m);
          }
        })
      );
      setRender(true);
    }
  }, [loginRef, regisRef]);

  function handleClick(now) {
    if (now !== isLogin) {
      setLogin(!isLogin);

      Animated.timing(animation, {
        toValue: isLogin == true ? 1 : 0,
        duration: 1000,
      }).start();
    }
  }

  async function hanndleLogin() {
    try {
      if ((username, password)) {
        props.login({ username, password });
      }
    } catch (e) {
      return false;
    }
  }
  if (user) {
    navigation.navigate("Home");
    return null;
  }
  return (
    <ScrollView style={styles.home}>
      <Image source={require("../images/account-image.png")} style={styles.image} />
      <View style={[styles.tab]} ref={containerRef}>
        {measure != null && <UnderLine measure={measure} animation={animation} />}
        <TouchableOpacity style={[styles.tabButton, isLogin == true ? styles.tabButtonActive : {}]} onPress={() => handleClick(true)}>
          <Text style={[styles.tabText, isLogin == true ? styles.tabTextActive : {}]} ref={loginRef}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, isLogin == false ? styles.tabButtonActive : {}]} onPress={() => handleClick(false)}>
          <Text style={[styles.tabText, isLogin == false ? styles.tabTextActive : {}]} ref={regisRef}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      {isLogin == false ? <SignUpView /> : <LoginView hanndleLogin={hanndleLogin} setUsername={setUsername} setPassword={setPassword} />}
    </ScrollView>
  );
}

const LoginView = ({ hanndleLogin, setPassword, setUsername }) => {
  return (
    <View style={styles.form}>
      <Animateable.View style={styles.input} animation="fadeInUp" delay={0} duration={500}>
        <Image source={require("../images/email.png")} style={styles.inputLabel} />
        <TextInput
          placeholder="Email address"
          style={styles.inputField}
          onChangeText={(e) => {
            setUsername(e);
          }}
        />
      </Animateable.View>
      <Animateable.View style={styles.input} animation="fadeInUp" delay={100} duration={500}>
        <Image source={require("../images/lock.png")} style={styles.inputLabel} />
        <TextInput
          placeholder="Password"
          style={styles.inputField}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
      </Animateable.View>
      <Animateable.View animation="fadeInUp" duration={500} delay={150}>
        <TouchableOpacity style={styles.submitBtn} onPress={hanndleLogin}>
          <Text style={styles.submitBtnText}>Login</Text>
        </TouchableOpacity>
      </Animateable.View>
      <Animateable.View style={styles.divider} animation="fadeInUp">
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine}></View>
      </Animateable.View>
      <Animateable.View style={styles.more} animation="fadeInUp">
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/google.png")} />
          <Text style={styles.moreText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/facebook.png")} />
          <Text style={styles.moreText}>Facebook</Text>
        </TouchableOpacity>
      </Animateable.View>
    </View>
  );
};

const SignUpView = () => {
  return (
    <View style={styles.form}>
      <Animateable.View style={styles.input} animation="fadeInUp" delay={0} duration={500}>
        <Image source={require("../images/email.png")} style={styles.inputLabel} />
        <TextInput placeholder="Email address" style={styles.inputField} />
      </Animateable.View>
      <Animateable.View style={styles.input} animation="fadeInUp" delay={100} duration={500}>
        <Image source={require("../images/lock.png")} style={styles.inputLabel} />
        <TextInput placeholder="Password" style={styles.inputField} />
      </Animateable.View>
      <Animateable.View style={styles.input} animation="fadeInUp" delay={150} duration={500}>
        <Image source={require("../images/lock.png")} style={styles.inputLabel} />
        <TextInput placeholder="Re password" style={styles.inputField} />
      </Animateable.View>
      <Animateable.View animation="fadeInUp" delay={200}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Sign up</Text>
        </TouchableOpacity>
      </Animateable.View>
      <Animateable.View style={styles.divider} animation="fadeInUp" delay={250}>
        <View style={styles.dividerLine}></View>
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.dividerLine}></View>
      </Animateable.View>
      <Animateable.View style={styles.more} animation="fadeInUp" delay={350}>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/google.png")} />
          <Text style={styles.moreText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreBtn}>
          <Image source={require("../images/facebook.png")} />
          <Text style={styles.moreText}>Facebook</Text>
        </TouchableOpacity>
      </Animateable.View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.general.user,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
    width: "90%",
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
