import firebase from 'firebase';
const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID
};
const db = firebase.initializeApp(config)

export const database = db.database();
