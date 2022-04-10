import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBm3-90pvtfvEr69NqM8fsXJer7F48fpJQ",
    authDomain: "wallet-manager-b2691.firebaseapp.com",
    projectId: "wallet-manager-b2691",
    storageBucket: "wallet-manager-b2691.appspot.com",
    messagingSenderId: "450033307554",
    appId: "1:450033307554:web:094f21cdfb3af61cd76cfb",
    measurementId: "G-R04YPPN53L"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);
export default fire;
