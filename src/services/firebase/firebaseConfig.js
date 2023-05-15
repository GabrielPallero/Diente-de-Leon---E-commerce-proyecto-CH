import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAaY9SYxVbovpVgCE1Zk6PODW_ciOfC3eQ",
    authDomain: "diente-de-leon-ecommerce.firebaseapp.com",
    projectId: "diente-de-leon-ecommerce",
    storageBucket: "diente-de-leon-ecommerce.appspot.com",
    messagingSenderId: "558259039759",
    appId: "1:558259039759:web:f0d58111fedcc2a4483d7a"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);