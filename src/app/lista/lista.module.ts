import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListaComponent} from './lista.component';
import {ListaService} from './lista.service';


@NgModule({
    declarations: [
        ListaComponent,
    ],
    imports: [
        BrowserModule,


    ],
    providers: [ListaService],
    bootstrap: [ListaComponent]
})
export class ListaModule {}