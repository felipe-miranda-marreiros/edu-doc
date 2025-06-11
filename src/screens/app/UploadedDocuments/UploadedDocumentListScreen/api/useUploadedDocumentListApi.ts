import { UploadedDocumentAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import { client } from '@/src/shared/api/Client'
import { useQuery } from '@tanstack/react-query'

async function uploadedDocumentList(): Promise<UploadedDocumentAPI[]> {
  const response = await client.get<UploadedDocumentAPI[]>('/student/documents/uploaded')
  return response.data
}

export function useUploadedDocumentList() {
  const query = useQuery({
    queryKey: ['UPLOAD_DOCUMENT_LIST'],
    queryFn: uploadedDocumentList
  })

  return {
    uploadedList: query.data,
    ...query
  }
}
