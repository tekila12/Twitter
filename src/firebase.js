import firebase from "firebase";



const firebaseConfig={
  apiKey: "AIzaSyCSEUsD_7nkEYKI9gIncY4oGBIgd9gIzH0",
  authDomain: "twitter-clone-55639.firebaseapp.com",
  databaseURL: "https://twitter-clone-55639.firebaseio.com",
  projectId: "twitter-clone-55639",
  storageBucket: "twitter-clone-55639.appspot.com",
  messagingSenderId: "689488832011",
  appId: "1:689488832011:web:2239e8372f970e964e090e",
  measurementId: "G-C0FC565H5R"
};


const firebaseApp =firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

export default db;