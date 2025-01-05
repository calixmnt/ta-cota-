// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2dnM9eUatfSFAfNQZSibUx-Xl0miqDpM",
    authDomain: "ta-cota.firebaseapp.com",
    projectId: "ta-cota",
    storageBucket: "ta-cota.firebasestorage.app",
    messagingSenderId: "575743588162",
    appId: "1:575743588162:web:e29e29d1dc0c2704f07adb",
    measurementId: "G-XRR2X5986B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);