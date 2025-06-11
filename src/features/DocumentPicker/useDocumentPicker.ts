import * as DocumentPicker from 'expo-document-picker'
import { useState } from 'react'

const ALLOWED_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/heif',
  'image/jfif',
  'image/avif',
  'docx',
  'pdf'
]

export function useDocumentPicker() {
  const [error, setError] = useState<string | null>(null)

  async function onPick(): Promise<string | null> {
    const files = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
      type: ALLOWED_TYPES,
      multiple: false
    })

    if (files.assets) {
      const file = files.assets[0]
      if (!ALLOWED_TYPES.includes(file.mimeType || '')) {
        setError('O arquivo que você selecionou não é suportado')
        return null
      }
      return file.uri
    }

    return null
  }

  return {
    onPick,
    error
  }
}
