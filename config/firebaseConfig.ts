import * as firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");

const config = {
    apiKey: "AIzaSyAXR1w3tX7tLDql3Spdq0x0E5DRlKicibg",
    authDomain: "nm-app-b80df.firebaseapp.com",
    databaseURL: "https://nm-app-b80df.firebaseio.com",
    projectId: "nm-app-b80df",
    storageBucket: "",
    messagingSenderId: "452799787770"
  };
  firebase.initializeApp(config);

const db = firebase.firestore();

export default db;