import { HttpPostClient, HttpResponse, HttpStatusCode } from '../protocols/http'
import { Authentication, AuthenticationParamns } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '../../../domain/errors'
import { AccountModel } from '../../../domain/models'

export class RemoteAuthentication implements Authentication {
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

  async auth (paramns: AuthenticationParamns): Promise<AccountModel> {
    const result = await this.httpPostClient.post({ url: this.url, body: paramns })
    this.validateStatusCode(result)
    return result.body
  }
}
