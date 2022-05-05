// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDodp1Y8q6_os5Rju_r0p_vOObV3uhzcko",
  authDomain: "plc-slack-clone-1c333.firebaseapp.com",
  projectId: "plc-slack-clone-1c333",
  storageBucket: "plc-slack-clone-1c333.appspot.com",
  messagingSenderId: "290665611707",
  appId: "1:290665611707:web:f08052765c79eeff46449e",
  measurementId: "G-QD38L2GNJ9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// db is the databse

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
