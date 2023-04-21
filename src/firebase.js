// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH9-bJIgmpmFwMR58bttPLsDLn6aOlIFE",
  authDomain: "ryanpairitz-portfolio.firebaseapp.com",
  projectId: "ryanpairitz-portfolio",
  storageBucket: "ryanpairitz-portfolio.appspot.com",
  messagingSenderId: "974561911648",
  appId: "1:974561911648:web:97b3fbc1a32e02daf63405",
  measurementId: "G-LBZR162X2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);