  import firebase from 'firebase';
  

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDC3mQDapdUDcSoliAYsEcbR9FKw73mZCU",
    authDomain: "wigan-coders-homepage.firebaseapp.com",
    databaseURL: "https://wigan-coders-homepage.firebaseio.com",
    projectId: "wigan-coders-homepage",
    storageBucket: "",
    messagingSenderId: "422702423372",
    appId: "1:422702423372:web:e1a402c5f8ddb5b9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore()