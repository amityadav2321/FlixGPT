
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_4G4qJ7R6PsDkiyqyQzEAimzLBIEfsxw",
  authDomain: "flixgpt-4482d.firebaseapp.com",
  projectId: "flixgpt-4482d",
  storageBucket: "flixgpt-4482d.firebasestorage.app",
  messagingSenderId: "411565326115",
  appId: "1:411565326115:web:be562bd6e099d232b09696",
  measurementId: "G-P6R0SG5LJK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();