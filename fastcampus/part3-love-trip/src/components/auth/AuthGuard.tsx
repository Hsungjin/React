import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@remote/firebase'
import { useUserStore } from '@store/atom/user'

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)
  const setUser = useUserStore((state) => state.setUser)

  onAuthStateChanged(auth, (user) => {
    if (user == null) {
      setUser({
        uid: '',
        email: '',
        displayName: undefined,
        photoURL: undefined,
      })
    } else {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? undefined,
        photoURL: user.photoURL ?? undefined,
      })
    }

    setInitialize(true)
  })

  if (!initialize) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard
