// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCifK2Cr-yE82w69mN6Rj2nrSQHl6l9bSw",
    authDomain: "login-auth-82df7.firebaseapp.com",
    projectId: "login-auth-82df7",
    storageBucket: "login-auth-82df7.appspot.com",
    messagingSenderId: "114362372465",
    appId: "1:114362372465:web:7e9851ea5c2da5c925a6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;