import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import {env} from "process";

const firebaseConfig = {
  REACT_PUBLIC_apiKey: env.REACT_PUBLIC_apiKey,
  REACT_PUBLIC_authDomain: env.REACT_PUBLIC_authDomain,
  REACT_PUBLIC_projectId: env.REACT_PUBLIC_projectId,
  REACT_PUBLIC_storageBucket: env.REACT_PUBLIC_storageBucket,
  REACT_PUBLIC_messagingSenderId: env.REACT_PUBLIC_messagingSenderId,
  REACT_PUBLIC_appId: env.REACT_PUBLIC_appId
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};