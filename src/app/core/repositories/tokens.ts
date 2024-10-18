import { InjectionToken } from "@angular/core";
import { PersonHttpRepository } from "./impl/Personhttp-repository.service";
import { IBaseHttp } from "./interfaces/base-http.interface";
import { Person } from "../models/Person-model.interface";
import { PersonService } from "../services/impl/Person.service";
import { BaseService } from "../services/impl/Base.service";
import { IBaseService } from "../services/interfaces/Base.interface";
import { IMaping } from "../models/Map-model.interface";

export const URLTOKEN:InjectionToken<string>=new InjectionToken<String>('URLTOKEN')
export const BASEREPOSITORY:InjectionToken<IBaseHttp<any>>=new InjectionToken<IBaseHttp<any>>('BASEREPOSITORY')
export const PERSONREPOSITORY:InjectionToken<IBaseHttp<Person>>=new InjectionToken<IBaseHttp<Person>>('PERSONREPOSITORY')
export const PERSONESERVICE:InjectionToken<IBaseService<Person>>=new InjectionToken<IBaseService<Person>>('PERSONESERVICE')
export const RESOURCENAMETOKEN:InjectionToken<string>=new InjectionToken<String>('RESOURCENAMETOKEN')
export const MAPPINGTOKEN:InjectionToken<IMaping<Person>>=new InjectionToken<IMaping<Person>>('MAPPING')