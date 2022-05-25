import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCNKTav5OlySRIqLwA8XC5uUFtenZ30IF8",
  authDomain: "reactapp-dc27b.firebaseapp.com",
  projectId: "reactapp-dc27b",
  storageBucket: "reactapp-dc27b.appspot.com",
  messagingSenderId: "611880658039",
  appId: "1:611880658039:web:3f5f7606932f057b081272",
  measurementId: "G-M459DHB1EX"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)