import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = app.firestore();
export {app, auth, db};