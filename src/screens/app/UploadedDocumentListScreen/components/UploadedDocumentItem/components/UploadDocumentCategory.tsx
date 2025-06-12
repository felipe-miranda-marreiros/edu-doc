import { UploadedCatetoryAPI } from '@entities/UploadedDocuments'
import { dataMock } from '@shared/mocks/DataMock'
import { Text, View } from 'react-native'

interface UploadDocumentCategoryProps {
  category: UploadedCatetoryAPI
}

export function UploadDocumentCategory({ category }: UploadDocumentCategoryProps) {
  let icon = dataMock.statusConfig.icons.atestado

  switch (category) {
    case 'atestado':
      icon = dataMock.statusConfig.icons.atestado
      break
    case 'justificativa':
      icon = dataMock.statusConfig.icons.justificativa
      break
    case 'requerimento':
      icon = dataMock.statusConfig.icons.requerimento
      break
    default:
      break
  }

  return (
    <View className="flex-row items-center">
      <Text>{category.toUpperCase()}</Text>
      <Text> {icon}</Text>
    </View>
  )
}
