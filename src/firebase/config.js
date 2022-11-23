// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-o-98cQ5wn2xLdfOSFdaD6vNfiegC5t8",
  authDomain: "bestworldburger-595a6.firebaseapp.com",
  projectId: "bestworldburger-595a6",
  storageBucket: "bestworldburger-595a6.appspot.com",
  messagingSenderId: "236614921465",
  appId: "1:236614921465:web:e6f22c4c57df1e3bdd8628",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
