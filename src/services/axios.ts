import axios, { AxiosError } from 'axios'

export const privateAxios = (headerToken: string) => {
  return axios.create({
    baseURL: import.meta.env.API_URL,
    headers: {
      "Authorization": `Bearer ${headerToken}`,
    },
  })
}
export const publicAxios = axios.create({
  baseURL: import.meta.env.API_URL,
})

export { AxiosError }