import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApe7s8z5xO8GlSXruJ7vGBOTOGK839Ed4",
    authDomain: "chat-app-7a071.firebaseapp.com",
    projectId: "chat-app-7a071",
    storageBucket: "chat-app-7a071.appspot.com",
    messagingSenderId: "571127554744",
    appId: "1:571127554744:web:926ce7a0856affc23f4a4d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);


