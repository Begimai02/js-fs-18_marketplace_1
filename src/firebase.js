// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPoPZjAL-gkuFKKASOrsSkNg1yUM6nJpY",
  authDomain: "marketplace-js-fs-18-bgm.firebaseapp.com",
  projectId: "marketplace-js-fs-18-bgm",
  storageBucket: "marketplace-js-fs-18-bgm.appspot.com",
  messagingSenderId: "189535702311",
  appId: "1:189535702311:web:44638f47b1e03aa39aed02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
