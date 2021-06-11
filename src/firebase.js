// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxhw72YrLfi5N0eAgQyAT1mZI86iDLSKQ",
  authDomain: "messenger-clone-1c6a1.firebaseapp.com",
  databaseURL: "https://messenger-clone-1c6a1.firebaseio.com",
  projectId: "messenger-clone-1c6a1",
  storageBucket: "messenger-clone-1c6a1.appspot.com",
  messagingSenderId: "538199669109",
  appId: "1:538199669109:web:934aaa74412ab22b91bb3c",
  measurementId: "G-CJG9XYJSP8"
  });
const db = firebaseApp.firestore();

export default db;