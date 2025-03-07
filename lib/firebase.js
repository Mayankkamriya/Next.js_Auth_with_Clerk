import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {

  apikey: process.env.NEXT_PUBLIC_APIKEY,
authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
projectId: process.env.NEXT_PUBLIC_PROJECTID,
storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
messagingSenderId: process.env.NEXT_PUBLIC_APP_MESSAGINGSENDERID,
appId: process.env.NEXT_PUBLIC_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig)
const db = getFirestore(app);

export { db, setDoc, doc };
