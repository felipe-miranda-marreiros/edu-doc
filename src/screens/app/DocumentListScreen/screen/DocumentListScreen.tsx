import { DocumentAPI } from '@/src/entities/Documents/Document'
import { ActivityIndicator, FlatList, ListRenderItemInfo, RefreshControl, View } from 'react-native'
import { useDocumentList } from '../api/useDocumentListApi'
import { DocumentItem } from '../components/DocumentItem'

export default function DocumentListScreen() {
  const { docList, isLoading, refetch, isRefetching } = useDocumentList()

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    )
  }

  function renderItem({ item }: ListRenderItemInfo<DocumentAPI>) {
    return <DocumentItem {...item} />
  }

  function keyExtractor({ id }: DocumentAPI) {
    return id
  }

  function onRefresh() {
    refetch()
  }

  return (
    <FlatList
      contentContainerStyle={{ flex: 1, padding: 16, gap: 16, backgroundColor: 'white' }}
      data={docList}
      refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />}
      refreshing={isRefetching}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  )
}
