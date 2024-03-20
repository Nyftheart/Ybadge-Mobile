import HttpService from './http-service'

const _httpService = new HttpService()

export const ApiService = {
  login(data: any) {
    return _httpService.post('/login', data)
  },
  register(data: any) {
    return _httpService.post('/register', data)
  },
  getBadges(options?) {
    return _httpService.get('/badges/all', options)
  },
  getBadgeById(id: number) {
    return _httpService.get(`/badges/${id}`)
  },
  createBadge(data: any) {
    return _httpService.post('/badges', data)
  },
  deleteBadge(id: number) {
    return _httpService.delete(`/badges/delete`, {
      headers: {
        idBadge: id,
      },
    })
  },
}
