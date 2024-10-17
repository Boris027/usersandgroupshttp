import { RawPersonFromApi } from "./RawPersonfromApi-model"

export interface PaginatedFromApi{
  first: number
  prev: any
  next: number
  last: number
  pages: number
  items: number
  data: RawPersonFromApi[]
}