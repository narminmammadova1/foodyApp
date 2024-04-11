// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlPvdLXPD1HaPpg9L2-q4DgxiySWQPQ4E",
  authDomain: "foodyappproject.firebaseapp.com",
  projectId: "foodyappproject",
  storageBucket: "foodyappproject.appspot.com",
  messagingSenderId: "415957115512",
  appId: "1:415957115512:web:80706466e875a10b5a838d",
  measurementId: "G-2JWPHFZ892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
