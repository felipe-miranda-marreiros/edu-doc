import { useContext } from 'react'
import { AuthContext, AuthContextProps } from '../providers/AuthProvider'

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth should be used within an AuthProvider')
  }

  return context
}
