import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSetc5ZIe5rEXG-lozcj8P9mlDsDEMN-E",
  authDomain: "patrocina-varzea-27163.firebaseapp.com",
  projectId: "patrocina-varzea-27163",
  storageBucket: "patrocina-varzea-27163.appspot.com",
  messagingSenderId: "849948842277",
  appId: "1:849948842277:web:32bdd0b2378a4a591b22cc",
  measurementId: "G-9V4QSFXYCD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
