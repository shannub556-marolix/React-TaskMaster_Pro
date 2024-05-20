// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ7NEFK3Bg36i8cyJodTv0NmgDsMB5Wys",
  authDomain: "todo-app-ca016.firebaseapp.com",
  projectId: "todo-app-ca016",
  storageBucket: "todo-app-ca016.appspot.com",
  messagingSenderId: "596236817981",
  appId: "1:596236817981:web:00b7f631ec857e0f60bc54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)