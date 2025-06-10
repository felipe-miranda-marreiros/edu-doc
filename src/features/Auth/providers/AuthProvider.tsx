import { createContext, useEffect, useState } from 'react'

import { Credentials } from '@/src/entities/Auth/Auth'
import { credentialStorage } from '../storage/CredentialStorage'

interface AuthContextProps {
  authCredentials: Credentials | null
  isLoading: boolean
  saveCredentials(credentials: Credentials): Promise<void>
  removeCredentials(): Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {}
})

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [authCredentials, setAuthCredentials] = useState<Credentials | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    startAuthCredentials()
  }, [])

  async function startAuthCredentials() {
    try {
      const credentials = await credentialStorage.get()
      if (credentials) {
        setAuthCredentials(credentials)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function saveCredentials(credentials: Credentials): Promise<void> {
    credentialStorage.set(credentials)
    setAuthCredentials(credentials)
  }

  async function removeCredentials(): Promise<void> {
    credentialStorage.remove()
    setAuthCredentials(null)
  }

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
