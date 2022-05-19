// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7WpoQVcENtnX7VF03sYj42sfI0mu0xZU",
  authDomain: "wow-project-44fdc.firebaseapp.com",
  projectId: "wow-project-44fdc",
  storageBucket: "wow-project-44fdc.appspot.com",
  messagingSenderId: "32031743876",
  appId: "1:32031743876:web:c6160ace57583527a247d1",
  measurementId: "G-776KKNNGQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export {
  app,
  analytics,
  auth,
  provider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
};
