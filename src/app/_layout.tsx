import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Providers } from '../providers/Providers'
import '../shared/mocks/ApiMock'
import '../shared/styles/global.css'

export default function RootLayout() {
  return (
    <Providers>
      <SafeAreaView className="flex-1">
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </Providers>
  )
}
