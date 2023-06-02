import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react'

export type User = {
  id?: number
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
  const [user, setUser] = useState<User>({})

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
