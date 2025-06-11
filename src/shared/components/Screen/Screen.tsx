import AntDesign from '@expo/vector-icons/AntDesign'
import { useRouter } from 'expo-router'
import { PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'

interface ScreenProps {
  title: string
}

export function Screen({ children, title }: PropsWithChildren<ScreenProps>) {
  const router = useRouter()

  function onPress() {
    if (router.canGoBack()) {
      router.back()
    }
  }

  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-row gap-4 mb-7">
        <Pressable onPress={onPress}>
          <AntDesign name="leftcircleo" size={24} color="black" />
        </Pressable>
        <Text className="text-lg font-semibold">{title}</Text>
      </View>
      {children}
    </View>
  )
}
