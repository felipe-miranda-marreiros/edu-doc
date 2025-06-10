import { DocumentAPI } from '@/src/entities/Documents/Document'
import { useBottomSheetService } from '@/src/shared/components/BottomSheet/BottomSheetStore'
import { Pressable, Text, View } from 'react-native'
import { DocumentPreview } from './DocumentPreview'

export function DocumentItem(item: DocumentAPI) {
  const { onOpen } = useBottomSheetService()

  function onPress() {
    onOpen({
      Component: <DocumentPreview />,
      snapPoints: ['50%']
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
