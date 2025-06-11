import { UploadedDocumentAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  Text,
  View
} from 'react-native'
import { useUploadedDocumentList } from '../api/useUploadedDocumentListApi'
import { UploadedDocumentItem } from '../components/UploadedDocumentItem'
import { UploadFileButton } from '../components/UploadFileButton'

export default function UploadedDocumentListScreen() {
  const { uploadedList, isLoading, refetch, isRefetching } = useUploadedDocumentList()

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    )
  }

  function renderItem({ item }: ListRenderItemInfo<UploadedDocumentAPI>) {
    return <UploadedDocumentItem {...item} />
  }

  function keyExtractor({ id }: UploadedDocumentAPI) {
    return id
  }

  function onRefresh() {
    refetch()
  }

  function empty() {
    return (
      <View className="items-center gap-3 justify-center flex-1">
        <Text className="text-3xl">Nenhum arquivo encontrado</Text>
        <Text>Tente enviar um novo arquivo</Text>
        <UploadFileButton />
      </View>
    )
  }

  return (
    <FlatList
      contentContainerStyle={{ flex: 1, padding: 16, gap: 16, backgroundColor: 'white' }}
      data={uploadedList}
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />}
      refreshing={isRefetching}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={empty}
    />
  )
}
