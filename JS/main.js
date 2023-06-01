// all
import { initializeApp } from "firebase/app"
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp, getDoc, updateDoc} from "firebase/firestore";

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
const colProd = collection(db, "Products")
const colUser = collection(db, "Users")


// real time/get collection data
onSnapshot(colProd, (snapshot) => {
    let Products = []
    snapshot.docs.forEach((doc) => {
        Products.push({ ...doc.data(), id: doc.id })
    })
    console.log(Products)
})

onSnapshot(colUser, (snapshot) => {
  let Users = []
  snapshot.docs.forEach((doc) => {
      Users.push({ ...doc.data(), id: doc.id })
  })
  console.log(Users)
})
//get single doc


// adding documents


//deleting documents


// highlights
//chess
const chessdocRef = doc(db, "Products", "UBbAOFmYPLMx64xSHe8p")
onSnapshot(chessdocRef, (doc) => {
    console.log(doc.data().picture)
    const chesspic = doc.data().picture
    const chessadd = document.querySelector(".chesspicpin")
    chessadd.innerHTML += `<img class="chesspic" src=${chesspic} alt="3D printed Chess Pice Set">`
  //  chessadd.innerHTML += `<h4 class="highdes">3D printed Chess pice set.  200KR</h4>`

})
//dice
const dicedocRef = doc(db, "Products", "Clf3TpeO1zTbEdjbLLJB")
onSnapshot(dicedocRef, (doc) => {
    console.log(doc.data().picture)
    const dicepic = doc.data().picture
    const diceadd = document.querySelector(".dicepicpin")
    diceadd.innerHTML += `<img class="dicepic" src=${dicepic} alt="3D printed 6 sided Dice">`
//    diceadd.innerHTML += `<h4 class="highdes">3D printed Dice set.  43KR</h4>`

})
//pot
const potdocRef = doc(db, "Products", "QCoLQMXXvxVaJoavJjJR")
onSnapshot(potdocRef, (doc) => {
    console.log(doc.data().picture)
    const potpic = doc.data().picture
    const potadd = document.querySelector(".potpicpin")
    potadd.innerHTML += `<img class="potpic" src=${potpic} alt="3D printed flower Pot">`
  //  potadd.innerHTML += `<h4 class="highdes">3D printed Flower Pot.  50KR</h4>`

})
// store

// user-loginn-logout


//signup

//logging in and out

console.log(location.href)
console.log(localStorage)
const log = localStorage.getItem("login")

if (location.href === "http://127.0.0.1:5500/VG1/Store/HTML/user.html" && log === "false") {
  location.assign("http://127.0.0.1:5500/VG1/Store/HTML/loginn.html")
} else {
  console.log("You are in the right place")
}

//passwords //mails
onSnapshot(colUser, (snapshot) => {
  let passwords = []
  snapshot.docs.forEach((doc) => {
      passwords.push(doc.data().password)
  })

  let mails = []
  snapshot.docs.forEach((doc) => {
      mails.push(doc.data().mail)
  })

  console.log(passwords)
  console.log(mails)
 
})




const loginForm = document.querySelector("loginform")
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  
})


