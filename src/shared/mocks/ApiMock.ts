import { Credentials } from '@/src/entities/Auth/Auth'
import { UploadedDocumentAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import { createServer } from 'miragejs'
import { BASE_URL } from '../api/Client'
import { dataMock } from './DataMock'

//@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
if (window.server) {
  //@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
  server.shutdown()
}

//@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
window.server = createServer({
  timing: 2000,
  routes() {
    this.post<Credentials>(BASE_URL + '/login', () => {
      return {
        enrollment: 'dawdawd',
        jwt: 'adasdasd'
      }
    })
    this.get(BASE_URL + '/student/documents', () => {
      return dataMock.availableDocuments
    })
    this.get(BASE_URL + '/student/documents/uploaded', () => {
      return dataMock.uploadedDocuments
    })
    this.post<UploadedDocumentAPI[]>(BASE_URL + '/student/documents/upload', (schema, request) => {
      console.log('Upload', JSON.parse(request.requestBody))
      return dataMock.uploadedDocuments
    })
  }
})
