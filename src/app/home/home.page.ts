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

  personas: Person[] = [];
  page:number=1
  pagesize:number=5
  totalItems: number = 0; // Total de elementos en el servidor
  totalpages:number=0;
  constructor(
    @Inject (PERSONESERVICE) private servicio:IPersonService
  ) {
    this.cargarPersonas()
    
  }

  async cargarPersonas() {
    // Llamamos al servicio para obtener los datos paginados
    this.servicio.getall(this.page, this.pagesize).subscribe({
      next: (response: Paginated<Person>) => {
        console.log(response)
        this.personas=[...this.personas,...response.data]
        // Aquí manejamos la respuesta paginada
        
        this.totalItems = response.pages; 
        this.totalpages=response.pages
      },
      error: (err) => {
        console.error('Error al cargar los datos', err);
      }
    });
  }

  // Método para pasar a la página siguiente
  paginaSiguiente() {

    if(this.page<=this.totalpages){
      this.page++;
      this.cargarPersonas();
    }

    
    
  }

  

  onIonInfinite(evento:any){
    console.log("a")
    this.paginaSiguiente()
    
    evento.target.complete()
  }

  

}
