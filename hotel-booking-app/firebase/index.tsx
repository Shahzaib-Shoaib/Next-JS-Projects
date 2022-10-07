import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBEed09s3sVc3ZjSbq8uIp-uVZ3VogWNfQ",
    authDomain: "hotel-app-abf61.firebaseapp.com",
    databaseURL: "https://hotel-app-abf61-default-rtdb.firebaseio.com",
    projectId: "hotel-app-abf61",
    storageBucket: "hotel-app-abf61.appspot.com",
    messagingSenderId: "142074284141",
    appId: "1:142074284141:web:682f9d5d640b0a1a8fd764",
    measurementId: "G-BLXWQWE1HY"
  };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };