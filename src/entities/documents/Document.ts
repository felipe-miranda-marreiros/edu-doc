export interface DocumentAPI {
  id: string
  title: string
  type: 'pdf' | 'docx' | 'html' | 'image'
  category: 'historico' | 'boletim' | 'declaracao' | 'comunicado'
  url: string
  date: string
  size: string
  pages: number
  description: string
}
