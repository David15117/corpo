import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {VisualizarComponent} from './visualizar.component';

@NgModule({
    declarations: [
        VisualizarComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [VisualizarComponent]
})
export class VisualizarModule {}