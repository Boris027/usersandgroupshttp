import { FactoryProvider } from "@angular/core";
import { PERSONESERVICE, PERSONREPOSITORY, RESOURCENAMETOKEN, URLTOKEN } from "./tokens";
import { PersonHttpRepository } from "./impl/Personhttp-repository.service";
import { PersonService } from "../services/impl/Person.service";
import { IBaseHttp } from "./interfaces/base-http.interface";
import { HttpClient } from "@angular/common/http";


function createPersonHttpRepository(token:string,httpclient:HttpClient,resourcenametoken:string){
    return new PersonHttpRepository(token,httpclient,resourcenametoken)
}


export const repositoryfactory:FactoryProvider ={
    deps:[URLTOKEN,HttpClient,RESOURCENAMETOKEN],
    provide: PERSONREPOSITORY,
    useFactory: (token:string,httpclient:HttpClient,resourcenametoken:string) => {
        
        return createPersonHttpRepository(token,httpclient,resourcenametoken)
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
