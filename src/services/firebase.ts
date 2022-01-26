import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';


const firebaseConfig = {
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database;
