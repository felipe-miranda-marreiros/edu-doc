export interface UploadedDocumentAPI {
  id: string
  title: string
  category: UploadedCatetoryAPI
  status: UploadedStatusAPI
  uploadDate: string
  file: File
}

export type UploadedCatetoryAPI = 'atestado' | 'justificativa' | 'requerimento'

export type UploadedStatusAPI = 'enviado' | 'em_analise' | 'aprovado' | 'rejeitado'
