import { PaginatedFromApi } from "../../models/PaginatedfromApi-model.interface";
import { Paginated } from "../../models/Paginates-model";
import { Person } from "../../models/Person-model.interface";
import { RawPersonFromApi } from "../../models/RawPersonfromApi-model";


export function devolverbuenopaginated(value:PaginatedFromApi,pagesize:number,page:number):Paginated<Person>{

    let valuefinal:Paginated<Person>={
        page:page,
        pageSize:value.data.length,
        pages:value.pages,
        data:value.data.map(c=>devolverbuenoperson(c))
    }
    return valuefinal
}

function devolverbuenoperson(value:RawPersonFromApi):Person{
    return {name:value.nombre, age:parseInt(value.edad),surname:value.apellido,id:value.id,grupoid:value.grupoId }
}