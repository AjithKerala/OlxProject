import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBW8xAx-vc3aovdmfK-Wz3WpWg3ccO8x0c",
    authDomain: "olxpro-79940.firebaseapp.com",
    projectId: "olxpro-79940",
    storageBucket: "olxpro-79940.appspot.com",
    messagingSenderId: "86794981169",
    appId: "1:86794981169:web:2416661dfeee5feb46aa10",
    measurementId: "G-4QQL7XNLYQ"
  };

export default firebase.initializeApp(firebaseConfig)