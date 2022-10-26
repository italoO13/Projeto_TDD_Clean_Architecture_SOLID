import { HttpPostClient } from '../protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response'
import { AuthenticationParamns } from '@/domain/usecases/authentication'
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient) {}

  private validateStatusCode (response: HttpResponse): void {
    switch (response.statusCode) {
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
    }
  }

  async auth (paramns: AuthenticationParamns): Promise<void> {
    const result = await this.httpPostClient.post({ url: this.url, body: paramns })
    this.validateStatusCode(result)
    return Promise.resolve()
  }
}
