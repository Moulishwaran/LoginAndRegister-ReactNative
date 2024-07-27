// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPS4KHEu-f_i1nRPN9wvalp7tQsYJTml8",
  authDomain: "loignrn.firebaseapp.com",
  projectId: "loignrn",
  storageBucket: "loignrn.appspot.com",
  messagingSenderId: "598097768632",
  appId: "1:598097768632:web:594c6882615e1f19fb044d",
  measurementId: "G-0YVPN33XS4",
};
let auth;
if (getApps().length == 0) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  auth = getAuth();
}

export default auth;
