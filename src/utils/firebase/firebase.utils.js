import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBR5KX4ZCj3muwbBf_jZSQl2qH6DAQl3-Y",
  authDomain: "react-ecommerce-cef9e.firebaseapp.com",
  projectId: "react-ecommerce-cef9e",
  storageBucket: "react-ecommerce-cef9e.appspot.com",
  messagingSenderId: "421581298252",
  appId: "1:421581298252:web:777529cb04f38b0499b2e9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if(!userSnapshot.exists()) {
    // create/set the document with the data from userAuth in my collection
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    } catch (e) {
      console.log('error creating the user', e.message);
    }
  }
  // if user exists
  return userDocRef;
}