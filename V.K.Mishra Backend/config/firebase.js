
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getStorage } = require('firebase/storage');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxGPlMElo0vE8OavbgksFmzEAwgDVPJ8E",
  authDomain: "vk-mishra.firebaseapp.com",
  projectId: "vk-mishra",
  storageBucket: "vk-mishra.firebasestorage.app",
  messagingSenderId: "762792613662",
  appId: "1:762792613662:web:f21946bedb911de208db0f",
  measurementId: "G-6QMYTMWVNG"
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);

module.exports = { app, db, storage };
