import { HttpResponse } from '.'

export type ParamnsRequestPost<P> = {
  url: string
  body?: P
}

export interface HttpPostClient<P, R> {
  post(paramns: ParamnsRequestPost<P>): Promise<HttpResponse<R>>
}
