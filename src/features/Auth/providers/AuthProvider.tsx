import { createContext, useEffect, useState } from 'react'

import { Credentials } from '@entities/Auth'
import { credentialStorage } from '../storage/CredentialStorage'

export interface AuthContextProps {
  credentials: Credentials | null
  isLoading: boolean
  saveCredentials(credentials: Credentials): Promise<void>
  removeCredentials(): Promise<void>
  isLoggedIn: boolean
}

export const AuthContext = createContext<AuthContextProps>({
  credentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  isLoggedIn: false
})

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [credentials, setCredentials] = useState<Credentials | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    startAuthCredentials()
  }, [])

  async function startAuthCredentials() {
    try {
      const credentials = await credentialStorage.get()
      if (credentials) {
        setCredentials(credentials)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function saveCredentials(credentials: Credentials): Promise<void> {
    credentialStorage.set(credentials)
    setCredentials(credentials)
  }

  async function removeCredentials(): Promise<void> {
    credentialStorage.remove()
    setCredentials(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: credentials !== null,
        credentials,
        isLoading,
        saveCredentials,
        removeCredentials
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
