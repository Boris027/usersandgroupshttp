import { Observable } from "rxjs"
import { Paginated } from "../../models/Paginates-model"

export interface IBaseService<T>{
    getall(page:number,pageSize:number):Observable<Paginated<T>>
    getOne(id:string):Observable<T | null>
    create(value:T):Observable<T>
    delete(id:string):Observable<T|null>
    update(id:string,value:T):Observable<T|null>
}