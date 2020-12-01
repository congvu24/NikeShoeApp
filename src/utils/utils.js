import { AsyncStorage } from "react-native";
import { getData } from "./storage";

export async function checkLogined() {
  try {
    // await AsyncStorage.setItem("user", JSON.stringify({ user: "vu" }));
    const user = await AsyncStorage.getItem("user");

    const objUser = await JSON.parse(user);
    if (user) {
      return objUser;
    } else return false;
  } catch (e) {
    return false;
  }
}
