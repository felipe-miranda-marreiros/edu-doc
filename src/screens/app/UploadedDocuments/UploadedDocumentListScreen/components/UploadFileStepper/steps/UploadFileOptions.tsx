import { UploadedCatetoryAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import { useUploadActions } from '@/src/features/UploadDocument/useUploadStore'
import { Button, Text, View } from 'react-native'
import { BaseStepProps } from '../UploadFileStepper'

const options: UploadedCatetoryAPI[] = ['atestado', 'justificativa', 'requerimento']

export function UploadFileOptions({ onNextStep: onNextTab }: BaseStepProps) {
  const { setCategory } = useUploadActions()

  function onPress(category: UploadedCatetoryAPI) {
    setCategory(category)
    onNextTab()
  }

  return (
    <View className="gap-4 pb-4">
      <Text className="text-xl mb-4">Escolha uma categoria:</Text>
      <View className="gap-4 pb-4">
        {options.map((category) => {
          return <Button onPress={() => onPress(category)} key={category} title={category} />
        })}
      </View>
    </View>
  )
}
