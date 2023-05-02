// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG7PeqY7ouVU7tWLjtzvxvaqR0XpMcrMo",
  authDomain: "chef-recipe-hunter-9c5cf.firebaseapp.com",
  projectId: "chef-recipe-hunter-9c5cf",
  storageBucket: "chef-recipe-hunter-9c5cf.appspot.com",
  messagingSenderId: "990148476848",
  appId: "1:990148476848:web:becf42c096e66029096075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;