import Firebase from "firebase/compat/app";
import "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD6FPWXARZqy4-43HhD4kkodxDzC2W4wBc",
  authDomain: "netflix-clone-654da.firebaseapp.com",
  projectId: "netflix-clone-654da",
  storageBucket: "netflix-clone-654da.appspot.com",
  messagingSenderId: "275438505592",
  appId: "1:275438505592:web:10bad496961fd9bc63278d",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
