import {Routes} from '@angular/router';
import {ListaComponent} from './lista/lista.component';
import {VisualizarComponent} from './visualizar/visualizar.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full'
    },{
        path: 'lista', //caminho
        component: ListaComponent //componente
    },
    {
        path: 'visualizar', //caminho
        component: VisualizarComponent //componente
    },
]