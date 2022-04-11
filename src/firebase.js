// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAVrIFIlBVSY8MJms3wcFOYPpkALTgLK4",
  authDomain: "marketplace-js-fs-18-erl.firebaseapp.com",
  projectId: "marketplace-js-fs-18-erl",
  storageBucket: "marketplace-js-fs-18-erl.appspot.com",
  messagingSenderId: "1053277835447",
  appId: "1:1053277835447:web:a4f47e3e1e4e2604d73d32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
