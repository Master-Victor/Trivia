import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAN9eOvQzRS7NaU1mNLrb2uN420Tv7c8Cg",
    authDomain: "triviamultiple.firebaseapp.com",
    projectId: "triviamultiple",
    storageBucket: "triviamultiple.appspot.com",
    messagingSenderId: "783486795416",
    appId: "1:783486795416:web:62f95ab1d0b75cabcd9aed",
    measurementId: "G-3ELKP1N8GY"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = fb.firestore()

export {auth, firebase,db}