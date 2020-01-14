import PostService from './post/PostService'
import { Http } from '@/http-utils/Http'

export default {
  post: new PostService(Http)
}