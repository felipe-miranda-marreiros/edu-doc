import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../features/Auth/hooks/useAuth'
import { Providers } from '../providers/Providers'
import '../shared/mocks/ServerMock'
import '../shared/styles/global.css'

function Routes() {
  const { isLoggedIn } = useAuth()

  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="private" />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="index" />
      </Stack.Protected>
    </Stack>
  )
}

export default function RootLayout() {
  return (
    <Providers>
      <SafeAreaView className="flex-1">
        <Routes />
      </SafeAreaView>
    </Providers>
  )
}
