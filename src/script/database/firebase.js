import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
/* import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; */
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJCJmXXWepkZQt8ezYemD8tnziBC3mzwI",
  authDomain: "lista-de-tarefas-930fd.firebaseapp.com",
  projectId: "lista-de-tarefas-930fd",
  storageBucket: "lista-de-tarefas-930fd.appspot.com",
  messagingSenderId: "430565549170",
  appId: "1:430565549170:web:2c3af30cd117708e35ceeb"
};

const app = initializeApp(firebaseConfig);
/* const auth = getAuth(app); */
const db = getFirestore(app);

export default db