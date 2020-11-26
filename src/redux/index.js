import { createAction } from "redux-actions";
import * as type from "./type";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAkaukFgDHVtoeR0EyCuOe5R80RbopkyE",
  authDomain: "my-assistant-5bafe.firebaseapp.com",
  databaseURL: "https://my-assistant-5bafe.firebaseio.com",
  projectId: "my-assistant-5bafe",
  storageBucket: "my-assistant-5bafe.appspot.com",
  messagingSenderId: "1026652352005",
  appId: "1:1026652352005:web:c6184a4342df54afabf66c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const counterIncrease = createAction(type.INCREASE);
export const counterDecrease = createAction(type.DECREASE);
export const setLoading = createAction(type.SETLOADING);
export const addCart = createAction(type.ADD_CART);
export const removeCart = createAction(type.REMOVE_CART);
export const clearCart = createAction(type.CLEAR_CART);
export const setAddress = createAction(type.SET_ADDRESS);
export const addAddress = createAction(type.ADD_ADDRESS);
export const setCoupon = createAction(type.SET_COUPON);
export const loginSuccess = createAction(type.LOGIN);
export const addHistory = createAction(type.ADD_HISTORY);
export const addBookmark = createAction(type.ADD_BOOKMARK);
export const removeBookmark = createAction(type.REMOVE_BOOKMARK);
export const setViewIntroduce = createAction(type.SET_VIEW_INTRODUCE);
export const reset = createAction(type.RESET);
export const logout = createAction(type.LOGOUT);
export const checkoutSuccess = createAction(type.CHECKOUT);
export const getOrder = createAction(type.GET_ORDER);

export const checkout = (data, callback) => {
  return (dispatch) => {
    dispatch(setLoading("Checking out"));
    const user = firebase.auth().currentUser;
    let uid;
    if (user != null) {
      uid = user.uid;
    }
    const cart = Object.keys(data.cart)
      .map((key) => ({ ...data.cart[key], id: key }))
      .filter((item) => item.number > 0 == true);
    const deal = data.selectedCoupon ? data.selectedCoupon.cost : 0;
    const address = data.selectedAddress;

    var cartList = firebase.database().ref("/");
    var newCartRef = cartList.push();
    newCartRef
      .set({
        uid,
        cart,
        deal,
        address,
        total: data.total,
        createAt: new Date().getTime(),
        key: Math.floor(Math.random() * 100000 * 100) + 100000,
      })
      .then(() => {
        dispatch(checkoutSuccess());
        callback();
        dispatch(clearCart());
        dispatch(setLoading(""));
      })
      .catch((err) => console.log(err));
  };
};

export const login = ({ username, password, callback }) => {
  return (dispatch) => {
    dispatch(setLoading("Logging in"));

    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
          name = user.displayName;
          email = user.email;
          // photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          uid = user.uid;
        }
        dispatch(loginSuccess({ name, email, emailVerified, uid }));
        dispatch(setLoading(""));
        callback();
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const register = ({ username, password }) => {
  return (dispatch) => {
    dispatch(setLoading("Signing up"));
    firebase
      .auth()
      .createUserWithEmailAndPassword(username, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;

        if (user != null) {
          name = user.displayName;
          email = user.email;
          emailVerified = user.emailVerified;
          uid = user.uid;
        }
        dispatch(loginSuccess({ name, email, emailVerified, uid }));
        dispatch(setLoading(""));
        callback();
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getMyCart = () => {
  return (dispatch) => {
    dispatch(setLoading("Signing up"));
    const user = firebase.auth().currentUser;
    let uid;
    if (user != null) {
      uid = user.uid;
      let order = [];
      firebase
        .database()
        .ref("/")
        .orderByChild("uid")
        .equalTo(uid)
        .once("value", (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            order.push({ ...childData });
          });
          dispatch(getOrder(order));
          dispatch(setLoading(""));
        });
    }
  };
};
