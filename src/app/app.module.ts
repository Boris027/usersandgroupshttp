import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MAPPINGTOKEN, RESOURCENAMETOKEN, URLTOKEN } from './core/repositories/tokens';
import { repositoryfactory, repositoryfactoryservice } from './core/repositories/repository.factory';
import { provideHttpClient } from '@angular/common/http';
import { Mapping } from './core/repositories/impl/People-Mapping.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:URLTOKEN, useValue:"http://localhost:3000/"},
    {provide:RESOURCENAMETOKEN, useValue:"personas"},
    {provide:MAPPINGTOKEN, useClass:Mapping},
    provideHttpClient(),
    repositoryfactory,
    repositoryfactoryservice
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
