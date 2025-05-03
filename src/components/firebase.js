// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAO3Awpk_BA1N6IaChxPizOgn9OcUnKlU8",
  authDomain: "sample-firebase-ai-app-34619.firebaseapp.com",
  databaseURL: "https://sample-firebase-ai-app-34619-default-rtdb.firebaseio.com",
  projectId: "sample-firebase-ai-app-34619",
  storageBucket: "sample-firebase-ai-app-34619.firebasestorage.app",
  messagingSenderId: "285246643912",
  appId: "1:285246643912:web:d192c4b2322a521f03cffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database instance
export const database = getDatabase(app);
