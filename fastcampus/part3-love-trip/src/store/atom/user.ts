import { create } from 'zustand'
import type { User } from '@models/user'

interface UserState extends User {
  getUser: () => User
  setUser: (user: User) => void
}

export const useUserStore = create<UserState>((set, get) => ({
  uid: '',
  email: '',
  displayName: undefined,
  photoURL: undefined,

  getUser: () => {
    return get()
  },

  setUser: (user: User) => {
    set(user)
  },
}))

