import React, { useRef, useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getProfile, editProfile, uploadImage } from "../redux/index";

const { width, height } = Dimensions.get("window");

const EditProfile = ({
  navigation,
  cart,
  addresses,
  selectedAddress,
  selectedCoupon,
  user,
  getProfile,
  editProfile,
  uploadImage,
  ...props
}) => {
  //   if (!user) {
  //     navigation.navigate("Login");
  //     return null;
  //   }
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Fermale");
  const [date, setDate] = useState(new Date().getTime());
  const [phone, setPhone] = useState("0832486713");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();

    getProfile();
    if(user){
        setImage(user.photoUrl);
        setName(user.name);
        setEmail(user.email);
      }
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const handleSubmit = () => {
    // editProfile({ name, photoUrl: image, phone, email, gender, date });
    handleUpload()
  };
  const handleUpload = ()=>{
   if(image){
    uploadImage(image, { name, photoUrl: image, phone, email, gender, date });
   }
  }
  if (user) {
    return (
      <>
        <View style={styles.home}>
          <View style={styles.avatarSection}>
            <Image
              style={styles.blurBackground}
              resizeMode="cover"
              source={
                image ? { uri: image } : require("../images/ads-banner-1.jpg")
              }
              blurRadius={4}
            />
            <View style={styles.blurSection} />
            <View style={styles.avatar}>
              <Image
                source={
                  image ? { uri: image } : require("../images/ads-banner-1.jpg")
                }
                style={styles.avatarImg}
              />
              <TouchableOpacity style={styles.avatarButton} onPress={pickImage}>
                <FontAwesome name="camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 7 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.infoSection}>
                <View style={styles.info}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    style={styles.input}
                    defaultValue={name}
                    onChangeText={(text) => setName(text)}
                  ></TextInput>
                </View>
                <View style={styles.info}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    defaultValue={email}
                    onChangeText={(text) => setEmail(text)}
                  ></TextInput>
                </View>
                <View style={{ flexDirection: "row", width: "100%" }}>
                  <View style={[styles.info, { flex: 1, marginRight: 5 }]}>
                    <Text style={styles.label}>Birth Date</Text>
                    <TouchableOpacity
                      style={styles.input}
                      editable={false}
                      onPress={() => showDatepicker()}
                    >
                      <Text
                        style={{
                          height: "100%",
                          textAlignVertical: "center",
                          fontSize: 14,
                          fontWeight: "bold",
                          color: "#696C79",
                        }}
                      >
                        {new Date(date).toLocaleDateString()}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.info, { flex: 1, marginLeft: 5 }]}>
                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.input}>
                      <Picker
                        selectedValue={gender}
                        style={[{ height: "100%" }]}
                        onValueChange={(itemValue, itemIndex) =>
                          setGender(itemValue)
                        }
                      >
                        <Picker.Item label="Fermale" value="Fermale" />
                        <Picker.Item label="Male" value="Male" />
                      </Picker>
                    </View>
                  </View>
                </View>
                <View style={styles.info}>
                  <Text style={styles.label}>Contact Number</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    defaultValue={phone}
                    onChangeText={(text) => setPhone(text)}
                  ></TextInput>
                </View>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </>
    );
  } else return null;
};

const mapStateToProps = (state) => ({
  user: state.general.user,
});

const mapDispatchToProps = {
  getProfile,
  editProfile,
  uploadImage
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    flexDirection: "column",
  },
  avatarSection: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "white",
    // borderWidth: 1,
  },
  blurBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  blurSection: {
    backgroundColor: "black",
    opacity: 0.3,
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  avatar: {
    position: "relative",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    // borderWidth: 2,
    alignSelf: "center",
  },
  avatarImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 100,
    top: 0,
    left: 0,
    borderWidth: 2,
    borderColor: "white",
  },
  avatarButton: {
    backgroundColor: "#5780D9",
    alignSelf: "center",
    padding: 8,
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  infoSection: {
    // flex: 7,
    paddingHorizontal: 20,
    alignItems: "center",
    // justifyContent: "center"
  },
  info: {
    marginVertical: 10,
    width: "100%",
  },
  input: {
    paddingVertical: 10,
    borderBottomColor: "#7070704D",
    borderBottomWidth: 1,
    fontSize: 14,
    fontWeight: "bold",
    color: "#696C79",
    height: 50,
  },
  label: {
    color: "#C6C6C6",
    fontSize: 14,
  },
  saveButton: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    backgroundColor: "#5780D9",
    left: 0,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    padding: 15,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },
});
