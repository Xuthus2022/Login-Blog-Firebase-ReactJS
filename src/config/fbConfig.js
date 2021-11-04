// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB59tqQ9ZtedQFRzx473vPw_tU1P7L3hXw",
	authDomain: "digital-outcome.firebaseapp.com",
	projectId: "digital-outcome",
	storageBucket: "digital-outcome.appspot.com",
	messagingSenderId: "92571311487",
	appId: "1:92571311487:web:a51e3983d1891a66624e4a",
	measurementId: "G-EVRZBMWGXM"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export default app