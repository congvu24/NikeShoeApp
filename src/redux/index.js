import { createAction } from "redux-actions";
import * as type from "./type";
import * as firebase from "firebase";
import { showMessage, hideMessage } from "react-native-flash-message";

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
export const setCard = createAction(type.SET_CARD);
export const removeItemFromCart = createAction(type.REMOVE_ITEM_FROM_CART);
export const offLoading = createAction(type.OFF_LOADING);
export const getProfileSuccess = createAction(type.GET_PROFILE);

export const checkout = (data, callback) => {
  return (dispatch) => {
    dispatch(setLoading("Checking out"));
    try {
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
        .catch((err) => {
          dispatch(setLoading(""));
          showMessage({
            message: "Checkout Failed",
            description: "Check your network and try again.",
            icon: "warning",
            type: "danger",
            titleStyle: {
              fontSize: 16,
              fontWeight: "700",
            },
          });
        });
    } catch {
      dispatch(setLoading(""));
      showMessage({
        message: "Checkout Failed",
        description: "Check your network and try again.",
        icon: "warning",
        type: "danger",
        titleStyle: {
          fontSize: 16,
          fontWeight: "700",
        },
      });
    }
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
          emailVerified = user.emailVerified;
          uid = user.uid;
          photoUrl = user.photoURL;
          providerId = user.providerId;
        }
        dispatch(
          loginSuccess({
            name,
            email,
            emailVerified,
            uid,
            photoUrl,
            providerId,
          })
        );
        dispatch(setLoading(""));
        callback();
      })
      .catch((error) => {
        dispatch(setLoading(""));
        showMessage({
          message: "Login Failed",
          description: "Check your password and try again.",
          icon: "warning",
          type: "danger",
          titleStyle: {
            fontSize: 16,
            fontWeight: "700",
          },
        });
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
        dispatch(offLoading());
        callback();
      })
      .catch((error) => {
        dispatch(offLoading());
      });
  };
};

export const getMyCart = () => {
  return (dispatch) => {
    dispatch(setLoading("Loading..."));
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
        })
        .then(() => dispatch(setLoading("")))
        .catch(() => dispatch(setLoading("")));
      dispatch(setLoading(""));
    }
    dispatch(setLoading(""));
  };
};

export const editProfile = (profile) => {
  return (dispatch) => {
    dispatch(setLoading("Updating..."));
    var user = firebase.auth().currentUser;
    if (user != null) {
      user
        .updateProfile({
          displayName: profile.name,
          email: profile.email,
          birthDate: profile.date,
          photoURL: profile.photoUrl,
          phone: profile.phone,
          gender: profile.gender,
        })
        .then(() => {
          dispatch(setLoading(""));
          dispatch(getProfile());
        })
        .catch(function (error) {
          dispatch(setLoading(""));
          showMessage({
            message: "Update failed",
            description: "Check your connection and try again.",
            icon: "warning",
            type: "danger",
            titleStyle: {
              fontSize: 16,
              fontWeight: "700",
            },
          });
        });
    }
    // dispatch(offLoading());
  };
};

export const getProfile = () => {
  return (dispatch) => {
    dispatch(setLoading("Loading..."));
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified, providerId;
    if (user != null) {
      user.providerData.forEach(function (profile) {
        name = profile.displayName;
        email = profile.email;
        emailVerified = profile.emailVerified;
        uid = profile.uid;
        photoUrl = profile.photoURL;
        providerId = profile.providerId;
        dispatch(getProfileSuccess({ name, email, uid, photoUrl, providerId }));
      });
    }
    dispatch(setLoading(""));
  };
};

export const uploadImage = (file, profile) => {
  return async (dispatch) => {
    dispatch(setLoading("Uploading..."));
    var storageRef = firebase.storage().ref();

    const response = await fetch(file);
    const blob = await response.blob();

    var uploadTask = storageRef.child(`images/${profile.name ? profile.name : "user" + new Date().getTime()}`).put(blob);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        // switch (snapshot.state) {
        //   case firebase.storage.TaskState.PAUSED: // or 'paused'
        //     console.log("Upload is paused");
        //     break;
        //   case firebase.storage.TaskState.RUNNING: // or 'running'
        //     console.log("Upload is running");
        //     break;
        // }
      },
      function (error) {
        dispatch(setLoading(""));
        showMessage({
          message: "UploadUpload failed",
          description: "Check your connection and try again.",
          icon: "warning",
          type: "danger",
          titleStyle: {
            fontSize: 16,
            fontWeight: "700",
          },
        });
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          dispatch(setLoading(""));
          dispatch(editProfile({ ...profile, photoUrl: downloadURL }));
        });
      }
    );
  };
};
