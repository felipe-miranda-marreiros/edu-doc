import { UploadedCatetoryAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import { Button, Text, View } from 'react-native'
import { BaseStepProps } from '../UploadFileStepper'

const options: UploadedCatetoryAPI[] = ['atestado', 'justificativa', 'requerimento']

export function UploadFileOptions({ onNextTab }: BaseStepProps) {
  return (
    <View className="gap-4 pb-4">
      <Text className="text-xl mb-4">Escolha uma categoria:</Text>
      <View className="gap-4 pb-4">
        {options.map((item) => {
          return <Button onPress={() => onNextTab({ category: item })} key={item} title={item} />
        })}
      </View>
    </View>
  )
}
