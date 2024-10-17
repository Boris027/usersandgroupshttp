import { Inject, Injectable } from '@angular/core';
import { IBaseHttp } from '../interfaces/base-http.interface';
import { Model } from '../../models/Base-model.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { BaseHttpRepository } from './basehttp-repository.service';
import { Person } from '../../models/Person-model.interface';
import { IPersonHttp } from '../interfaces/Person-http.interface';
import { RESOURCENAMETOKEN, URLTOKEN } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { Paginated } from '../../models/Paginates-model';
import { RawPersonFromApi } from '../../models/RawPersonfromApi-model';
import { PaginatedFromApi } from '../../models/PaginatedfromApi-model.interface';
import { devolverbuenopaginated } from './map';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpRepository extends BaseHttpRepository<Person> implements IPersonHttp {

  constructor(
    @Inject (URLTOKEN) urltoken:string,
    httpclient: HttpClient,
    @Inject (RESOURCENAMETOKEN) resourcenametoken:string
  ) { 
    console.log("personhttp")
    super(urltoken,resourcenametoken,httpclient)
  }

  override getall(page: number, pageSize: number): Observable<Paginated<Person>> {
    
    return this.httpclient.get<PaginatedFromApi>(`${this.urltoken}${this.resourcenametoken}?_page=${page}&_per_page=${pageSize}`).pipe(
      map(value => {
        
        const paginada: Paginated<Person> = devolverbuenopaginated(value,pageSize,page);
        
        return paginada; 
      }),
      catchError(err => {
        console.error('Ha habido algún problema con la API', err);
        
        return throwError(() => new Error('Error en la API'));
      })
    );
  }
  

   
  
  
}
