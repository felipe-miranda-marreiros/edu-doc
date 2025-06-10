import { Stack } from 'expo-router'
import { Providers } from '../providers/Providers'
import '../shared/mocks/ApiMock'
import '../shared/styles/global.css'

export default function RootLayout() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }} />
    </Providers>
  )
}
