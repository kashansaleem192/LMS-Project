// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhYaxmlN09nSbOkrGyGOXsO_t2Y-5wl2o",
  authDomain: "lms-project-13a8d.firebaseapp.com",
  databaseURL: "https://lms-project-13a8d-default-rtdb.firebaseio.com",
  projectId: "lms-project-13a8d",
  storageBucket: "lms-project-13a8d.firebasestorage.app",
  messagingSenderId: "740103451132",
  appId: "1:740103451132:web:c5b8c1e8100795d858c279",
  measurementId: "G-940RPLFHDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app)
export {db, auth}
export const googleProvider = new GoogleAuthProvider();