
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqy7CDFW7t_-W-5oGxDTKxcWF8ZmtxXtI",
  authDomain: "reactproject-63c10.firebaseapp.com",
  projectId: "reactproject-63c10",
  storageBucket: "reactproject-63c10.appspot.com",
  messagingSenderId: "1028748023070",
  appId: "1:1028748023070:web:6bb4c9ecf6d2dc5b87250f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);