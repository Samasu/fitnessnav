import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyANIymtDWjHIx_XK29KTIzV-V2Tx9pjIiI",
    authDomain: "netninja-d125d.firebaseapp.com",
    databaseURL: "https://netninja-d125d.firebaseio.com",
    projectId: "netninja-d125d",
    storageBucket: "",
    messagingSenderId: "890091264883",
    appId: "1:890091264883:web:4ae8517756f8cf341c8306"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;