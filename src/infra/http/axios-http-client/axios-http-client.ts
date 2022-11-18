import { ParamnsRequestPost } from '@/data/usecases/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: ParamnsRequestPost<any>): Promise<void> {
    await axios.post(params.url, params.body)
  }
}
