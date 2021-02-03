import firebase from 'firebase/app'
import 'firebase/firestore'

const fireBaseConfig = {
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBAb7Z1mP7WIQZLFn8WBEkOw0em2l5M0uk",
  authDomain: "finntracker-489c6.firebaseapp.com",
  databaseURL: "https://finntracker-489c6-default-rtdb.firebaseio.com",
  projectId: "finntracker-489c6",
  storageBucket: "finntracker-489c6.appspot.com",
  messagingSenderId: "850303246138",
  appId: "1:850303246138:web:ea09d1634d0f265cb8ba03",
  measurementId: "G-NKEFD9FD1V"
}
firebase.initializeApp(fireBaseConfig)
export default firebase;

