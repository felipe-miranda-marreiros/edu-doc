import * as FileSystem from 'expo-file-system'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import PdfRendererView from 'react-native-pdf-renderer'

interface PDFViewProps {
  source: string
}

export function PDFView({ source }: PDFViewProps) {
  const [pdfUri, setPdfUri] = useState<string | null>(null)

  useEffect(() => {
    const loadPdf = async () => {
      const fileName = 'declaracao_matricula.pdf' // nome do arquivo salvo
      const uri = FileSystem.documentDirectory + fileName

      // Verifica se existe
      const info = await FileSystem.getInfoAsync(uri)
      if (info.exists) {
        setPdfUri(uri)
      } else {
        console.log('PDF não encontrado localmente.')
      }
    }

    loadPdf()
  }, [])

  console.log(pdfUri)

  if (!pdfUri) return null

  return (
    <View className="flex-1 h-[500px]">
      <PdfRendererView
        style={{ flex: 1 }}
        source={pdfUri}
        maxZoom={3}
        onPageChange={(current, total) => {
          console.log(current, total)
        }}
      />
    </View>
  )
}
