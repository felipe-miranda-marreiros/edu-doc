import { PermissionName, usePermission } from '@/src/shared/permission'
import { PropsWithChildren } from 'react'
import { ActivityIndicator, Button, Platform, Text, View } from 'react-native'

interface PermissionManagerProps {
  permissionName: PermissionName
  description: string
}

export function PermissionManager({
  children,
  description,
  permissionName
}: PropsWithChildren<PermissionManagerProps>) {
  const { status, isLoading } = usePermission(permissionName)

  if (status === 'granted') {
    return children
  }

  return (
    <View>
      <View>
        <Text>{description}</Text>
        {isLoading && <ActivityIndicator />}
        {status === 'unavailable' && (
          <Text>Este recurso não está disponível para este dispositivo</Text>
        )}
        {status === 'never_ask_again' && (
          <View className="gap-7">
            {Platform.OS === 'android' && (
              <Text>É necessário abrir e fechar o app novamente após alterar as configurações</Text>
            )}
            <Button title="Abrir as configurações" />
          </View>
        )}
      </View>
    </View>
  )
}
