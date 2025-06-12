import { Button, Screen } from '@shared/components'
import { PropsWithChildren } from 'react'
import { ActivityIndicator, Linking, Platform, Text, View } from 'react-native'
import { PermissionName } from './permission/permissionTypes'
import { usePermission } from './permission/usePermission'

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
    <Screen title="Status de permissão">
      <View className="flex-1 gap-4 items-center justify-center">
        <Text className="text-xl font-bold">{description}</Text>
        {isLoading && <ActivityIndicator />}
        {status === 'unavailable' && (
          <Text>Este recurso não está disponível para este dispositivo</Text>
        )}
        {status === 'never_ask_again' && (
          <View className="gap-7">
            {Platform.OS === 'android' && (
              <Text>
                É necessário abrir e fechar o app novamente após alterar as configurações.
              </Text>
            )}
            <Button onPress={Linking.openSettings} title="Abrir as configurações" />
          </View>
        )}
      </View>
    </Screen>
  )
}
