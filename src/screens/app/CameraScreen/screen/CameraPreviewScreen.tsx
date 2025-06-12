import { useUploadDocument, useUploadStore } from '@features/UploadDocument'
import { Button } from '@shared/components'
import { compressString } from '@shared/utils'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'expo-router'
import { Image, Text, View } from 'react-native'

interface CameraPreviewProps {
  uri: string
}

export default function CameraPreviewScreen({ uri }: CameraPreviewProps) {
  const { uploadDocument, isPending, isError } = useUploadDocument()
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
          router.dismiss(1)
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
      <View className="gap-4 p-4">
        {isError && <Text className="text-red-500">Ocorreu um erro ao enviar arquivo</Text>}
        <Button
          isLoading={isPending}
          disabled={isPending}
          onPress={onUpload}
          title="Fazer upload"
        />
        <Button disabled={isPending} onPress={onRedone} title="Refazer" />
      </View>
    </View>
  )
}
