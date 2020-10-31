import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDQm3_-L6wizXJDGZe1r9E29H6dr9hkoDQ",
    authDomain: "crudreactfirebase-2de7d.firebaseapp.com",
    databaseURL: "https://crudreactfirebase-2de7d.firebaseio.com",
    projectId: "crudreactfirebase-2de7d",
    storageBucket: "crudreactfirebase-2de7d.appspot.com",
    messagingSenderId: "104214066706",
    appId: "1:104214066706:web:429aba22757de63ff98acb"
};

const fb = firebase.initializeApp(firebaseConfig);
//conexion a la bd en firestore
export const db = fb.firestore();