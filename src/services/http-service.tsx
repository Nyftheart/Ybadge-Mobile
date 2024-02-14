import axios from 'axios'

const httpService = axios.create({
  baseURL: 'https://ybadges-back.theo77186.workers.dev',
  timeout: 20000,
})

export default httpService
