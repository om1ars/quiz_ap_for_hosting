import { getAuth, GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCIUpCDqsDMCFJkr4i-5NkR0Z2iLxj6rqU",
  authDomain: "auth-redux-9e2fb.firebaseapp.com",
  projectId: "auth-redux-9e2fb",
  storageBucket: "auth-redux-9e2fb.appspot.com",
  messagingSenderId: "11708187124",
  appId: "1:11708187124:web:5c9fab6a2f2330fea1f9a1",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };
