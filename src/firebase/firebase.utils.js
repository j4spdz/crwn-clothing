import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBRo5DyHzLoJcOof0J9OGInHmbUi4SAURo",
  authDomain: "crwn-db-927f6.firebaseapp.com",
  databaseURL: "https://crwn-db-927f6.firebaseio.com",
  projectId: "crwn-db-927f6",
  storageBucket: "crwn-db-927f6.appspot.com",
  messagingSenderId: "235363784961",
  appId: "1:235363784961:web:b7d928df66104a957a6300",
  measurementId: "G-5NDQ43HHDX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;