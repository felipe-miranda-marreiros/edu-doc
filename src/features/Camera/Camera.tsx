import { CameraView } from 'expo-camera'
import { useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

interface CameraProps {
  onTakePicture(uri: string): void
}

export function Camera({ onTakePicture }: CameraProps) {
  const cameraRef = useRef<CameraView | null>(null)

  async function onTakePictureAsync() {
    const picture = await cameraRef.current?.takePictureAsync()
    if (picture) {
      cameraRef.current?.stopRecording()
      await cameraRef.current?.pausePreview()
      onTakePicture(picture.uri)
    }
  }

  return (
    <CameraView ref={cameraRef} style={styles.camera} facing={'back'}>
      <View className="flex-1 flex-row mb-[64px] self-center items-center">
        <TouchableOpacity onPress={onTakePictureAsync} className="self-end">
          <View className="h-[60px] w-[60px] bg-white rounded-full" />
        </TouchableOpacity>
      </View>
    </CameraView>
  )
}

const styles = StyleSheet.create({
  camera: {
    flex: 1
  }
})
