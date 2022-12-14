import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyA0CFpsxk91HgYGb0b1_cn0QviKzkVNfJw",
  authDomain: "crwn-cloth-store.firebaseapp.com",
  projectId: "crwn-cloth-store",
  storageBucket: "crwn-cloth-store.appspot.com",
  messagingSenderId: "232946531026",
  appId: "1:232946531026:web:746ea44285f5c123ffcb0b"
});

export const auth = getAuth(app);