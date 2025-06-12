import { DocumentAPI } from '@entities/Documents'
import { compressString } from '@shared/utils'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

export function DocumentItem(item: DocumentAPI) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  function onPress() {
    router.navigate({
      pathname: '/private/doc-preview/[uri]',
      params: {
        uri: compressString.encodePathToUrlParam(item.url)
      }
    })
  }

  return (
    <Pressable onPress={onPress} className="border p-3 rounded-lg active:bg-green-100/25">
      <View className="justify-center">
        <Text className="text-lg font-semibold">{item.title}</Text>
        <Text>{item.category.toUpperCase()}</Text>
        {item.pages > 0 && <Text>Paginas: {item.pages}</Text>}
        <View className="flex-row self-end gap-5">
          <Text>{item.type.toUpperCase()}</Text>
          <Text>{item.size}</Text>
        </View>
      </View>
      {isVisible ? (
        <View className="py-5">
          <Text className="mt-4">{item.description}</Text>
          <Pressable onPress={() => setIsVisible((prevState) => !prevState)}>
            <Text className="text-center font-semibold">Ocultar</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable hitSlop={46} onPress={() => setIsVisible((prevState) => !prevState)}>
          <Text className="text-center font-semibold">Ver descrição</Text>
        </Pressable>
      )}
    </Pressable>
  )
}
