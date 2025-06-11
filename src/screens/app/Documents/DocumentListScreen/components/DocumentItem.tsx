import { DocumentAPI } from '@/src/entities/Documents/Document'
import { compressString } from '@/src/shared/utils/compressString'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export function DocumentItem(item: DocumentAPI) {
  const router = useRouter()

  function onPress() {
    router.navigate({
      pathname: '/private/doc-preview/[uri]',
      params: {
        uri: compressString.encodePathToUrlParam(item.url)
      }
    })
  }

  return (
    <Pressable
      onPress={onPress}
      className="border justify-center px-3 h-36 rounded-lg active:bg-green-100/25"
    >
      <Text className="text-lg font-semibold">{item.title}</Text>
      <Text>{item.category.toUpperCase()}</Text>
      {item.pages > 0 && <Text>Paginas: {item.pages}</Text>}
      <View className="flex-row self-end gap-5">
        <Text>{item.type.toUpperCase()}</Text>
        <Text>{item.size}</Text>
      </View>
    </Pressable>
  )
}
