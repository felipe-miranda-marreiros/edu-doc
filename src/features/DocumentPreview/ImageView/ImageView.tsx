import { ImageZoom } from '@likashefqet/react-native-image-zoom'
import * as FileSystem from 'expo-file-system'
import { useEffect, useState } from 'react'

export function ImageViewer() {
  const [htmlUri, setHtmlUri] = useState<string | null>(null)

  useEffect(() => {
    const loadHtml = async () => {
      const filePath = FileSystem.documentDirectory + 'boletim_escolar.png'

      const fileInfo = await FileSystem.getInfoAsync(filePath)
      if (fileInfo.exists) {
        setHtmlUri('file://' + fileInfo.uri.replace('file://', ''))
      } else {
        console.warn('HTML não encontrado.')
      }
    }

    loadHtml()
  }, [])

  if (!htmlUri) {
    return null
  }

  return <ImageZoom source={{ uri: htmlUri }} height={400} width={400} />
}
