// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGEINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };
const firebaseConfig = {
    apiKey: "AIzaSyCrQlXJDc9dgrI_HcXanQYMKbZPG8YWRYg",
    authDomain: "clothing-store-eb432.firebaseapp.com",
    projectId: "clothing-store-eb432",
    storageBucket: "clothing-store-eb432.appspot.com",
    messagingSenderId: "332592615989",
    appId: "1:332592615989:web:2b2e4a02951de737cf577c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;