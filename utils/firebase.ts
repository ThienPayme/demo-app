// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx1L2uXI6egHGs_ZmyhQPTvpLidNOC-BQ",
  authDomain: "noti-app-c23c4.firebaseapp.com",
  projectId: "noti-app-c23c4",
  storageBucket: "noti-app-c23c4.appspot.com",
  messagingSenderId: "643970386207",
  appId: "1:643970386207:web:8626ab4e5ccfb24ae2482a",
  measurementId: "G-KT250Z30BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);