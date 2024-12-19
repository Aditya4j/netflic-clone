// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm99zZsJF7hYJ56Jk3Lz8XiFwMHiQzE2Q",
  authDomain: "netflix-clone-ae62e.firebaseapp.com",
  projectId: "netflix-clone-ae62e",
  storageBucket: "netflix-clone-ae62e.firebasestorage.app",
  messagingSenderId: "29671898145",
  appId: "1:29671898145:web:8f296da1edf6ca62f63760",
  measurementId: "G-7XJTG3YSGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const signup = async (name,email,password)=>{ 
    try{
        const response  = await createUserWithEmailAndPassword(auth,email,password)

        const user =  response.user
        await addDoc(collection(db,'user'),{
            uid:user.uid,
            name,
            authProvider:'local',
            email,
        })
    }
    catch(err){
        console.log(err);
        toast.error("Failed to create Account");

    }

}

export const login = async (email,password)=>{
    try{
        const response = await signInWithEmailAndPassword(auth,email,password)


    }
    catch(err){
        console.log(err)
        toast.error("Email or Password is Incorrect")
    }

}

 export const logout = ()=>{
    signOut(auth)
}