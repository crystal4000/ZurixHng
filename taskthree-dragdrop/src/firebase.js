// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlVncvVFwv76gDdTfvpExXsI7CfT-inEw",
  authDomain: "drag-and-drop-e14d7.firebaseapp.com",
  projectId: "drag-and-drop-e14d7",
  storageBucket: "drag-and-drop-e14d7.appspot.com",
  messagingSenderId: "505151666260",
  appId: "1:505151666260:web:2aababa7d6beab9c7b95c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
