

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2UydUTEs7VyVpW7OS6nq1YTe315UTJCs",
  authDomain: "genius-car-service-61.firebaseapp.com",
  projectId: "genius-car-service-61",
  storageBucket: "genius-car-service-61.appspot.com",
  messagingSenderId: "500096039165",
  appId: "1:500096039165:web:8450f8a4c2859ed13fa694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
