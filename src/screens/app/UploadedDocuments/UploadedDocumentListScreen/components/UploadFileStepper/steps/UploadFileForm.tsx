import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Button, Text, View } from 'react-native'
import { z } from 'zod'
import { BaseStepProps } from '../UploadFileStepper'

const uploadFormSchema = z.object({
  title: z.string().trim().nonempty({ message: 'Campo obrigatório' })
})

export function UploadFileForm({ onNextTab }: BaseStepProps) {
  const form = useForm({
    defaultValues: {
      title: ''
    },
    resolver: zodResolver(uploadFormSchema)
  })

  function onSubmit(data: z.infer<typeof uploadFormSchema>) {
    onNextTab({ title: data.title })
  }

  return (
    <View className="flex-1 justify-between h-[300px]">
      <View className="flex-1">
        <Text className="text-xl mb-4">Como deseja chamar este arquivo?</Text>
        <Controller
          control={form.control}
          render={({ field: { onChange, onBlur, value } }) => (
            <BottomSheetTextInput
              placeholder="Insira um titulo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="border rounded-lg w-full"
            />
          )}
          name="title"
        />
      </View>
      <View className="flex-1">
        <Button title="Avançar" onPress={form.handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}
