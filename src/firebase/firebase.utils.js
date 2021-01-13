import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCJ5ly_NX3MafV2pFUlG3_G4bAHtyo4048",
    authDomain: "crwn-db-a6486.firebaseapp.com",
    projectId: "crwn-db-a6486",
    storageBucket: "crwn-db-a6486.appspot.com",
    messagingSenderId: "339262049285",
    appId: "1:339262049285:web:448d09dc2984fcbdcfe06c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;