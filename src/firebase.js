import firebase from "firebase";
import data from './fixtures/config.json';


const firebaseConfig = {
    apiKey: data[1].apiKey,
    authDomain: data[1].authDomain,
    databaseURL: data[1].databaseURL,
    projectId: data[1].projectId,
    storageBucket: data[1].storageBucket,
    messagingSenderId: data[1].messagingSenderId,
    appId: data[1].appId,
    measurementId: data[1].measurementId
  };
  
   
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;