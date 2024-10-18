import { FactoryProvider } from "@angular/core";
import { MAPPINGTOKEN, PERSONESERVICE, PERSONREPOSITORY, RESOURCENAMETOKEN, URLTOKEN } from "./tokens";
import { PersonHttpRepository } from "./impl/Personhttp-repository.service";
import { PersonService } from "../services/impl/Person.service";
import { IBaseHttp } from "./interfaces/base-http.interface";
import { HttpClient } from "@angular/common/http";
import { Mapping } from "./impl/People-Mapping.service";
import { IMaping } from "../models/Map-model.interface";
import { Person } from "../models/Person-model.interface";


function createPersonHttpRepository(token:string,httpclient:HttpClient,resourcenametoken:string,mapping:IMaping<Person>){
    return new PersonHttpRepository(token,httpclient,resourcenametoken,mapping)
}


export const repositoryfactory:FactoryProvider ={
    deps:[URLTOKEN,HttpClient,RESOURCENAMETOKEN,MAPPINGTOKEN],
    provide: PERSONREPOSITORY,
    useFactory: (token:string,httpclient:HttpClient,resourcenametoken:string,mapping:IMaping<Person>) => {
        
        return createPersonHttpRepository(token,httpclient,resourcenametoken,mapping)
    }
}


function createPersonService(tokenrepositorio:IBaseHttp<any>){
    return new PersonService(tokenrepositorio)
}


export const repositoryfactoryservice:FactoryProvider ={
    deps:[PERSONREPOSITORY],
    provide: PERSONESERVICE,
    useFactory: (tokenrepositorio:IBaseHttp<any>) => {
        
        return createPersonService(tokenrepositorio)
    }
}
