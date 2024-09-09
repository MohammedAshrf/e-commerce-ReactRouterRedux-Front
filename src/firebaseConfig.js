// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOtjHzTZetHGcwkmOZ_z1d_xWuOjBTa3E",
  authDomain: "storedata-b21dd.firebaseapp.com",
  projectId: "storedata-b21dd",
  storageBucket: "storedata-b21dd.appspot.com",
  messagingSenderId: "824974724809",
  appId: "1:824974724809:web:2446b4535a22d57b0dc718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
