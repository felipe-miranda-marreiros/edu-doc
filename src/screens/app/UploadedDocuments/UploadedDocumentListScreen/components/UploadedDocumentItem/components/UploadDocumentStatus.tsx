import { UploadedStatusAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import { dataMock } from '@/src/shared/mocks/DataMock'
import { cn } from '@/src/shared/utils/cn'
import { Text, View } from 'react-native'

interface UploadDocumentStatusProps {
  status: UploadedStatusAPI
}

export function UploadDocumentStatus({ status }: UploadDocumentStatusProps) {
  let currentStatus = 'Em análise'
  let colorStatus = 'bg-sent'

  switch (status) {
    case 'aprovado':
      currentStatus = dataMock.statusConfig.labels.aprovado
      colorStatus = 'bg-approved'
      break
    case 'em_analise':
      currentStatus = dataMock.statusConfig.labels.em_analise
      colorStatus = 'bg-analysis'
      break
    case 'enviado':
      currentStatus = dataMock.statusConfig.labels.enviado
      colorStatus = 'bg-sent'
      break
    case 'rejeitado':
      currentStatus = dataMock.statusConfig.labels.rejeitado
      colorStatus = 'bg-rejected'
      break
    default:
      currentStatus = dataMock.statusConfig.labels.em_analise
      break
  }

  return (
    <View className={cn(colorStatus, 'self-end p-1 rounded-lg')}>
      <Text className="text-white">{currentStatus}</Text>
    </View>
  )
}
