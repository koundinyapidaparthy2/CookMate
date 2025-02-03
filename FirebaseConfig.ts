// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHvjcx36aTpr0nfd_AyxT-phMSwoU95qQ",
  authDomain: "cookmate-bd4f7.firebaseapp.com",
  projectId: "cookmate-bd4f7",
  storageBucket: "cookmate-bd4f7.firebasestorage.app",
  messagingSenderId: "678490619933",
  appId: "1:678490619933:web:2878455a184df4f91406f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
