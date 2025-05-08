// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANIrJt3_o5U2hO9pmUwIgnts_IuPcrJBc",
  authDomain: "dragon-news-3de0d.firebaseapp.com",
  projectId: "dragon-news-3de0d",
  storageBucket: "dragon-news-3de0d.firebasestorage.app",
  messagingSenderId: "860142847534",
  appId: "1:860142847534:web:fb9bd131bef7c8f530c1bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app