export type ParamnsRequestPost = {
  url: string
}

export interface HttpPostClient {
  post(paramns: ParamnsRequestPost): Promise<void>
}
