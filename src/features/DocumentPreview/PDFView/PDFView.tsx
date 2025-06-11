import { View } from 'react-native'
import PdfRendererView from 'react-native-pdf-renderer'

interface PDFViewProps {
  source: string
}

export function PDFView({ source }: PDFViewProps) {
  return (
    <View className="flex-1 h-[500px]">
      <PdfRendererView style={{ flex: 1 }} source={source} maxZoom={3} />
    </View>
  )
}
