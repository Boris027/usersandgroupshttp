import { Model } from "./Base-model.interface";

export interface Person extends Model{
    name:string
    surname:string
    age:number
    grupoid?:string
}