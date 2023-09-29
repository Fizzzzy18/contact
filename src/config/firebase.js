// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1RQarNZl-0dhe7o1VNpWP_1Cqv64ayaA",
  authDomain: "vite-contact-23c10.firebaseapp.com",
  projectId: "vite-contact-23c10",
  storageBucket: "vite-contact-23c10.appspot.com",
  messagingSenderId: "160593663985",
  appId: "1:160593663985:web:7e3191fb3d531cbe945650"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);