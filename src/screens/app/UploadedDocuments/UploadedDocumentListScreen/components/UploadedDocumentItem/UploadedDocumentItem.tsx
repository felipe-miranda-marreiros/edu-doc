import { UploadedDocument } from '@/src/entities/UploadedDocuments/UploadDocument'
import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { UploadDocumentCategory } from './components/UploadDocumentCategory'
import { UploadDocumentStatus } from './components/UploadDocumentStatus'

export function UploadedDocumentItem(item: UploadedDocument) {
  const router = useRouter()

  function onPress() {
    router.navigate({
      pathname: '/private/doc-preview/[uri]',
      params: {
        uri: item.file
      }
    })
  }

  return (
    <Pressable
      onPress={onPress}
      className="border justify-center px-3 h-36 rounded-lg active:bg-green-100/25"
    >
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg font-semibold">{item.title}</Text>
          <UploadDocumentCategory category={item.category} />
          <Text>
            Data de Envio:{' '}
            {new Date(item.uploadDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
          </Text>
        </View>
        <UploadDocumentStatus status={item.status} />
      </View>
    </Pressable>
  )
}
