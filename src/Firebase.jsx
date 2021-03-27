import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDR-k8YuBanoicD6D4AoVL34iwBpFq-548",
    authDomain: "roshaab-app.firebaseapp.com",
    projectId: "roshaab-app",
    storageBucket: "roshaab-app.appspot.com",
    messagingSenderId: "279104998475",
    appId: "1:279104998475:web:41f0956a9039dbd3a051ce",
    measurementId: "G-G5WVWZ1Z5Z"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(firebaseApp);

  export default db;