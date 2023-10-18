// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAIJQZfRm2qJ5-iFnRJf40PFzhjDf0ddQ",
    authDomain: "mission-10-client.firebaseapp.com",
    projectId: "mission-10-client",
    storageBucket: "mission-10-client.appspot.com",
    messagingSenderId: "515801936089",
    appId: "1:515801936089:web:7fdd835682de9048e64ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;