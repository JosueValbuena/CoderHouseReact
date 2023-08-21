import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBc1Dl9egz6ID8VXCSLhvtjz5OTbZ2CP-k",
    authDomain: "coderhouse-react-entregafinal.firebaseapp.com",
    projectId: "coderhouse-react-entregafinal",
    storageBucket: "coderhouse-react-entregafinal.appspot.com",
    messagingSenderId: "852435167004",
    appId: "1:852435167004:web:f132625e6e741cac897cd9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);