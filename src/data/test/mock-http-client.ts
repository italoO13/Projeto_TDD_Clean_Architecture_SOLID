import { HttpPostClient, ParamnsRequestPost } from '../usecases/protocols/http/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  async post (paramns: ParamnsRequestPost): Promise<void> {
    this.url = paramns.url
    return Promise.resolve()
  }
}
