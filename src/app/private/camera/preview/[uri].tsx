import CameraPreviewScreen from '@/src/screens/app/Camera/screen/CameraPreviewScreen'
import { useLocalSearchParams } from 'expo-router'

export default function CameraPreview() {
  const { uri } = useLocalSearchParams<{ uri: string }>()
  return <CameraPreviewScreen uri={uri} />
}
