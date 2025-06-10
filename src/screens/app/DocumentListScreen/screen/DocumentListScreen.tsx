import { DocumentAPI } from '@/src/entities/Documents/Document'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Pressable,
  RefreshControl,
  Text,
  View
} from 'react-native'
import { useDocumentList } from '../api/useDocumentListApi'

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
    return (
      <Pressable className="border justify-center px-3 h-36 rounded-lg active:bg-green-100/25">
        <Text className="text-lg font-semibold">{item.title}</Text>
        <Text>{item.category}</Text>
        {item.pages > 0 && <Text>Paginas: {item.pages}</Text>}
        <View className="flex-row self-end gap-5">
          <Text>{item.type.toUpperCase()}</Text>
          <Text>{item.size}</Text>
        </View>
      </Pressable>
    )
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
