import { useBottomSheetService } from '@/src/shared/components/BottomSheet/BottomSheetStore'
import { useRouter } from 'expo-router'
import { Button, Text, View } from 'react-native'
import { BaseStepProps } from '../UploadFileStepper'

export type UploadFileMethods = 'camera' | 'gallery'

export function UploadFileMethod({ onNextTab }: BaseStepProps) {
  const router = useRouter()
  const { onReset } = useBottomSheetService()

  function onPress(method: UploadFileMethods) {
    if (method === 'camera') {
      router.navigate('/private/camera')
    }
    onNextTab({ method })
    onReset()
  }

  return (
    <View className="py-7">
      <Text className="text-xl mb-4">Como deseja enviar?</Text>
      <View className="gap-4">
        <Button onPress={() => onPress('camera')} title="Câmera" />
        <Button onPress={() => onPress('gallery')} title="Escolhar na galeria" />
      </View>
    </View>
  )
}
