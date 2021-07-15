import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDiDGgFgXZVN3FKKpypd78vZ-ASi5WLupM",
    authDomain: "clone-b4642.firebaseapp.com",
    projectId: "clone-b4642",
    storageBucket: "clone-b4642.appspot.com",
    messagingSenderId: "613392675199",
    appId: "1:613392675199:web:818313e8fe6cb974bc2a4a",
    measurementId: "G-7497D9MB6V"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider };