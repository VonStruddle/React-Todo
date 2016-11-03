import firebase from 'firebase';

try {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBMuZEzr1XQjus5iVTbBWqkKeMoF3zRzcg",
    authDomain: "awesome-react-todo-21d17.firebaseapp.com",
    databaseURL: "https://awesome-react-todo-21d17.firebaseio.com",
    storageBucket: "awesome-react-todo-21d17.appspot.com",
    messagingSenderId: "352650438331"
  };
  firebase.initializeApp(config);
} catch (e) {
  
}

export const firebaseRef = firebase.database().ref();
export default firebase;