import { LogoutButton } from '@features/Logout'
import { Button, Screen } from '@shared/components'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function DocumentListOptionScreen() {
  const router = useRouter()

  return (
    <Screen title="Opções de visualização">
      <View className="bg-white flex-1 items-center justify-center">
        <Text className="text-2xl mb-6">Escolha o que você deseja visualizar:</Text>

        <View className="gap-8">
          <Button onPress={() => router.navigate('/private/doc')} title="Documentos disponíveis" />
          <Button
            onPress={() => router.navigate('/private/uploaded-docs')}
            title="Documentos que você enviou"
          />
        </View>
      </View>
      <LogoutButton />
    </Screen>
  )
}
