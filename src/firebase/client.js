import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEKEjRY5rg9Taivm7vX389IX5xEeJ06m4",
  authDomain: "hecho-humo.firebaseapp.com",
  projectId: "hecho-humo",
  storageBucket: "hecho-humo.appspot.com",
  messagingSenderId: "569466497037",
  appId: "1:569466497037:web:1be70e62a8e73a6ad70d44"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)