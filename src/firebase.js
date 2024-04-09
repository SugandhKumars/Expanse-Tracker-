// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl31q9h9JszV3FyHZ0pAxb-6XUti38gX4",
  authDomain: "windy-ripsaw-418707.firebaseapp.com",
  projectId: "windy-ripsaw-418707",
  storageBucket: "windy-ripsaw-418707.appspot.com",
  messagingSenderId: "954784254780",
  appId: "1:954784254780:web:7dc641fbdd50f162172c39",
  measurementId: "G-NSZCV3KGZ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
export { db, auth, Provider, doc, setDoc };
