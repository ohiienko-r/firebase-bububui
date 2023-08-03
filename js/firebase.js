import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnBhi_QXjbuEejF9_goiZbTOe6h1SUnH0",
  authDomain: "fb-bububui.firebaseapp.com",
  projectId: "fb-bububui",
  storageBucket: "fb-bububui.appspot.com",
  messagingSenderId: "41556491040",
  appId: "1:41556491040:web:fbcc8dfb0c91be5b9ff545",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
