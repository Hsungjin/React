import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useCallback } from 'react'
import { auth, store } from '@remote/firebase'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
import { COLLECTIONS } from '@/constants'
import { useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'

function useGoogleSignin() {
  const navigate = useNavigate()

  const signin = useCallback(async () => {
    const googleProvider = new GoogleAuthProvider()

    try {
      const { user } = await signInWithPopup(auth, googleProvider)

      const snapshot = await getDoc(
        doc(collection(store, COLLECTIONS.USER), user.uid),
      )

      if (snapshot.exists()) {
        navigate('/')
        return
      } else {
        const 새로운유저 = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }

        await setDoc(
          doc(collection(store, COLLECTIONS.USER), user.uid),
          새로운유저,
        )

        navigate('/')
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/popup-closed-by-user') {
          return
        }
      }

      throw new Error('fail to signin')
    }
  }, [navigate])

  const signout = useCallback(() => {
    try {
      signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return { signin, signout }
}

export default useGoogleSignin
