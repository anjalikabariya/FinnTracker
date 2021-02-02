import firebase from 'firebase/app'
import 'firebase/firestore'

const fireBaseConfig = {
	apiKey: "AIzaSyBAb7Z1mP7WIQZLFn8WBEkOw0em2l5M0uk",
  authDomain: "finntracker-489c6.firebaseapp.com",
  projectId: "finntracker-489c6",
  storageBucket: "finntracker-489c6.appspot.com",
  messagingSenderId: "850303246138",
  appId: "1:850303246138:web:ea09d1634d0f265cb8ba03",
  measurementId: "G-NKEFD9FD1V"
}
firebase.initializeApp(fireBaseConfig)
export default firebase;
// class Firebase {
// 	constructor() {
// 		app.initializeApp(config)
// 		this.auth = app.auth()
// 		this.db = app.firestore()
// 	}

// 	login(email, password) {
// 		return this.auth.signInWithEmailAndPassword(email, password)
// 	}

// 	logout() {
// 		return this.auth.signOut()
// 	}

// 	async register(name, email, password) {
// 		await this.auth.createUserWithEmailAndPassword(email, password)
// 		return this.auth.currentUser.updateProfile({
// 			displayName: name
// 		})
// 	}

// 	addQuote(quote) {
// 		if(!this.auth.currentUser) {
// 			return alert('Not authorized')
// 		}

// 		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
// 			quote
// 		})
// 	}

// 	isInitialized() {
// 		return new Promise(resolve => {
// 			this.auth.onAuthStateChanged(resolve)
// 		})
// 	}

// 	getCurrentUsername() {
// 		return this.auth.currentUser && this.auth.currentUser.displayName
// 	}

// 	async getCurrentUserQuote() {
// 		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
// 		return quote.get('quote')
// 	}
// }

