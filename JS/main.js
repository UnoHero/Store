import { initializeApp } from "firebase/app"
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp, getDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDDgpw0DSPgWhYhScCZWnu_iT1LQRDoGg",
    authDomain: "buttik-b0311.firebaseapp.com",
    projectId: "buttik-b0311",
    storageBucket: "buttik-b0311.appspot.com",
    messagingSenderId: "607072455553",
    appId: "1:607072455553:web:217b47831d0309f6213680"
  };

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore()

// colection ref
const colRef = collection(db, "Products")

// real time/get collection data
onSnapshot(colRef, (snapshot) => {
    let Products = []
    snapshot.docs.forEach((doc) => {
        Products.push({ ...doc.data(), id: doc.id })
    })
    console.log(Products)
})

//get single doc
const docRef = doc(db, "Products", "UBbAOFmYPLMx64xSHe8p")

onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})

// adding documents


//deleting documents
