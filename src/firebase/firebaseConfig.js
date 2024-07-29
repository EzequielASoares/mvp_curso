// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Importa o Firestore
import { getAnalytics } from "firebase/analytics";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDufx0_QUK2TV8A-qE2YCjUcG9_XdXwQRA",
  authDomain: "mvpcurso.firebaseapp.com",
  projectId: "mvpcurso",
  storageBucket: "mvpcurso.appspot.com",
  messagingSenderId: "2122914775",
  appId: "1:2122914775:web:6849bf1efaf6372c068992",
  measurementId: "G-66YCL7430Z"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Adiciona o Firestore
const analytics = getAnalytics(app);

export { auth, db }; // Exporta o Firestore também
