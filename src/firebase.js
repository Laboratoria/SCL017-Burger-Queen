// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_G4DAxuUHFhXTNH3LxG-CXVM5JkSFIA",
  authDomain: "burgerqueen-majocerpe.firebaseapp.com",
  projectId: "burgerqueen-majocerpe",
  storageBucket: "burgerqueen-majocerpe.appspot.com",
  messagingSenderId: "1046393834721",
  appId: "1:1046393834721:web:d73fb0431598957dd5bba0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;