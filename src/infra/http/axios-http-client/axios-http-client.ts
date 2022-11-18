import { HttpPostClient, HttpResponse, ParamnsRequestPost } from '@/data/usecases/protocols/http'
import axios from 'axios'

// Adapter HttpClient
export class AxiosHttpClient implements HttpPostClient<any, HttpResponse<any>> {
  async post (params: ParamnsRequestPost<any>): Promise<HttpResponse<any>> {
    const httpResponse = await axios.post(params.url, params.body)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
