import { HttpPostClient } from '../protocols/http/http-post-client'
import { AuthenticationParamns } from '@/domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient) {}

  async auth (paramns: AuthenticationParamns): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: paramns })
    return Promise.resolve()
  }
}
