import { Credentials } from '@entities/Auth'
import { SignIn } from '@entities/SignIn'
import { client } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

async function signIn(params: SignIn): Promise<Credentials> {
  const response = await client.post<Credentials>('/login', params)
  return response.data
}

export function useSignInApi() {
  const mutation = useMutation({
    mutationFn: signIn
  })

  return {
    signIn: mutation.mutate,
    ...mutation
  }
}
