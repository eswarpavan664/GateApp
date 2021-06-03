/* eslint-disable no-unused-vars */
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCIDGyFv0htAY29TCA6d248AvWRMUGWDNw",
  authDomain: "gate-app-b241e.firebaseapp.com",
  projectId: "gate-app-b241e",
  storageBucket: "gate-app-b241e.appspot.com",
  messagingSenderId: "812366319617",
  appId: "1:812366319617:web:24024fa2fe9fb379727000",
  measurementId: "G-Y5S4QPH02J"
};

firebase.initializeApp(firebaseConfig);

export default firebase;