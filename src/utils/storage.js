import { AsyncStorage } from "react-native";

export async function saveData(key, data) {
  const value = JSON.stringify(data);
  await AsyncStorage.setItem(key, value);
}

export async function getData(key) {
  try {
    // await AsyncStorage.setItem("user", { name: "vu" });
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
}
