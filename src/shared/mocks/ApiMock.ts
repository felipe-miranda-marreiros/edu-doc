import { Credentials } from '@/src/entities/Auth/Auth'
import { createServer } from 'miragejs'
import { BASE_URL } from '../api/Client'

//@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
if (window.server) {
  //@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
  server.shutdown()
}

//@ts-expect-error Podemos criar um global.d.ts e incluir a tipagem do MirageJs
window.server = createServer({
  timing: 5000,
  routes() {
    this.post<Credentials>(BASE_URL + '/login', () => {
      return {
        enrollment: 'dawdawd',
        jwt: 'adasdasd'
      }
    })
  }
})
