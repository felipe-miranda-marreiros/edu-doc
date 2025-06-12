import { UploadedDocument } from '@entities/UploadedDocuments'
import { client } from '@shared/api'
import { CacheKeys } from '@shared/cache'
import { useQuery } from '@tanstack/react-query'

async function uploadedDocumentList(): Promise<UploadedDocument[]> {
  const response = await client.get<UploadedDocument[]>('/student/documents/uploaded')
  return response.data
}

export function useUploadedDocumentList() {
  const query = useQuery({
    queryKey: [CacheKeys.UPLOAD_DOCUMENT_LIST],
    queryFn: uploadedDocumentList
  })

  return {
    uploadedList: query.data,
    ...query
  }
}
