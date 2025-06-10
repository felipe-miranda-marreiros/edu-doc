import { DocumentAPI } from '@/src/entities/Documents/Document'
import { client } from '@/src/shared/api/Client'
import { useQuery } from '@tanstack/react-query'

async function documentList(): Promise<DocumentAPI[]> {
  const response = await client.get<DocumentAPI[]>('/student/documents')
  return response.data
}

export function useDocumentList() {
  const query = useQuery({
    queryKey: ['DOCUMENT_LIST'],
    queryFn: documentList
  })

  return {
    docList: query.data,
    ...query
  }
}
