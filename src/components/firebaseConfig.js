// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk7KjoyK7blM_XNQDlof41RC8SMmgM0j8",
  authDomain: "tiendakmd2022.firebaseapp.com",
  projectId: "tiendakmd2022",
  storageBucket: "tiendakmd2022.appspot.com",
  messagingSenderId: "411159198174",
  appId: "1:411159198174:web:9f1bb84695223f805d054f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)