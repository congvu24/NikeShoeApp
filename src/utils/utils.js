import { getData } from "./storage";

export async function checkLogined() {
  try {
    const user = await getData("user");
    if (user) {
      return true;
    } else return false;
  } catch (e) {
    return false;
  }
}
