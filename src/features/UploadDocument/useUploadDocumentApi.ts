import { client } from '@/src/shared/api/Client'
import { useMutation } from '@tanstack/react-query'

interface UploadDocumentParams {
  formData: FormData
}

async function uploadDocument(params: UploadDocumentParams): Promise<void> {
  await client.post('/student/documents/upload', params)
}

export function useUploadDocument() {
  const mutation = useMutation({
    mutationFn: uploadDocument
  })

  return {
    uploadDocument: mutation.mutate,
    ...mutation
  }
}
