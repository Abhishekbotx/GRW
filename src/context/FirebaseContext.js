import { createContext, useContext } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, set, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD5sNstJGkA46wODUclDhNFbDYoy-5Rego",
    authDomain: "bharat-bridal-week.firebaseapp.com",
    projectId: "bharat-bridal-week",
    storageBucket: "bharat-bridal-week.appspot.com",
    messagingSenderId: "6579167650",
    appId: "1:6579167650:web:265e47b5a8cb0746d192fb",
    databaseURL: 'https://bharat-bridal-week-default-rtdb.firebaseio.com/'
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password);
    };
    const signinUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password);
    };

    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(firebaseAuth, googleProvider);
            return response.user;
        } catch (error) {
            console.error('Error during Google sign-in:', error);
            throw error;
        }
    };

    const putData = (key, data) => set(ref(database, key), data);

    return (
        <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, putData, signinUserWithEmailAndPassword, signInWithGoogle }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
