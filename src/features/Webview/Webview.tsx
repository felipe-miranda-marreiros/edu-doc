import * as FileSystem from 'expo-file-system'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { WebView as RNWebView } from 'react-native-webview'

export function Webview() {
  const [htmlUri, setHtmlUri] = useState<string | null>(null)

  useEffect(() => {
    const loadHtml = async () => {
      const filePath = FileSystem.documentDirectory + 'comunicado.html'

      const fileInfo = await FileSystem.getInfoAsync(filePath)
      if (fileInfo.exists) {
        // Para WebView funcionar corretamente com arquivo local, prefixe com "file://"
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

  return (
    <RNWebView
      allowFileAccess
      startInLoadingState
      style={styles.container}
      source={{ uri: htmlUri }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
