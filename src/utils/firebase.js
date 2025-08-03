// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_4G4qJ7R6PsDkiyqyQzEAimzLBIEfsxw",
  authDomain: "flixgpt-4482d.firebaseapp.com",
  projectId: "flixgpt-4482d",
  storageBucket: "flixgpt-4482d.firebasestorage.app",
  messagingSenderId: "411565326115",
  appId: "1:411565326115:web:be562bd6e099d232b09696",
  measurementId: "G-P6R0SG5LJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();