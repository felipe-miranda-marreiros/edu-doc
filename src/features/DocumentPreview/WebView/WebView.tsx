import { StyleSheet } from 'react-native'
import { WebView as RNWebView } from 'react-native-webview'

interface WebViewerProps {
  source: string
}

export function Webview({ source }: WebViewerProps) {
  return (
    <RNWebView
      allowFileAccess
      startInLoadingState
      style={styles.container}
      source={{ uri: source }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
