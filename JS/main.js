import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs,
    addDoc
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDDDgpw0DSPgWhYhScCZWnu_iT1LQRDoGg",
    authDomain: "buttik-b0311.firebaseapp.com",
    projectId: "buttik-b0311",
    storageBucket: "buttik-b0311.appspot.com",
    messagingSenderId: "607072455553",
    appId: "1:607072455553:web:217b47831d0309f6213680"
};

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// colection ref
const colRef = collection(db, "Products")

// get collection data
getDocs(colRef)
    .then((snapshot) => {
        let Products = []
        snapshot.docs.forEach((doc) => {
            Products.push({ ...doc.data(), id: doc.id })
        })
        console.log(Products)
    })
    .catch(err => {
        console.log(err.message)
    })

// adding documents
const addProductsForm = document.querySelector(".add")
addProductsForm.addEventListener("submit", (e) => {
    e.preventDefault()


})

//deleting documents
const deleteProductsForm = document.querySelector(".delete")
deleteProductsForm.addEventListener("delete", (e) => {
    e.preventDefault()

    
})