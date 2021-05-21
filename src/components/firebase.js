/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCN_qPA1L2qIDqcE-X2TM4x9PIhQ9aVDkQ",
  authDomain: "gateapp-40996.firebaseapp.com",
  projectId: "gateapp-40996",
  storageBucket: "gateapp-40996.appspot.com",
  messagingSenderId: "53840716298",
  appId: "1:53840716298:web:f1709d887a2df993ab75f3",
  measurementId: "G-3QC0NX5QKN"
};

firebase.initializeApp(firebaseConfig);

export default firebase;