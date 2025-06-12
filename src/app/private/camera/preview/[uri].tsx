import CameraPreviewScreen from '@screens/app/CameraScreen/screen/CameraPreviewScreen'
import { useLocalSearchParams } from 'expo-router'

export default function CameraPreview() {
  const { uri } = useLocalSearchParams<{ uri: string }>()
  return <CameraPreviewScreen uri={uri} />
}
