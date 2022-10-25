import { HttpPostClient, ParamnsRequestPost } from '../usecases/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: string;
  async post (paramns: ParamnsRequestPost): Promise<void> {
    this.url = paramns.url
    this.body = paramns.body
    return Promise.resolve()
  }
}
