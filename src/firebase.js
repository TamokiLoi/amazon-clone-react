import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNvTGFU3k7RSr8_jRUnkjLxJLIfvNcjj8",
    authDomain: "clone-a437c.firebaseapp.com",
    projectId: "clone-a437c",
    storageBucket: "clone-a437c.appspot.com",
    messagingSenderId: "1001751473942",
    appId: "1:1001751473942:web:67460dcefbad35af1c6a37",
    measurementId: "G-TE8ZF921NK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };