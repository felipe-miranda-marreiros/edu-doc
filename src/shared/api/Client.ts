import axios from 'axios'

export const BASE_URL = 'http://edu-doc/api'

export const client = axios.create({
  baseURL: BASE_URL
})

// interface InterceptorProps {
//   authCredentials: Credentials | null
//   saveCredentials: (credentials: Credentials) => Promise<void>
//   removeCredentials: () => Promise<void>
// }

// export function registerInterceptor({
//   authCredentials,
//   removeCredentials,
//   saveCredentials
// }: InterceptorProps) {
//   const interceptor = api.interceptors.response.use(
//     (response) => response,
//     async (responseError) => {
//       const faliedRequest = responseError.config
//       const isRefreshTokenUrl = authService.isRefreshTokenRequest(faliedRequest)

//       if (responseError.response.status === 401) {
//         if (!authCredentials?.refreshToken || isRefreshTokenUrl || faliedRequest._sent) {
//           removeCredentials()
//           return Promise.reject(responseError)
//         }

//         faliedRequest._sent = true

//         const newAuthCredentials = await authService.authenticateByRefreshToken(
//           authCredentials.refreshToken
//         )
//         saveCredentials(newAuthCredentials)

//         faliedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`
//         return api(faliedRequest)
//       }
//       return Promise.reject(responseError)
//     }
//   )

//   return () => api.interceptors.response.eject(interceptor)
// }
