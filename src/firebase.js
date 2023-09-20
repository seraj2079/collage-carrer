import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDB2SzGi_KHN3JtxtmnVyaeVhiGWd-tjOE",
  authDomain: "collage-70340.firebaseapp.com",
  projectId: "collage-70340",
  storageBucket: "collage-70340.appspot.com",
  messagingSenderId: "906299857238",
  appId: "1:906299857238:web:84d80176a10839bab5def7"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export default database;