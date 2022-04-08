// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfOfeWyZJXigmdTvtLyll_4W93l8elQYo",
  authDomain: "privateroutingwithauth.firebaseapp.com",
  projectId: "privateroutingwithauth",
  storageBucket: "privateroutingwithauth.appspot.com",
  messagingSenderId: "29697892669",
  appId: "1:29697892669:web:98b4e8b76102b92510e554",
  measurementId: "G-BX9QYRFZ4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;