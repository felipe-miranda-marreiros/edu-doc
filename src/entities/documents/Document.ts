export interface Document {
  id: string
  title: string
  type: 'pdf' | 'docx' | 'html' | 'image'
  category: 'historico' | 'boletim' | 'declaracao' | 'comunicado'
  url: string
  date: string
  size: string
}
