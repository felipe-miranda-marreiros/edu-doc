import { Text, View } from 'react-native'
import { LoginForm } from '../components/LoginForm'

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center gap-5 bg-white">
      <Text className="font-semibold text-2xl">EduDOC</Text>
      <LoginForm />
    </View>
  )
}
