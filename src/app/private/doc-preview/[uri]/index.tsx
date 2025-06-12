import DocumentPreviewScreen from '@screens/app/DocumentPreviewScreen/DocumentPreviewScreen'
import { useLocalSearchParams } from 'expo-router'

export default function DocPreview() {
  const { uri } = useLocalSearchParams<{ uri: string }>()
  return <DocumentPreviewScreen uri={uri} />
}
