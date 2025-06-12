import { BottomSheetTextInput as BTNSheetTextInput } from '@gorhom/bottom-sheet'
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { Text, TextInputProps, View } from 'react-native'

export function BottomSheetTextInput<TForm extends FieldValues>({
  control,
  rules,
  name,
  ...rest
}: TextInputProps & UseControllerProps<TForm>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <View>
          <BTNSheetTextInput
            className="border rounded-lg pl-4 h-16"
            value={field.value}
            onChangeText={field.onChange}
            {...rest}
          />
          {fieldState.error?.message && (
            <Text className="text-red-500">{fieldState.error.message}</Text>
          )}
        </View>
      )}
    />
  )
}
