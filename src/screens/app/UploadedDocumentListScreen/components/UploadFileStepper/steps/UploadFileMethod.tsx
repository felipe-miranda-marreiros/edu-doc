import { useDocumentPicker } from '@features/DocumentPicker'
import { useUploadActions, useUploadDocument, useUploadStore } from '@features/UploadDocument'
import { Button, useBottomSheetService } from '@shared/components'
import { compressString } from '@shared/utils'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export type UploadFileMethods = 'camera' | 'files'

export function UploadFileMethod() {
  const { isPending, uploadDocument } = useUploadDocument()
  const { category, title } = useUploadStore()
  const { onReset } = useBottomSheetService()
  const { setMethod } = useUploadActions()
  const { onPick } = useDocumentPicker()
  const queryClient = useQueryClient()
  const router = useRouter()

  async function onPress(method: UploadFileMethods) {
    if (method === 'camera') {
      router.navigate({
        pathname: '/private/camera'
      })
      onReset()
      return
    }
    if (method === 'files') {
      const uri = await onPick()

      if (!uri) {
        return
      }

      uploadDocument(
        {
          category: category ?? '',
          file: compressString.encodePathToUrlParam(uri),
          title: title ?? ''
        },
        {
          onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['UPLOAD_DOCUMENT_LIST'] })
            onReset()
          }
        }
      )
    }
    setMethod(method)
  }

  return (
    <View className="py-7">
      <Text className="text-xl mb-4">Escolha como deseja enviar:</Text>
      <View className="gap-4">
        <Button disabled={isPending} onPress={() => onPress('camera')} title="Câmera" />
        <Button
          disabled={isPending}
          onPress={() => onPress('files')}
          title="Escolher em seus arquivos"
        />
      </View>
    </View>
  )
}
