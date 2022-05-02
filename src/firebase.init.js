// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjCD3usLCr8k4RYfLrB8uSN-NW6iT-V6A",
  authDomain: "warehouse-inventory-clie-36dc4.firebaseapp.com",
  projectId: "warehouse-inventory-clie-36dc4",
  storageBucket: "warehouse-inventory-clie-36dc4.appspot.com",
  messagingSenderId: "776206212592",
  appId: "1:776206212592:web:228ec2e46dc592750c5135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;