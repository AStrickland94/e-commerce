import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyBpJ8I6LNDPR4asyIdqYFJE9qAgxqXEoJ8",

    authDomain: "e-commerce-c9162.firebaseapp.com",

    projectId: "e-commerce-c9162",

    storageBucket: "e-commerce-c9162.appspot.com",

    messagingSenderId: "149431491761",

    appId: "1:149431491761:web:d9909df5b0fc1136dc5690",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
