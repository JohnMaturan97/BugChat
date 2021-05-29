import firebase from 'firebase/app';
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCow8U9BLZeUvTg2AN4Vgznhz1UT2ua2y8",
    authDomain: "bugchat-7260d.firebaseapp.com",
    projectId: "bugchat-7260d",
    storageBucket: "bugchat-7260d.appspot.com",
    messagingSenderId: "1040109570082",
    appId: "1:1040109570082:web:fd03a897cea08dc46be27b",
    measurementId: "G-4FEWSE7SPF"
  }).auth();