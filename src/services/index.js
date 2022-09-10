// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYw1v7_1v_Mes23V7ksiTZxB2W4Ef01nY",
  authDomain: "ecommerce-muebles-65d8a.firebaseapp.com",
  projectId: "ecommerce-muebles-65d8a",
  storageBucket: "ecommerce-muebles-65d8a.appspot.com",
  messagingSenderId: "528146937996",
  appId: "1:528146937996:web:c0d1efab9cddba36a023a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db 