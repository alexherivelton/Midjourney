// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEqZD1KEVWrHgCwHaxTsjATgpLUNy_zy4",
  authDomain: "midjourney-herbert.firebaseapp.com",
  projectId: "midjourney-herbert",
  storageBucket: "midjourney-herbert.appspot.com",
  messagingSenderId: "604950399632",
  appId: "1:604950399632:web:0b839013e1f5959553e615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
