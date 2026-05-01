// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkGUUbEQdzVX-Sdj7VqHO-PXy1Blypt1M",
  authDomain: "netflixgpt-a066a.firebaseapp.com",
  projectId: "netflixgpt-a066a",
  storageBucket: "netflixgpt-a066a.firebasestorage.app",
  messagingSenderId: "1047411517564",
  appId: "1:1047411517564:web:f323a9139ea976a1d441f9",
  measurementId: "G-Z13YHH0DFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
