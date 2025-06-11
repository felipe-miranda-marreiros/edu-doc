import { UploadedDocumentAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import { useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'

export function UploadedDocumentItem(item: UploadedDocumentAPI) {
  const router = useRouter()

  function onPress() {
    router.navigate('/private/doc-preview')
  }

  return (
    <Pressable
      onPress={onPress}
      className="border justify-center px-3 h-36 rounded-lg active:bg-green-100/25"
    >
      <Text className="text-lg font-semibold">{item.title}</Text>
      <Text>{item.category.toUpperCase()}</Text>
      <Text>
        Data de Envio: {new Date(item.uploadDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
      </Text>
    </Pressable>
  )
}
