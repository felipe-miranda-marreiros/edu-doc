export interface UploadedDocument {
  id: string
  title: string
  category: 'atestado' | 'justificativa' | 'requerimento'
  status: 'enviado' | 'em_analise' | 'aprovado' | 'rejeitado'
  uploadDate: string
  file: File
}
