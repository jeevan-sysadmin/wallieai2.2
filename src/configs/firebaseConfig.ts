// firebaseConfig.ts
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDHfc4mcUjIC3pLHmIHANE-hMT2y2_D8ys',
  authDomain: 'walle-ai-71c09.firebaseapp.com',
  databaseURL: 'https://walle-ai-71c09-default-rtdb.firebaseio.com',
  projectId: 'walle-ai-71c09',
  storageBucket: 'walle-ai-71c09.appspot.com',
  messagingSenderId: '284706423734',
  appId: '1:284706423734:web:9071cde486637d05ff3717',
  measurementId: 'G-0W8R65EDY0'
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider };
