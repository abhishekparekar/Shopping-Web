// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ Import DB

const firebaseConfig = {
  apiKey: "AIzaSyBlhafG2QuKs0e4Zpw4TIVu-eZkUi9zmBA",
  authDomain: "shopping-9edfd.firebaseapp.com",
  databaseURL: "https://shopping-9edfd-default-rtdb.firebaseio.com", // ✅ Add this
  projectId: "shopping-9edfd",
  storageBucket: "shopping-9edfd.appspot.com",
  messagingSenderId: "626262855591",
  appId: "1:626262855591:web:2c76e16706a8f91ad73082",
  measurementId: "G-6MLYQB3JWR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // ✅ Create DB instance

export { auth, database }; // ✅ Export database
