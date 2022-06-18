import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACjl1dYFt9YoChYlCW8EGT0BBvJwxqtw8",
  authDomain: "blog-d4b7b.firebaseapp.com",
  projectId: "blog-d4b7b",
  storageBucket: "blog-d4b7b.appspot.com",
  messagingSenderId: "246962088383",
  appId: "1:246962088383:web:caaa04a5527ae630a0190a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
