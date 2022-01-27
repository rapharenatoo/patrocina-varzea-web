import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCduvnjXBHePGtCBEoeFFu6XVzUP0Uuv3o",
    authDomain: "patrocina-varzea-bfa92.firebaseapp.com",
    projectId: "patrocina-varzea-bfa92",
    storageBucket: "patrocina-varzea-bfa92.appspot.com",
    messagingSenderId: "632230304137",
    appId: "1:632230304137:web:f95c79d4269ab67b92a958",
    measurementId: "G-SDB23R1VQH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database;
