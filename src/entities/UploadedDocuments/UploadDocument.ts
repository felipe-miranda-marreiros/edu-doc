import { File } from '../Documents/File'

export interface UploadedDocumentAPI {
  id: string
  title: string
  category: UploadedCatetoryAPI
  status: UploadedStatusAPI
  uploadDate: string
  file: File
}

export interface UploadedDocument {
  id: string
  title: string
  category: UploadedCatetoryAPI
  status: UploadedStatusAPI
  uploadDate: string
  file: string
}

export type UploadedCatetoryAPI = 'atestado' | 'justificativa' | 'requerimento'

export type UploadedStatusAPI = 'enviado' | 'em_analise' | 'aprovado' | 'rejeitado'
