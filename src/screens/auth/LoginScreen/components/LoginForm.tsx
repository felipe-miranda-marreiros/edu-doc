import { Login } from '@/src/entities/login/Login'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Button, Text, TextInput, View } from 'react-native'
import { loginSchema } from './LoginSchema'

export function LoginForm() {
  const form = useForm({
    defaultValues: {
      enrollmentId: '5bd95f9d-7c52-4831-ae1e-577d2961b7a7',
      password: 'test123456'
    },
    resolver: zodResolver(loginSchema)
  })

  function onSubmit(data: Login) {
    console.log(data)
  }

  return (
    <View className="self-stretch px-4 gap-6">
      <Text>Entre para continuar</Text>
      <Controller
        control={form.control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Insira sua matrícula"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="enrollmentId"
      />
      {form.formState.errors.enrollmentId && (
        <Text>{form.formState.errors.enrollmentId.message}</Text>
      )}
      <Controller
        control={form.control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Insira sua senha"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {form.formState.errors.password && <Text>{form.formState.errors.password.message}</Text>}
      <Button onPress={form.handleSubmit(onSubmit)} title="Fazer login" />
    </View>
  )
}
