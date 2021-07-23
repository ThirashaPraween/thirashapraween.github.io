import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhu2ckdgO6OGd7KdGQmudaskS2f59z59M",
    authDomain: "firegram-nj.firebaseapp.com",
    projectId: "firegram-nj",
    storageBucket: "firegram-nj.appspot.com",
    messagingSenderId: "1038031690165",
    appId: "1:1038031690165:web:5dc7b7f806102e443aa1fc"
};
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };