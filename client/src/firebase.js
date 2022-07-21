import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSj9gwsXBo_3ONfbUXvTZ0K_q2mu9y9mc",
  authDomain: "prj-7d559.firebaseapp.com",
  projectId: "prj-7d559",
  storageBucket: "prj-7d559.appspot.com",
  messagingSenderId: "979689311180",
  appId: "1:979689311180:web:e559c0076f2478030c2b69",
  measurementId: "G-353EY6Z0GQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
