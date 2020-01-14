import Api from '@/services/Api'

export default class PostService extends Api {
  constructor (http) {
    super('/posts', http)
  }
}
