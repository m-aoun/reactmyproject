// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC82U1WkGc3gxIRQi8UTq3E_jG1hMGtU9U",
  authDomain: "m-aoun.firebaseapp.com",
  projectId: "m-aoun",
  storageBucket: "m-aoun.appspot.com",
  messagingSenderId: "16271364951",
  appId: "1:16271364951:web:95cf7d5627bdfe84b0e412",
  measurementId: "G-MR0P4QJ6HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);