import { HttpPostClient } from '../protocols/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '../protocols/http/http-response'
import { AuthenticationParamns } from '@/domain/usecases/authentication'
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'
import { UnexpectedError } from '../../../domain/errors/unexpected-error'
import { AccountModel } from '../../../domain/models/account-model'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParamns, AccountModel >) {}

  private validateStatusCode (response: HttpResponse<AccountModel>): void {
    switch (response.statusCode) {
      case HttpStatusCode.ok: break
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
      case HttpStatusCode.badRequest: throw new UnexpectedError()
      default: throw new UnexpectedError()
    }
  }

  async auth (paramns: AuthenticationParamns): Promise<void> {
    const result = await this.httpPostClient.post({ url: this.url, body: paramns })
    this.validateStatusCode(result)
    return Promise.resolve()
  }
}
