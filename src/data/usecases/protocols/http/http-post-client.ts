import { HttpResponse } from './http-response'

export type ParamnsRequestPost = {
  url: string
  body?: any
}

export interface HttpPostClient {
  post(paramns: ParamnsRequestPost): Promise<HttpResponse>
}
