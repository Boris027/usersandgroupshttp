import { Observable } from "rxjs";
import { IMaping } from "../../models/Map-model.interface";
import { PaginatedFromApi } from "../../models/PaginatedfromApi-model.interface";
import { Paginated } from "../../models/Paginates-model";
import { Injectable } from "@angular/core";
import { RawPersonFromApi } from "../../models/RawPersonfromApi-model";
import { Person } from "../../models/Person-model.interface";


@Injectable({
    providedIn: 'root'
})


export class Mapping implements IMaping<Person>{

    getall(page:number, pageSize: number, pages:number,data: RawPersonFromApi[]): Paginated<Person> {
        
        return {
            page:page,
            pageSize:pageSize,
            pages:pages,
            data:data.map(c=>this.getOne(c))
        }

        //throw new Error("Method not implemented.");
    }
    getOne(value: RawPersonFromApi): Person {

        return {
            id:value.id,
            name:value.nombre,
            surname:value.apellido,
            age:parseInt(value.edad),
            grupoid:value.grupoId
        }

    }
    create(value: Person): Observable<Person> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Observable<Person | null> {
        throw new Error("Method not implemented.");
    }
    update(id: string, value: Person): Observable<Person | null> {
        throw new Error("Method not implemented.");
    }

    
    
}