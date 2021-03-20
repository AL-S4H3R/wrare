import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAAOL1nTf5xDiL2AV5hCqxz7OA0NryyG40",
    authDomain: "crypto-ticker-6a04a.firebaseapp.com",
    databaseURL: "https://crypto-ticker-6a04a.firebaseio.com",
    projectId: "crypto-ticker-6a04a",
    storageBucket: "crypto-ticker-6a04a.appspot.com",
    messagingSenderId: "695656333360",
    appId: "1:695656333360:web:eb18ff54679c20b82c6df5",
    measurementId: "G-KJLTSBW3F0"
}
  // Initialize Firebase
var app = firebase.initializeApp(firebaseConfig)
export var storageBucket = app.storage().ref()