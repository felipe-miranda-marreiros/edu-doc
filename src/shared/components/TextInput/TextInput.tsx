import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { Text, TextInput, TextInputProps, View } from 'react-native'

export function FormInput<TForm extends FieldValues>({
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
          <TextInput
            className="border rounded-lg"
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
