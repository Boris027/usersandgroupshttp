import { Component, Inject } from '@angular/core';
import { IPersonService } from '../core/services/interfaces/Person.interface';
import { PERSONESERVICE } from '../core/repositories/tokens';
import { Paginated } from '../core/models/Paginates-model';
import { Person } from '../core/models/Person-model.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private personas:Person[]=[]
  private page:number=1
  private pagesize:number=5
  private totalpages:number=0
 
  constructor(
    @Inject (PERSONESERVICE) private servicio:IPersonService
  ) {
    this.getpage()
  }

  getpage(){
    this.servicio.getall(this.page,this.pagesize).subscribe({
      next:(value:Paginated<Person>) => {
        console.log(value.data)
        this.personas = [...this.personas, ...value.data];  
        this.totalpages=value.pages
      }
      
    })
    
  }

  siguientepagina(){
    if(this.totalpages>this.page){
      this.page+=1;
      this.getpage()
    }
    
  }

  getpersons(){
    return this.personas
  }

  onIonInfinite(event:any){
    this.siguientepagina()
    event.target.complete()
  }

 

}
