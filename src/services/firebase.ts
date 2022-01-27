import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_SERVICE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_SERVICE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_SERVICE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_SERVICE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_SERVICE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_SERVICE_APP_ID,
    measurementId: process.env.VITE_FIREBASE_SERVICE_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database;
