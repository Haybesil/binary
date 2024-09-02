
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB0qUxX31udwmuKuNg6AQlLyN6GVvNr8oc",
  authDomain: "todo-list-843c7.firebaseapp.com",
  databaseURL: "https://todo-list-843c7-default-rtdb.firebaseio.com",
  projectId: "todo-list-843c7",
  storageBucket: "todo-list-843c7.appspot.com",
  messagingSenderId: "277393199335",
  appId: "1:277393199335:web:73b5578398f04e2eda9242",
  measurementId: "G-FRRQ20S5QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, auth, firestore  }; // Export the auth object for use in other parts of your app