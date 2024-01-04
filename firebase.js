// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOWHFEjMd8n_3O6dap79nXSEs73ps9mNE",
  authDomain: "agility-service.firebaseapp.com",
  databaseURL: "https://agility-service-default-rtdb.firebaseio.com",
  projectId: "agility-service",
  storageBucket: "agility-service.appspot.com",
  messagingSenderId: "117108293947",
  appId: "1:117108293947:web:28f8f06090db44ec3f371e",
  measurementId: "G-1RVJE3WBP7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);