import { UploadedDocumentAPI } from '@/src/entities/Documents/UploadDocument'
import { useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export function UploadedDocumentItem(item: UploadedDocumentAPI) {
  const router = useRouter()

  function onPress() {
    router.navigate('/protected/document-preview')
  }

  return (
    <Pressable
      onPress={onPress}
      className="border justify-center px-3 h-36 rounded-lg active:bg-green-100/25"
    >
      <Text className="text-lg font-semibold">{item.title}</Text>
      <Text>{item.category.toUpperCase()}</Text>
    </Pressable>
  )
}
