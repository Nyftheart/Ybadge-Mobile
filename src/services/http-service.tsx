import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ybadges-back.rpn726hhrj.workers.dev/',
  transformResponse: [
    (response) => {
      const data = JSON.parse(response)

      return data?.data || data
    },
  ],
})

export default class HttpService {
  public get(url: string, options?: any) {
    return instance.get(url, options)
  }

  public post(url: string, data: any, options?: any) {
    return instance.post(url, data, options)
  }

  public put(url: string, data: any, options?: any) {
    return instance.put(url, data, options)
  }

  public delete(url: string, options?: any) {
    return instance.delete(url, options)
  }
}
