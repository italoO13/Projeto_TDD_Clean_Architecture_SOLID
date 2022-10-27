import { HttpPostClient, ParamnsRequestPost } from '../usecases/protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '../usecases/protocols/http/http-response'

export class HttpPostClientSpy<P, R> implements HttpPostClient<P, R> {
  url?: string;
  body?: P;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (paramns: ParamnsRequestPost<P>): Promise<HttpResponse<R>> {
    this.url = paramns.url
    this.body = paramns.body
    return Promise.resolve(this.response)
  }
}
