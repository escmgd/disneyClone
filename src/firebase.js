
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxENISG9eaV7N_aDqvvDfMzbHEwJhUX3A",
  authDomain: "disneyclone-ff52e.firebaseapp.com",
  projectId: "disneyclone-ff52e",
  storageBucket: "disneyclone-ff52e.appspot.com",
  messagingSenderId: "540246239683",
  appId: "1:540246239683:web:722d24f3af1641bcb5b576",
  measurementId: "G-YSV48WCM1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();