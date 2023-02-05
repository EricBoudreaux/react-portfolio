import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBft0jLUjclXoxmyxN4-k76p7QN1ty2gkk",
  authDomain: "portfolio-messages-68c55.firebaseapp.com",
  projectId: "portfolio-messages-68c55",
  storageBucket: "portfolio-messages-68c55.appspot.com",
  messagingSenderId: "986028959188",
  appId: "1:986028959188:web:e153c6f9afec5a5db5e241"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore()