import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {AppRoutes} from './app.routing';
import {ListaModule} from './lista/lista.module';


import { HttpClientModule } from '@angular/common/http';
import {VisualizarModule} from './visualizar/visualizar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
      ListaModule,
      RouterModule.forRoot(AppRoutes),
      HttpClientModule,
      VisualizarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
