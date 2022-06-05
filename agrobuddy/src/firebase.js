import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_eDy78b_DtiBwdH3X1rUbDWJrFPTpMTI",
  authDomain: "agro-buddy-1d37f.firebaseapp.com",
  projectId: "agro-buddy-1d37f",
  storageBucket: "agro-buddy-1d37f.appspot.com",
  messagingSenderId: "883949653863",
  appId: "1:883949653863:web:2433ff00665496b396e9c2",
  measurementId: "G-95M1J4E6NL"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);