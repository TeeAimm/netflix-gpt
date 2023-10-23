// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDfx6KS4NrdHsi9MMto7WzxOTyAIOtQAaE",
    authDomain: "netflixgpt-9b97c.firebaseapp.com",
    projectId: "netflixgpt-9b97c",
    storageBucket: "netflixgpt-9b97c.appspot.com",
    messagingSenderId: "753712770352",
    appId: "1:753712770352:web:6a6056edaf60f1f8fa6cf5",
    measurementId: "G-G0S11CBN76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
