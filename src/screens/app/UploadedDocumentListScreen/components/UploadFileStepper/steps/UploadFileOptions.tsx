import { UploadedCatetoryAPI } from '@entities/UploadedDocuments'
import { useUploadActions } from '@features/UploadDocument'
import { Button } from '@shared/components'
import { dataMock } from '@shared/mocks/DataMock'
import { Text, View } from 'react-native'
import { BaseStepProps } from '../UploadFileStepper'

interface Option {
  option: UploadedCatetoryAPI
  label: string
}

const options: Option[] = [
  {
    label: dataMock.documentCategories.upload.atestado,
    option: 'atestado'
  },
  {
    label: dataMock.documentCategories.upload.justificativa,
    option: 'justificativa'
  },
  {
    label: dataMock.documentCategories.upload.requerimento,
    option: 'requerimento'
  },
  {
    label: dataMock.documentCategories.upload.outros,
    option: 'outros'
  }
]

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
          return (
            <Button
              onPress={() => onPress(category.option)}
              key={category.label}
              title={category.label}
            />
          )
        })}
      </View>
    </View>
  )
}
