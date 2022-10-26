import { HttpPostClient, ParamnsRequestPost } from '../usecases/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '../usecases/protocols/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: string;
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async post (paramns: ParamnsRequestPost): Promise<HttpResponse> {
    this.url = paramns.url
    this.body = paramns.body
    return Promise.resolve(this.response)
  }
}
