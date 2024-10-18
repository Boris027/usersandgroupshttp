import { Inject, Injectable } from '@angular/core';
import { IBaseHttp } from '../interfaces/base-http.interface';
import { Model } from '../../models/Base-model.interface';
import { Observable } from 'rxjs';
import { RESOURCENAMETOKEN, URLTOKEN } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { PaginatedFromApi } from '../../models/PaginatedfromApi-model.interface';
import { RawPersonFromApi } from '../../models/RawPersonfromApi-model';
import { Paginated } from '../../models/Paginates-model';
import { Mapping } from './People-Mapping.service';
import { IMaping } from '../../models/Map-model.interface';
import { Person } from '../../models/Person-model.interface';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpRepository<T extends Model> implements IBaseHttp<T> {

  constructor(
    @Inject (URLTOKEN) protected urltoken:string,
    @Inject (RESOURCENAMETOKEN) protected resourcenametoken:string,
    protected httpclient:HttpClient,
    @Inject (Mapping) protected mapping:IMaping<Person>
  ) { }


  getall(page: number, pageSize: number): Observable<Paginated<T>> {
    throw new Error('Method not implemented.');
  }

  
  
  getOne(id: string): Observable<T | null> {
    throw new Error('Method not implemented.');
  }
  create(value: T): Observable<T> {
    console.log("create")
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<T | null> {
    throw new Error('Method not implemented.');
  }
  update(id: string, value: T): Observable<T | null> {
    throw new Error('Method not implemented.');
  }
}
