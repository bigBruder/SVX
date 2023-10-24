// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCja9IERtmK1YgZwDA-F9a7EtvOOz7k7H4",
  authDomain: "svx-3ddbc.firebaseapp.com",
  projectId: "svx-3ddbc",
  storageBucket: "svx-3ddbc.appspot.com",
  messagingSenderId: "569669679152",
  appId: "1:569669679152:web:32266ba37115f275ae55f5",
  measurementId: "G-LE7MY45707",
};

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = "it";
