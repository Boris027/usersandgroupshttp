import { Inject, Injectable } from '@angular/core';
import { Model } from '../../models/Base-model.interface';
import { Observable } from 'rxjs';
import { IBaseService } from '../interfaces/Base.interface';
import { Person } from '../../models/Person-model.interface';
import { BaseService } from './Base.service';
import { IPersonService } from '../interfaces/Person.interface';
import { IBaseHttp } from '../../repositories/interfaces/base-http.interface';
import { PERSONREPOSITORY } from '../../repositories/tokens';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService<Person> implements IPersonService {

  constructor(
    @Inject (PERSONREPOSITORY) repositorio:IBaseHttp<Person>
  ) { 
    console.log("Servicio Persona Creado")
    super(repositorio)
  }
    

    
  
}
