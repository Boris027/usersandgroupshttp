import { Component, Inject } from '@angular/core';
import { PERSONREPOSITORY, URLTOKEN } from './core/repositories/tokens';
import { IBaseHttp } from './core/repositories/interfaces/base-http.interface';
import { Person } from './core/models/Person-model.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    //@Inject(URLTOKEN) nombre:String
    //@Inject(PERSONREPOSITORY) nombre:IBaseHttp<Person>
  ) {
    //console.log(nombre)
    //console.log(nombre)
  }
}
