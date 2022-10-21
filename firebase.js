import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDgA7JWS4u_u71yp2CT436exlPYApHwXzM",
  authDomain: "signal-clone-app-51ba8.firebaseapp.com",
  projectId: "signal-clone-app-51ba8",
  storageBucket: "signal-clone-app-51ba8.appspot.com",
  messagingSenderId: "913001338978",
  appId: "1:913001338978:web:cd0ebdb734708aa244193b",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
