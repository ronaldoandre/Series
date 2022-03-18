import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXQ_aeky8Tr10NmkaeXDhFqqZtwZ0lQi0",
    authDomain: "series-b93a3.firebaseapp.com",
    projectId: "series-b93a3",
    storageBucket: "series-b93a3.appspot.com",
    messagingSenderId: "480096496158",
    appId: "1:480096496158:web:0354dc7ce2971c72e25c0f"
  };
  
  // Initialize Firebase
  let app;
  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const auth = firebase.auth();

  export { auth };