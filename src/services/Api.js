import { ResponseService } from './ResponseService'
export default class API {
  constructor(api, http) {
    this.api = api
    this.http = http
  }
  list = async () => {
    try {
      const response = await this.http.get(this.api)
      return response.data
    } catch (error) {
      throw ResponseService(error, 'list')
    }
  }
  show = async ($id) => {
    try {
      const response = await this.http.get(`${this.api}/${$id}`)
      return response.data
    } catch (error) {
      throw ResponseService(error, 'get', 'item')
    }
  }

  create = async ($data) => {
    try {
      const response = await this.http.post(this.api, $data)
      return response.data
    } catch (error) {
      throw ResponseService(error, 'create')
    }
  }

  update = async($data) => {
    try {
      const response = await this.http.put(`${this.api}/${$data.id}`, $data)
      return response.data
    } catch (error) {
      throw ResponseService(error, 'update')
    }
  }

  remove = async($id) => {
    try {
      const response = await this.http.delete(`${this.api}/${$id}`)
      return response.data
    } catch (error) {
      throw ResponseService(error, 'remove')
    }
  }
}
