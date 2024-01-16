
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAoEii_ahcgJVXqTr3_cUe5LO6nhOtCDGk",
    authDomain: "olx-project-78644.firebaseapp.com",
    projectId: "olx-project-78644",
    storageBucket: "olx-project-78644.appspot.com",
    messagingSenderId: "680960835765",
    appId: "1:680960835765:web:97536821a05c43edf8befc",
    measurementId: "G-XYG225QSB4"
};

const init = initializeApp(firebaseConfig);
export const auth = getAuth(init)
export const firebase = getFirestore(init)
 