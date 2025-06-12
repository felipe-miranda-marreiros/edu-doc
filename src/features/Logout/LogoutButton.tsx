import { Button } from 'react-native'
import { useLogout } from './useLogout'

export function LogoutButton() {
  const { logout } = useLogout()

  return <Button onPress={logout} title="Sair" />
}
