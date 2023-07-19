import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCoHVBu5h3CHQi1BWnzUDvZT50f1xcVSug",
  authDomain: "rohan-portfolio-8cfa7.firebaseapp.com",
  projectId: "rohan-portfolio-8cfa7",
  storageBucket: "rohan-portfolio-8cfa7.appspot.com",
  messagingSenderId: "463762808425",
  appId: "1:463762808425:web:477baead7729196ebb4cf8"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
