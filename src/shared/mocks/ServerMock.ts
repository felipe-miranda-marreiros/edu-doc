import { Credentials } from '@entities/Auth'
import { SignIn } from '@entities/SignIn'
import { UploadedDocumentAPI } from '@entities/UploadedDocuments'
import { createServer } from 'miragejs'
import { BASE_URL } from '../api/Client'
import { randomString } from '../utils/randomString'
import { dataMock } from './DataMock'

//@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
if (window.server) {
  //@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
  server.shutdown()
}

const uploadedDocuments: UploadedDocumentAPI[] = []

//@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
window.server = createServer({
  timing: 2000,
  routes() {
    this.post<Credentials>(BASE_URL + '/login', (schema, request) => {
      const login: SignIn = JSON.parse(request.requestBody)
      return {
        enrollment: login.enrollment,
        jwt: randomString(10)
      }
    })
    this.get(BASE_URL + '/student/documents', () => {
      return dataMock.availableDocuments
    })
    this.get(BASE_URL + '/student/documents/uploaded', () => {
      return uploadedDocuments
    })
    this.post<UploadedDocumentAPI[]>(BASE_URL + '/student/documents/upload', (schema, request) => {
      const formData: UploadedDocumentAPI = JSON.parse(request.requestBody)
      const file: UploadedDocumentAPI = {
        category: formData.category,
        file: formData.file,
        title: formData.title,
        id: String(uploadedDocuments.length + 1),
        status: formData.status ?? 'enviado',
        uploadDate: new Date().toISOString()
      }
      uploadedDocuments.push(file)
      return uploadedDocuments
    })
  }
})
