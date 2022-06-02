import firebase from "firebase/app";
import "firebase/auth";

export const auth= firebase.initializeApp({
  apiKey: "AIzaSyBzreoSniJuzcFSbaMvQtYLFVrHfQ_XXqo",
  authDomain: "unichat-27915.firebaseapp.com",
  projectId: "unichat-27915",
  storageBucket: "unichat-27915.appspot.com",
  messagingSenderId: "1095190646949",
  appId: "1:1095190646949:web:c213eda4b9be347aedbd4c"
}).auth();