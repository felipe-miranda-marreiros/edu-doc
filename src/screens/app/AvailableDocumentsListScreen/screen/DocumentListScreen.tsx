import { DocumentAPI } from '@entities/Documents'
import { Button, Screen } from '@shared/components'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  Text,
  View
} from 'react-native'
import { useDocumentList } from '../api/useDocumentListApi'
import { DocumentItem } from '../components/DocumentItem'

export default function DocumentListScreen() {
  const { docList, isLoading, isError, refetch, isRefetching } = useDocumentList()

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator />
      </View>
    )
  }

  if (isError) {
    return (
      <Screen title="Erro ao buscar documentos">
        <View className="flex-1 items-center justify-center gap-4">
          <Text className="text-2xl text-center">
            Não conseguimos buscar os documentos disponíveis
          </Text>
          <Button title="Tentar novamente" onPress={() => refetch()} />
        </View>
      </Screen>
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
    <Screen title="Para você visualizar">
      <FlatList
        contentContainerStyle={{ gap: 16 }}
        data={docList}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />}
        refreshing={isRefetching}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Screen>
  )
}
