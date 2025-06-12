import { useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../Auth/hooks/useAuth'

export function useLogout() {
  const { removeCredentials } = useAuth()
  const queryClient = useQueryClient()

  function logout() {
    removeCredentials()
    queryClient.removeQueries()
  }

  return {
    logout
  }
}
