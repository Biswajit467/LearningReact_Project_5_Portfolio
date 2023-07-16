import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPq6xXJbEbC95DhNkDTdnbVfB-REQZRaA",
  authDomain: "biswajit-react-portfolio.firebaseapp.com",
  projectId: "biswajit-react-portfolio",
  storageBucket: "biswajit-react-portfolio.appspot.com",
  messagingSenderId: "395800624525",
  appId: "1:395800624525:web:eb0f1ae89f7b8057f6d1c4",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
