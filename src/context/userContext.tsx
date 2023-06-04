import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react'

const userId = localStorage.getItem('userId')

export type User = {
  _id?: string
  id?: string
  name?: string
  lastname?: string
  email?: string
  password?: string
  pic?: string
}

export interface UserContextInterface {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

const defaultState = {
  user: {
    id: userId,
    _id: userId,
    name: '',
    lastname: '',
    email: '',
  },
} as UserContextInterface

export const UserContext = createContext(defaultState)

type UserProviderProps = {
  children: ReactNode
}

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>(defaultState.user)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
