import { Credentials } from '@/src/entities/Auth/Auth'
import { SignIn } from '@/src/entities/SignIn/SignIn'
import { client } from '@/src/shared/api/Client'
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
