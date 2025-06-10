import { useBottomSheetService } from '@/src/shared/components/BottomSheet/BottomSheetStore'
import { Button } from 'react-native'
import { UploadFileStepper } from './UploadFileStepper/UploadFileStepper'

export function UploadFileButton() {
  const { onOpen } = useBottomSheetService()

  function onPress() {
    onOpen({
      Component: <UploadFileStepper />,
      snapPoints: ['50%']
    })
  }

  return <Button onPress={onPress} title="Enviar um novo arquivo" />
}
