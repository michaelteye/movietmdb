import {initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

//web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpKIO64I-a1liMH63MhSPoVd4vGVCo8mE",
    authDomain: "movie-94c6a.firebaseapp.com",
    projectId: "movie-94c6a",
    storageBucket: "movie-94c6a.appspot.com",
    messagingSenderId: "930214497586",
    appId: "1:930214497586:web:d551b061f16e82e54a9b2b"
};


//Initialize Firebase and Firebase Authenticattion
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export default auth

