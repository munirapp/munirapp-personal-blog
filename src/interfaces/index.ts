interface AstroPaginateOptions {
  params?: {
    [key: string]: string | number
  }
  pageSize?: number
}

interface AstroPaginateResult {
  data: [any]
  start: number
  end: number
  size: number
  total: number
  currentPage: number
}

type AstroPaginate = (data?: any[], options?: AstroPaginateOptions) => AstroPaginateResult

export interface AstroGetStaticPathsParams {
  paginate?: AstroPaginate
}

export interface Posts {
  title: string
  slug: string
  description: string
  cover?: string
  date?: string
}
