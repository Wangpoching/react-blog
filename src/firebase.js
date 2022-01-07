import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, query, where } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth'
import { getIdToken } from './utils'
import { thirdPartyRegister, normalRegister } from './WebAPI'


const firebaseConfig = {
  apiKey: 'AIzaSyDwEK2eVoaxdegcuZ-Qo04zI9TER4NIkhY',
  authDomain: 'react-blog-78cfd.firebaseapp.com',
  projectId: 'react-blog-78cfd',
  storageBucket: 'react-blog-78cfd.appspot.com',
  messagingSenderId: '307157674489',
  appId: '1:307157674489:web:46c0e4a3486a73cb273528',
  measurementId: 'G-B38KZEEWMZ'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider)
    const IdToken = await getIdToken(auth)
    try {
      const res = await thirdPartyRegister(IdToken)
      if (!res.ok) {
        throw {
          message: '登入失敗'
        }
      }
    } catch (err) {
      await signOut(auth)
      throw {
        message: '登入失敗'
      }
    }
  } catch (err) {
    throw {
      message: err.message
    }
  }
}

const signInByEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw {
      message: err.message
    }
  }
}

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const IdToken = await getIdToken(auth)
    try {
      const res = await normalRegister(IdToken, name)
      if (!res.ok) {
        throw {
          message: '註冊失敗'
        }
      }
    } catch (err) {
      await signOut(auth)
      throw {
        message: '註冊失敗'
      }        
    }
  } catch (err) {
    throw {
      message: err.message
    }
  }
}

const sendPasswordResetMail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    throw {
      message: err.message
    }
  }
}

const logout = async () => {
  await signOut(auth)
}

export {
  auth,
  db,
  signInWithGoogle,
  signInByEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetMail,
  logout
}