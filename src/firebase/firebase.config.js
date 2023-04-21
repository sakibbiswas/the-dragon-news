// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-CWIl0wf5gKQ8ulJNFEBzARvxE50cvUw",
  authDomain: "the-news-dragon-5ce9d.firebaseapp.com",
  projectId: "the-news-dragon-5ce9d",
  storageBucket: "the-news-dragon-5ce9d.appspot.com",
  messagingSenderId: "803338049055",
  appId: "1:803338049055:web:0a542dc2e32c164e4b272a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;