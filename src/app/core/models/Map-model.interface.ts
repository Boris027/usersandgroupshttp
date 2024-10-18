import { Observable } from "rxjs"
import { PaginatedFromApi } from "./PaginatedfromApi-model.interface"
import { Paginated } from "./Paginates-model"
import { RawPersonFromApi } from "./RawPersonfromApi-model"

export interface IMaping<T>{
    getall(page:number, pageSize: number, pages:number,data:RawPersonFromApi[]):Paginated<T>
    getOne(value:RawPersonFromApi):T
    create(value:T):Observable<T>
    delete(id:string):Observable<T|null>
    update(id:string,value:T):Observable<T|null>
}