import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBxef-nRnGJEDXPUbJ8CkQRpzYEMPbMqhs",
  authDomain: "socialitis-46829.firebaseapp.com",
  databaseURL: "https://socialitis-46829.firebaseio.com",
  projectId: "socialitis-46829",
  storageBucket: "socialitis-46829.appspot.com",
  messagingSenderId: "27361418325",
  appId: "1:27361418325:web:15c4347a91a35d3197c8dc",
  measurementId: "G-0BWH68YJ6K"
});

const db=firebaseApp.firestore();

export default db;