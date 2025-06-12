import { useBottomSheetService } from '@shared/components'
import { Button } from 'react-native'
import { UploadFileStepper } from './UploadFileStepper/UploadFileStepper'

export function UploadFileButton() {
  const { onOpen } = useBottomSheetService()

  function onPress() {
    onOpen({
      Component: <UploadFileStepper />,
      snapPoints: ['35%']
    })
  }

  return <Button onPress={onPress} title="Enviar um novo arquivo" />
}
