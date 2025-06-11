import { useUploadDocument } from '@/src/entities/UploadedDocuments/useUploadDocumentApi'
import { compressString } from '@/src/shared/utils/compressString'
import { useRouter } from 'expo-router'
import { Button, Image, View } from 'react-native'

interface CameraPreviewProps {
  uri: string
}

export default function CameraPreviewScreen({ uri }: CameraPreviewProps) {
  const source = compressString.decodePathFromUrlParam(uri)
  const router = useRouter()
  const { uploadDocument, isPending } = useUploadDocument()

  async function onUpload() {
    const formData = new FormData()
    const fileName = source.substring(source.lastIndexOf('/') + 1, source.length)
    const fileType = fileName?.split('.')[1]

    formData.append('file', {
      uri: source,
      name: fileName,
      type: fileType
    } as any)

    uploadDocument({ formData })
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
