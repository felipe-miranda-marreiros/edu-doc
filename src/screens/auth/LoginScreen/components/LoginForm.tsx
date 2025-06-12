import { SignIn } from '@entities/SignIn'
import { useAuth } from '@features/Auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, FormInput } from '@shared/components'
import { useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'
import { KeyboardAvoidingView, Platform, Text } from 'react-native'
import { useSignInApi } from '../api/useSignInApi'
import { loginSchema } from './LoginSchema'

export function LoginForm() {
  const { signIn, isPending } = useSignInApi()
  const { saveCredentials } = useAuth()
  const router = useRouter()
  const form = useForm({
    defaultValues: {
      enrollment: '1256487',
      password: 'test123456'
    },
    resolver: zodResolver(loginSchema)
  })

  function onSubmit(data: SignIn) {
    signIn(
      { enrollment: data.enrollment, password: data.password },
      {
        onSuccess: (res) => {
          saveCredentials(res)
          router.navigate('/private/doc/doc-options')
        },
        onError: (err) => {
          console.log('error', err.cause)
        }
      }
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="self-stretch px-4 gap-6"
    >
      <Text>Entre para continuar</Text>
      <FormInput placeholder="Digite sua matricula" control={form.control} name="enrollment" />
      <FormInput
        secureTextEntry
        placeholder="Digite sua senha"
        control={form.control}
        name="password"
      />
      <Button
        isLoading={isPending}
        disabled={isPending}
        onPress={form.handleSubmit(onSubmit)}
        title="Fazer login"
      />
    </KeyboardAvoidingView>
  )
}
