import { UploadedDocument } from '@entities/UploadedDocuments'
import { Screen } from '@shared/components'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  Text,
  View
} from 'react-native'
import { useUploadedDocumentList } from '../api/useUploadedDocumentListApi'
import { UploadedDocumentItem } from '../components/UploadedDocumentItem/UploadedDocumentItem'
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

  function renderItem({ item }: ListRenderItemInfo<UploadedDocument>) {
    return <UploadedDocumentItem {...item} />
  }

  function keyExtractor({ id }: UploadedDocument) {
    return id
  }

  function onRefresh() {
    refetch()
  }

  return (
    <Screen title="Documentos que você enviou">
      {uploadedList?.length ? (
        <>
          <FlatList
            contentContainerStyle={{ gap: 16, paddingBottom: 16 }}
            data={uploadedList}
            refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />}
            refreshing={isRefetching}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            scrollEnabled
          />
          <View className="-ml-4 -mr-4 -mb-4">
            <UploadFileButton />
          </View>
        </>
      ) : (
        <View className="items-center gap-3 justify-center flex-1">
          <Text className="text-3xl">Nenhum arquivo encontrado</Text>
          <Text>Tente enviar um novo arquivo</Text>
          <UploadFileButton />
        </View>
      )}
    </Screen>
  )
}
