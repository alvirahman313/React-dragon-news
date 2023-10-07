// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrP6-2GErxa8A-OLamZrMx5B9X23uEsNw",
    authDomain: "react-dragon-news-29d56.firebaseapp.com",
    projectId: "react-dragon-news-29d56",
    storageBucket: "react-dragon-news-29d56.appspot.com",
    messagingSenderId: "721721214499",
    appId: "1:721721214499:web:0b622a5e808f4242421396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;