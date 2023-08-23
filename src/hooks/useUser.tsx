/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-inner-declarations */
'use client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getCookie, setCookie, deleteCookie } from 'cookies-next'

import { useRouter } from 'next/navigation'

type IUser = {
  token: string
}

type IUserProps = {
  data: {
    name: string
    cpf: string
    phone: string
    email: string
    password: string
    dateOfBirth: string
  }
}

interface IUserContextData {
  user: IUser
  signup: ({ data }: IUserProps) => Promise<void>
  signin: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

interface IUserProviderProps {
  children: ReactNode
}

const UserContext = createContext<IUserContextData>({} as IUserContextData)

export function UserProvider({ children }: IUserProviderProps) {
  const route = useRouter()
  const [user, setUser] = useState<IUser>({} as IUser)
  const userCookieKey = '@reservify:user'

  async function userInStorage() {
    const getTokenFromCookie = getCookie(userCookieKey)?.valueOf().toString()

    if (getTokenFromCookie) {
      const token = JSON.parse(getTokenFromCookie!).token

      setUser(token)
    } else {
      setUser({} as IUser)
    }
  }

  useEffect(() => {
    userInStorage()
  }, [])

  async function signup({ data }: IUserProps): Promise<void> {
    console.log(data)
    try {
      const response = await fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name: data.name,
          cpf: data.cpf,
          phone: data.phone,
          email: data.email,
          password: data.password,
          date_of_birth: data.dateOfBirth,
        }),
        cache: 'no-cache',
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data)
      } else {
        console.log('Error:', response.status)
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  async function signin(email: string, password: string): Promise<void> {
    try {
      const response = await fetch('http://localhost:8080/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        cache: 'no-cache',
      })

      if (response.ok) {
        const data = await response.json()
        // save token in local storage
        setUser(data.token)
        setCookie(userCookieKey, JSON.stringify(data))
        console.log(data)
      } else {
        console.log('Error:', response.status)
      }
    } catch (error) {
      console.log('Error:', error)
    }
  }

  async function logout() {
    try {
      setUser({} as IUser)
      deleteCookie(userCookieKey)

      route.push('/')
    } catch {
      throw new Error('Erro ao sair')
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): IUserContextData {
  const context = useContext(UserContext)

  return context
}
