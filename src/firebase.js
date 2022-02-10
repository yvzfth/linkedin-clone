import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIj8-kmY9z_qQMDvTzaf0hnCUfLrGo9Bs",
  authDomain: "linkedin-clone-b8a95.firebaseapp.com",
  projectId: "linkedin-clone-b8a95",
  storageBucket: "linkedin-clone-b8a95.appspot.com",
  messagingSenderId: "823056390012",
  appId: "1:823056390012:web:9a8d69ce4db5a940d4f6f9",
  measurementId: "G-BQKQ03957L"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };