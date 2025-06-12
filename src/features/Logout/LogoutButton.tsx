import { Button } from '@shared/components'
import { useLogout } from './useLogout'

export function LogoutButton() {
  const { logout } = useLogout()

  return <Button onPress={logout} title="Sair" />
}
