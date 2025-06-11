import { ImageViewer } from '@/src/features/DocumentPreview/ImageView/ImageView'
import { PDFView } from '@/src/features/DocumentPreview/PDFView/PDFView'
import { Webview } from '@/src/features/DocumentPreview/WebView/WebView'
import { Screen } from '@/src/shared/components/Screen/Screen'
import { compressString } from '@/src/shared/utils/compressString'
import { Text, View } from 'react-native'

interface DocumentPreviewScreenProps {
  uri: string
}

export default function DocumentPreviewScreen({ uri }: DocumentPreviewScreenProps) {
  const source = compressString.decodePathFromUrlParam(uri)
  const fileName = source.substring(source.lastIndexOf('/') + 1, source.length)
  const fileType = fileName?.split('.')[1]

  if (fileType === 'pdf') {
    return <PDFView source={source} />
  }

  if (['jpg', 'png', 'jpeg'].includes(fileType)) {
    return <ImageViewer source={source} />
  }

  if (fileType === 'html') {
    return <Webview source={source} />
  }

  return (
    <Screen title="Visualizar documento">
      <View className="items-center justify-center flex-1">
        <Text className="text-xl font-semibold">Documento não é suportado pelo EduDOC.</Text>
      </View>
    </Screen>
  )
}
