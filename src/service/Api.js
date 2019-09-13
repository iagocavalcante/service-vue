import { http } from '@/http-utils/Http'
import { ResponseService } from './ResponseService'
export default class API {
  constructor (api) {
    this.api = api
    this.http = http
  }
  list = () => {
    return new Promise((resolve, reject) => {
      http.get(this.api).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(ResponseService(err, 'list'))
      })
    })
  }
  show = ($id) => {
    return new Promise((resolve, reject) => {
      http.get(`${this.api}/${$id}`).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(ResponseService(err, 'get', 'item'))
      })
    })
  }

  create = ($data) => {
    return new Promise((resolve, reject) => {
      http.post(this.api, $data).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(ResponseService(err, 'create'))
      })
    })
  }

  update = ($data) => {
    return new Promise((resolve, reject) => {
      http.put(`${this.api}/${$data.id}`, $data).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(ResponseService(err, 'update'))
      })
    })
  }

  remove = ($id) => {
    return new Promise((resolve, reject) => {
      http.delete(`${this.api}/${$id}`).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(ResponseService(err, 'remove'))
      })
    })
  }
}
