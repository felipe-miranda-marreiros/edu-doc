import { useUploadDocument } from '@/src/features/UploadDocument/useUploadDocumentApi'
import { useUploadStore } from '@/src/features/UploadDocument/useUploadStore'
import { compressString } from '@/src/shared/utils/compressString'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { Button, Image, View } from 'react-native'

interface CameraPreviewProps {
  uri: string
}

export default function CameraPreviewScreen({ uri }: CameraPreviewProps) {
  const { uploadDocument, isPending } = useUploadDocument()
  const source = compressString.decodePathFromUrlParam(uri)
  const { category, title } = useUploadStore()
  const queryClient = useQueryClient()
  const router = useRouter()

  async function onUpload() {
    uploadDocument(
      { category: category ?? '', file: uri, title: title ?? '' },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({ queryKey: ['UPLOAD_DOCUMENT_LIST'] })
          router.replace('/private/uploaded-docs')
        }
      }
    )
  }

  function onRedone() {
    router.replace('/private/camera')
  }

  return (
    <View className="flex-1">
      <Image alt="Preview de foto" source={{ uri: source }} className="flex-1" />
      <View className="gap-4">
        <Button disabled={isPending} onPress={onUpload} title="Fazer upload" />
        <Button disabled={isPending} onPress={onRedone} title="Refazer" />
      </View>
    </View>
  )
}
