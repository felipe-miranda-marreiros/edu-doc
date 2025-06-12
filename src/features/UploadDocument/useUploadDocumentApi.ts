import { client } from '@shared/api'
import { useMutation } from '@tanstack/react-query'

interface UploadDocumentParams {
  title: string
  category: string
  file: string
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
