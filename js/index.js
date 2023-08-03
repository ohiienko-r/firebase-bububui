import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import { db } from "./firebase.js";

async function getStudents() {
  const querySnapshot = await getDocs(collection(db, "students"));

  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

getStudents();
