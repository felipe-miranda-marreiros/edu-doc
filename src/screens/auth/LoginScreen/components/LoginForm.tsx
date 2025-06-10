import { SignIn } from '@/src/entities/SignIn/SignIn'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'expo-router'
import { Controller, useForm } from 'react-hook-form'
import { Button, Text, TextInput, View } from 'react-native'
import { useSignInApi } from '../api/useSignInApi'
import { loginSchema } from './LoginSchema'

export function LoginForm() {
  const { signIn, isPending } = useSignInApi()
  const router = useRouter()
  const form = useForm({
    defaultValues: {
      enrollment: '5bd95f9d-7c52-4831-ae1e-577d2961b7a7',
      password: 'test123456'
    },
    resolver: zodResolver(loginSchema)
  })

  function onSubmit(data: SignIn) {
    console.log(data)
    signIn(
      { enrollment: data.enrollment, password: data.password },
      {
        onSuccess: (res) => {
          console.log(res)
          router.navigate('/protected/document-list-option')
        },
        onError: (err) => {
          console.log('error', err.cause)
        }
      }
    )
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
        name="enrollment"
      />
      {form.formState.errors.enrollment && <Text>{form.formState.errors.enrollment.message}</Text>}
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
      <Button disabled={isPending} onPress={form.handleSubmit(onSubmit)} title="Fazer login" />
    </View>
  )
}
