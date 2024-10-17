import { Inject, Injectable } from '@angular/core';
import { Model } from '../../models/Base-model.interface';
import { Observable } from 'rxjs';
import { IBaseService } from '../interfaces/Base.interface';
import { IBaseHttp } from '../../repositories/interfaces/base-http.interface';
import { BASEREPOSITORY } from '../../repositories/tokens';
import { Paginated } from '../../models/Paginates-model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends Model> implements IBaseService<T> {

  constructor(
    @Inject (BASEREPOSITORY) private _repositorio:IBaseHttp<T>
  ) {
    console.log("Base repository usado")
   }


    getall(page: number, pageSize: number): Observable<Paginated<T>> {
      return this._repositorio.getall(page,pageSize)
    }

    getOne(id: string): Observable<T | null> {
        return this._repositorio.getOne(id)
    }
    create(value: T): Observable<T> {
        return this._repositorio.create(value)
    }
    delete(id: string): Observable<T | null> {
        return this._repositorio.delete(id)
    }
    update(id: string, value: T): Observable<T | null> {
       return this._repositorio.update(id,value)
    }

  
}
