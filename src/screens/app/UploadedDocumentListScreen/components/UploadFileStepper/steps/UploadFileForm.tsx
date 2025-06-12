import { useUploadActions } from '@features/UploadDocument'
import { zodResolver } from '@hookform/resolvers/zod'
import { BottomSheetTextInput, Button } from '@shared/components'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { z } from 'zod'
import { BaseStepProps } from '../UploadFileStepper'

const uploadFormSchema = z.object({
  title: z.string().trim().nonempty({ message: 'Campo obrigatório' })
})

export function UploadFileForm({ onNextStep: onNextTab }: BaseStepProps) {
  const { setTitle } = useUploadActions()
  const form = useForm({
    defaultValues: {
      title: ''
    },
    resolver: zodResolver(uploadFormSchema)
  })

  function onSubmit(data: z.infer<typeof uploadFormSchema>) {
    setTitle(data.title)
    onNextTab()
  }

  return (
    <View className="flex-1">
      <View className="flex-2 mt-2">
        <Text className="text-xl mb-4">Como deseja chamar este arquivo?</Text>
        <BottomSheetTextInput placeholder="Digite um titulo" control={form.control} name="title" />
      </View>
      <View className="mt-auto mb-5">
        <Button title="Avançar" onPress={form.handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}
